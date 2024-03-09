import { darkPalette, lightPalette } from '../server/styles/palette';

import { useDarkTheme } from './useDarkTheme';

export function usePalette() {
  const { isDarkTheme } = useDarkTheme();

  return isDarkTheme ? darkPalette : lightPalette;
}
