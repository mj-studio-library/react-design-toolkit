import type { Ref } from 'react';
import { forwardRef } from 'react';
import type { LinkProps } from '@chakra-ui/next-js';
import { Link as Inner } from '@chakra-ui/next-js';

const Link = forwardRef((props: LinkProps, ref: Ref<HTMLAnchorElement>) => (
  <Inner ref={ref} {...props} />
));
export { Link };
export type { LinkProps };
