'use client';

import { darkPalette, lightPalette } from '../styles/system/palette';

import { useDarkTheme } from './useDarkTheme';

export function usePalette() {
  const { isDarkTheme } = useDarkTheme();

  return isDarkTheme ? darkPalette : lightPalette;
}
