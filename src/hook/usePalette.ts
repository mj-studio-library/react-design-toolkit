import type { ThemedPalette } from '../server/styles/palette';
import { darkPalette, lightPalette } from '../server/styles/palette';

import { useDarkTheme } from './useDarkTheme';

export function usePalette(): ThemedPalette {
  const { isDarkTheme } = useDarkTheme();

  return isDarkTheme ? darkPalette : lightPalette;
}
