import React, { forwardRef } from 'react';
import { Box, type BoxProps as ViewProps, type StackProps } from '@chakra-ui/react';

const View = forwardRef(({ as, ...props }: StackProps, ref) => (
  <Box as={as} ref={ref} {...props} />
));

export { View };
export type { ViewProps };
