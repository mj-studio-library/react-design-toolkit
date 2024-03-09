import type {
  ComponentStyleConfig,
  StyleFunctionProps,
  ThemeConfig,
  ThemeOverride,
} from '@chakra-ui/react';
import { defineStyleConfig, extendTheme, withDefaultColorScheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import type { Dict } from '@chakra-ui/utils';

import { DT } from '../system/DesignToken';
import { darkPalette, lightPalette, palette } from '../system/palette';

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

export default (extendTheme as ExtendTheme)(withDefaultColorScheme({ colorScheme: 'orange' }), {
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
      noteNoteBackground: {
        default: lightPalette.noteNoteBackground,
        _dark: darkPalette.noteNoteBackground,
      },
      noteNoteForeground: {
        default: lightPalette.noteNoteForeground,
        _dark: darkPalette.noteNoteForeground,
      },
      noteWarnBackground: {
        default: lightPalette.noteWarnBackground,
        _dark: darkPalette.noteWarnBackground,
      },
      noteWarnForeground: {
        default: lightPalette.noteWarnForeground,
        _dark: darkPalette.noteWarnForeground,
      },
      noteDangerBackground: {
        default: lightPalette.noteDangerBackground,
        _dark: darkPalette.noteDangerBackground,
      },
      noteDangerForeground: {
        default: lightPalette.noteDangerForeground,
        _dark: darkPalette.noteDangerForeground,
      },
      inlineCodeBackground: {
        default: lightPalette.gray100,
        _dark: darkPalette.surface,
      },
      error: {
        default: lightPalette.error,
        _dark: darkPalette.error,
      },
      nucleusStroke: {
        default: lightPalette.sub2,
        _dark: darkPalette.sub1,
      },
      nucleusCircle: {
        default: '#515151',
        _dark: '#C2C2C2',
      },
      nucleusCircleStroke: {
        default: '#FFFFFF',
        _dark: '#151515',
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
    NoteCard: defineStyleConfig({
      baseStyle: {
        p: [4, 6, 8],
        borderWidth: 1,
        fontWeight: '500',
      },
      variants: {
        note: {},
        warn: {},
        danger: {},
      },
    }),
    Textarea: {
      defaultProps: {
        variant: 'filled',
      },
    },
  },

  textStyles: DT.text,
});
