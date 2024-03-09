import type { PropsWithChildren } from 'react';
import React from 'react';
import { ChakraProvider, ColorModeScript, cookieStorageManagerSSR } from '@chakra-ui/react';
import type { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';

import StyledComponentsRegistry from '../registry';
import ChakraTheme from '../server/styles/ChakraTheme';

import { InitialCookiesProvider } from './InitialCookieProvider';

type Props = PropsWithChildren<{ cookies: RequestCookie[]; cookiesString: string }>;

export const DesignProvider = ({ children, cookies, cookiesString }: Props) => {
  return (
    <InitialCookiesProvider cookies={cookies}>
      <ColorModeScript
        initialColorMode={
          cookies.find((i) => i.name === 'chakra-ui-color-mode')?.value === 'dark'
            ? 'dark'
            : 'light'
        }
        type={'cookie'}
      />
      <StyledComponentsRegistry>
        <ChakraProvider
          colorModeManager={cookieStorageManagerSSR(cookiesString)}
          theme={ChakraTheme}
        >
          {children}
        </ChakraProvider>
      </StyledComponentsRegistry>
    </InitialCookiesProvider>
  );
};
