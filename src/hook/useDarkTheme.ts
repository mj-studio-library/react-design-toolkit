'use client';

import { useColorMode } from '@chakra-ui/react';

import { useInitialCookiesContext } from '../provider/InitialCookieProvider';

export function useDarkTheme() {
  const { cookies } = useInitialCookiesContext();
  const { colorMode } = useColorMode();
  if (typeof window === 'undefined') {
    const isDarkTheme = cookies.find((c) => c.name === 'chakra-ui-color-mode')?.value === 'dark';

    return {
      isDarkTheme,
      selectByTheme: <A, B>(light: A, dark: B) => (isDarkTheme ? dark : light),
    };
  } else {
    const isDarkTheme = colorMode === 'dark';

    return {
      isDarkTheme,
      selectByTheme: <A, B>(light: A, dark: B) => (isDarkTheme ? dark : light),
    };
  }
}
