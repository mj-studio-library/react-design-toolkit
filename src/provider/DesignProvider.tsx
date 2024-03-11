import type { PropsWithChildren } from 'react';
import React from 'react';
import {
  baseTheme,
  ChakraProvider,
  ColorModeScript,
  cookieStorageManagerSSR,
} from '@chakra-ui/react';
import type { Dict } from '@chakra-ui/utils';
import type { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';

import { AppAlertDialogProvider } from '../component/dialog/AppAlertDialog';
import StyledComponentsRegistry from '../registry';

import { InitialCookiesProvider } from './InitialCookieProvider';

type Props = PropsWithChildren<{
  cookies: RequestCookie[];
  cookiesString: string;
  theme?: Dict;
  initialColorMode?: 'dark' | 'ligh';
  enableColorModeScript?: boolean;
}>;

export const DesignProvider = ({
  children,
  cookies,
  cookiesString,
  theme,
  initialColorMode,
  enableColorModeScript = true,
}: Props) => {
  return (
    <InitialCookiesProvider cookies={cookies}>
      {enableColorModeScript ? (
        <ColorModeScript
          initialColorMode={
            initialColorMode ??
            cookies.find((i) => i.name === 'chakra-ui-color-mode')?.value === 'dark'
              ? 'dark'
              : 'light'
          }
          type={'cookie'}
        />
      ) : null}
      <StyledComponentsRegistry>
        <ChakraProvider
          colorModeManager={cookieStorageManagerSSR(cookiesString)}
          theme={theme ?? baseTheme}
        >
          <AppAlertDialogProvider>{children}</AppAlertDialogProvider>
        </ChakraProvider>
      </StyledComponentsRegistry>
    </InitialCookiesProvider>
  );
};
