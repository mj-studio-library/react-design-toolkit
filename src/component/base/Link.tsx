import type { Ref } from 'react';
import React, { forwardRef } from 'react';
import type { LinkProps } from '@chakra-ui/next-js';
import { Link as Inner } from '@chakra-ui/next-js';

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (props: LinkProps, ref: Ref<HTMLAnchorElement>) => <Inner ref={ref} {...props} />,
);
export { Link };
export type { LinkProps };
