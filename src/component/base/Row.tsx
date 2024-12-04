import React from 'react';
import type { StackProps } from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react';

function Row({ as, ...props }: StackProps) {
  return <HStack alignItems={'stretch'} as={as} gap={0} {...props} />;
}

function RowCenter({ as, ...props }: StackProps) {
  return <Row as={as} {...props} alignItems={'center'} />;
}

export { Row, RowCenter };
export type { StackProps as RowProps };
