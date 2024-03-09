#!/usr/bin/env zx
/* eslint-disable max-len */

// region ZX Util
$.verbose = false;

const join = path.join;
const filename = path.basename(__filename);

function exist(path) {
  return fs.existsSync(path);
}

function isDir(path) {
  return exist(path) && fs.lstatSync(path).isDirectory();
}

function isFile(path) {
  return exist(path) && fs.lstatSync(path).isFile();
}

async function iterateDir(path, fn) {
  if (!isDir(path)) {
    return;
  }

  for (const file of fs.readdirSync(path)) {
    await fn(file);
  }
}

function read(path) {
  return fs.readFileSync(path, { encoding: 'utf8' });
}

function readJson(path) {
  return fs.readJSONSync(path);
}

function write(p, content) {
  const dir = path.dirname(p);
  if (!exist(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  return fs.writeFileSync(p, content);
}

function writeJson(path, json) {
  return write(path, JSON.stringify(json, null, 2));
}

function remove(path) {
  if (!exist(path)) {
    return;
  }

  if (fs.lstatSync(path).isDirectory()) {
    return fs.rmSync(path, { force: true, recursive: true });
  } else {
    return fs.rmSync(path, { force: true });
  }
}

function addLine(str, added, backward = false) {
  if (backward) {
    return added + '\n' + str;
  } else {
    return str + '\n' + added;
  }
}

function addLineToFile(path, added, backward = false) {
  return write(path, addLine(read(path), added, backward));
}

const _printTag = '' || filename;

function print(...args) {
  echo(`\x1B[35m[${_printTag}]`, ...args, '\x1B[0m');
}

function printSuccess(...args) {
  echo(`\x1B[36m\x1B[46m✅  [${_printTag}]`, ...args, '\x1B[0m');
}

function printError(...args) {
  echo(`\x1B[31m\x1b[43m⚠️ [${_printTag}]`, ...args, '\x1B[0m');
}

async function input(message) {
  if (message) {
    return question(message + ': ');
  } else {
    return stdin();
  }
}

async function fixLint(path) {
  await $`yarn prettier ${path} --write --log-level silent`;
  await $`yarn eslint ${path} --fix --quiet --max-warnings 100`;
}

const HEADING = `// @ts-nocheck
/* eslint-disable */
/**
 * Generated file. Don't modify manually.
 */
 `;

// endregion

const tmpDir = './asset/tmp';

const ICON = async () => {
  const outDir = './src/component/icon';
  const srcDir = './asset/icon';

  // eslint-disable-next-line max-len
  await $`svgr --out-dir ${tmpDir} --typescript --icon 24px  --no-dimensions --svg-props strokeWidth=1.75 --silent --no-index -- ${srcDir}`;

  await $`pwd`;

  const allIconsInResult = [];
  const generatedIconInResult = [];
  fs.readdirSync(outDir).forEach((file) => {
    allIconsInResult.push(file);
  });

  for (const file of fs.readdirSync(tmpDir)) {
    const p = join(tmpDir, file);
    let content = await fs.readFile(p, 'utf8');

    content = content.replace('props: SVGProps<SVGSVGElement>', 'props: IconProps');
    content = content.replace('<svg', '<Icon\nw={w}h={h}');
    content = content.replace('</svg>', '</Icon>');
    content = content.replace("import type { SVGProps } from 'react';", '');
    content = content.replace(/const Svg(.*)/, 'const IC$1');
    content = content.replace(/export default Svg(.*)/, 'export default IC$1');
    content = content.replace(/className="(.*)"/, '');
    content = content.replace(
      'props: IconProps',
      '{size, w = size, h = size, ...props}: IconProps & { size?: ResponsiveValue<number> }',
    );
    content = `import { Icon, IconProps, ResponsiveValue } from '@chakra-ui/react';\n${content}`;
    content = `${HEADING}\n${content}`;

    const newname = join(outDir, `IC${file}`);
    generatedIconInResult.push(`IC${file}`);
    write(newname, content);
    remove(p);
  }

  for (const file of allIconsInResult) {
    if (!generatedIconInResult.includes(file)) {
      remove(join(outDir, file));
      printSuccess(`Delete ${file}`);
    }
  }

  await fixLint(outDir);
};

await spinner('icon', ICON);
remove(tmpDir);
printSuccess('Success');
