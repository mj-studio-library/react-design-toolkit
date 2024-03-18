import type {
  ComponentStyleConfig,
  StyleFunctionProps,
  ThemeConfig,
  ThemeOverride,
} from '@chakra-ui/react';
import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import type { Dict } from '@chakra-ui/utils';

import { DT } from './DesignToken';
import { darkPalette, lightPalette, palette } from './palette';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
  cssVarPrefix: 'ck',
};

const Card: ComponentStyleConfig = {
  defaultProps: {
    variant: 'outline',
  },
};

type ExtendTheme = (...extensions: Array<ThemeOverride>) => Dict;

const _extend = extendTheme as ExtendTheme;

const baseTheme = _extend(withDefaultColorScheme({ colorScheme: 'orange' }), {
  config,
  colors: palette,
  space: DT.space,
  sizes: DT.sizes,
  breakpoints: DT.breakpoints,
  semanticTokens: {
    colors: {
      text: {
        default: lightPalette.text,
        _dark: darkPalette.text,
      },
      background: {
        default: lightPalette.background,
        _dark: darkPalette.background,
      },
      sub1: {
        default: lightPalette.sub1,
        _dark: darkPalette.sub1,
      },
      sub2: {
        default: lightPalette.sub2,
        _dark: darkPalette.sub2,
      },
      outline: {
        default: lightPalette.outline,
        _dark: darkPalette.outline,
      },
      surface: {
        default: lightPalette.surface,
        _dark: darkPalette.surface,
      },
      surfaceHighlight: {
        default: lightPalette.surfaceHighlight,
        _dark: darkPalette.surfaceHighlight,
      },
      hyperlink: {
        default: lightPalette.hyperlink,
        _dark: darkPalette.hyperlink,
      },
      inlineCodeBackground: {
        default: lightPalette.gray100,
        _dark: darkPalette.surface,
      },
      error: {
        default: lightPalette.error,
        _dark: darkPalette.error,
      },
      warning: {
        default: lightPalette.orange400,
        _dark: lightPalette.orange300,
      },
      overlay: {
        default: '#22222280',
      },
    },
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      'html, body': {
        bg: mode(lightPalette.background, darkPalette.background)(props),
      },
    }),
  },
  components: {
    Card,
    Link: {
      baseStyle: {
        '&:hover': { textDecoration: 'none' },
      },
    },
    Textarea: {
      defaultProps: {
        variant: 'filled',
      },
    },
  },

  textStyles: DT.text,
});

const extendBaseTheme = (...extensions: Array<ThemeOverride>) => {
  return _extend(baseTheme, ...extensions);
};

export { baseTheme, extendBaseTheme };
