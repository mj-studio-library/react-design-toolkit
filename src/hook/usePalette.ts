import { darkPalette, lightPalette } from '../styles/theme/palette';

import { useDarkTheme } from './useDarkTheme';

export function usePalette() {
  const { isDarkTheme } = useDarkTheme();

  return isDarkTheme ? darkPalette : lightPalette;
}
