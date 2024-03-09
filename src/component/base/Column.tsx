import React, { forwardRef } from 'react';
import type { StackProps } from '@chakra-ui/react';
import { VStack } from '@chakra-ui/react';

const Column = forwardRef(({ as, ...props }: StackProps, ref) => (
  <VStack alignItems={'stretch'} as={as} gap={0} ref={ref} {...props} />
));

const ColumnCenter = forwardRef(({ as, ...props }: StackProps, ref) => (
  <Column as={as} ref={ref} {...props} alignItems={'center'} />
));

export { Column, ColumnCenter };
export type { StackProps as ColumnProps };
