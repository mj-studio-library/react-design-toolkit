import type { PropsWithChildren } from 'react';
import React from 'react';
import { baseTheme, ChakraProvider, cookieStorageManagerSSR } from '@chakra-ui/react';
import type { Dict } from '@chakra-ui/utils';
import type { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';

import { AppAlertDialogProvider } from '../component/dialog/AppAlertDialog';
import StyledComponentsRegistry from '../registry';

import { InitialCookiesProvider } from './InitialCookieProvider';

type Props = PropsWithChildren<{
  cookies: RequestCookie[];
  cookiesString: string;
  theme?: Dict;
}>;

export const DesignProvider = ({ children, cookies, cookiesString, theme }: Props) => {
  return (
    <InitialCookiesProvider cookies={cookies}>
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
