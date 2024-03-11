# MJStudio React Design Toolkit

![ogimage-1260-630](https://github.com/mj-studio-library/react-design-toolkit/assets/33388801/daedb570-b64e-44eb-945c-ff151081e4dc)

An opinioned design system toolkit tailored for React applications using **Next.js**

This package is top of the Chakra UI, incorporating related libraries internally.

The all libraries are dependency of chakra-ui itself.

You should install peer dependencies for it works correctly.

## Install

```
yarn add @mj-studio/react-design-toolkit
```

Install Peer Dependencies

```
"@chakra-ui/next-js": "^2.2.0",
"@chakra-ui/react": "^2.8.1",
"@emotion/react": "^11.11.3",
"@emotion/styled": "^11.11.0",
"framer-motion": "^11.0.8",
"styled-components": "^6.1.8",
"styled-system": "^5.1.5"
```

## Usage

### 1. Create theme file

`AppTheme.ts`

```tsx
'use client';  
  
import { extendBaseTheme } from '@mj-studio/react-design-toolkit';  
  
export default extendBaseTheme({});
```

Extend & Extend Theme token is described as the following section.
### 2. Wrap with DesignProvider

`app/layout.tsx`

```tsx
<DesignProvider cookies={cookies().getAll()} cookiesString={cookies().toString()} theme={AppTheme}>
  {children}
</DesignProvider>
```

You should this in React Server Component.

Pass theme object created by Step 1 to `theme` prop.

### 3. Use Component, Hook, Theme Token

All components are wrapping of Chakra-UI components.

So you can use all the `styled-system` syntax used in it.

Currently, css variables always have a prefix of `--ck`, but this will be changed so that it can be set in a future update.

For example, colors can be used in CSS like `var(--ck-colors-red-500)`.

Here is an example.

```tsx
export default function Page() {  
  return (  
    <Column>  
      <Card colorScheme={'red'} mt={2} bg={'background'} />  
      <Txt color={'red50.50'}>{'123'}</Txt>  
    </Column>  
  );  
}
```

### Change & Extend Theme Token

If you want to extend base theme, you can use `extendTheme` like syntax to define properties.

The properties of theme `Dict` are same as Chakra-UI Itself.

You can learn more about in [Chakra-UI Docs](https://chakra-ui.com/docs/styled-system/customize-theme)

#### Change & Extend base theme tokens

A list of all theme tokens can be found in `node_modules/@chakra-ui/styled-system/dist/theming.types.d.ts` by executing the following Type Generation command after installing the package.

```
// yarn
yarn theme lib/AppTheme.ts

// npm
npm run theme lib/AppTheme.ts
```

In your Theme file, 

```tsx
'use client';  
  
import { extendBaseTheme } from '@mj-studio/react-design-toolkit';  
  
export default extendBaseTheme({  
  semanticTokens: {  
    colors: {  
      background: {  
        default: 'red',  
        _dark: 'blue',  
      },  
    },  
  },  
});
```

You can also utilize the charka-ui method of creating custom themes from objects exported as themes.

For detailed instructions, please refer to the following. [docs](https://chakra-ui.com/docs/styled-system/customize-theme)

### Components

- TBD

### Hooks

- TBD


### TypeScript & CLI

If you want to use Typescript, run this command from your project root.

```sh
// yarn
yarn theme lib/AppTheme.ts

// npm
npm run theme lib/AppTheme.ts
```

It will generate  theme type definition file to `node_modules/@chakra-ui/styled-system/dist/theming.types.d.ts` by your theme file configuration.

TypeScript will recommend tokens from the theme as much as possible, but this does not guarantee complete type safety.

Basically, properties must also be able to accept values that can be expressed in CSS, so if you insert a non-existent theme token value, the feature will not work properly.



## Troubleshooting

This package is on alpha phase.

Any issue filing is welcome 🤗
