import { forwardRef } from 'react';
import type { IconButtonProps } from '@chakra-ui/react';
import { IconButton as Inner } from '@chakra-ui/react';

export const IconBtn = forwardRef((props: IconButtonProps, ref) => (
  <Inner colorScheme={'gray'} ref={ref} variant={'ghost'} {...props} />
));

export type { IconButtonProps as IconBtnProps };
