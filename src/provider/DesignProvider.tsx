import type { PropsWithChildren } from 'react';
import React from 'react';
import {
  baseTheme,
  ChakraProvider,
  ColorModeScript,
  cookieStorageManagerSSR,
} from '@chakra-ui/react';
import type { Dict } from '@chakra-ui/utils';

import { AppAlertDialogProvider } from '../component/dialog/AppAlertDialog';
import StyledComponentsRegistry from '../registry';

import { InitialCookiesProvider } from './InitialCookieProvider';

type Props = PropsWithChildren<{
  theme?: Dict;
  /** color mode of theme, default: light */
  colorMode?: 'dark' | 'light';
  enableColorModeScript?: boolean;
}>;

const cookieKey = 'chakra-ui-color-mode';
export const DesignProvider = ({
  children,
  theme,
  colorMode = 'light',
  enableColorModeScript = true,
}: Props) => {
  return (
    <InitialCookiesProvider cookies={[{ name: cookieKey, value: colorMode }]}>
      {enableColorModeScript ? (
        <ColorModeScript initialColorMode={colorMode} type={'cookie'} />
      ) : null}
      <StyledComponentsRegistry>
        <ChakraProvider
          colorModeManager={cookieStorageManagerSSR(`${cookieKey}=${colorMode}`)}
          theme={theme ?? baseTheme}
        >
          <AppAlertDialogProvider>{children}</AppAlertDialogProvider>
        </ChakraProvider>
      </StyledComponentsRegistry>
    </InitialCookiesProvider>
  );
};
