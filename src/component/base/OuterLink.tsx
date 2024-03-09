import type { LinkProps } from '@chakra-ui/next-js';

import { Link } from './Link';

type Props = {} & LinkProps;

export function OuterLink({ ...rest }: Props) {
  return <Link target={'_blank'} rel={'noopener noreferrer'} {...rest} />;
}
