import type { SpinnerProps } from '@chakra-ui/react';
import { Spinner as Inner } from '@chakra-ui/react';

export function Spinner(props: SpinnerProps) {
  return <Inner size={'md'} {...props} />;
}

export type { SpinnerProps };
