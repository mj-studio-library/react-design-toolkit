import type { SystemStyleObject } from '@chakra-ui/react';

type CSSCustomProperties = {
  [key: `--${string}`]: string | number;
};

type CSSSelectorObject = {
  [cssSelector: string]: SystemStyleObject | CSSCustomProperties;
};

export type BetterSystemStyleObject = SystemStyleObject | CSSCustomProperties | CSSSelectorObject;
