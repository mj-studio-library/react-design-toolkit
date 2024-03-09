import { forwardRef } from 'react';
import type { LinkProps } from '@chakra-ui/next-js';

const Link = forwardRef((props: LinkProps, ref) => <Link ref={ref} {...props} />);
export { Link };
export type { LinkProps };
