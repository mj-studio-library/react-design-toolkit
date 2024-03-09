import type { LinkProps } from '@chakra-ui/next-js';

import { Link } from './Link';

type Props = {} & LinkProps;

function OuterLink({ ...rest }: Props) {
  return <Link target={'_blank'} rel={'noopener noreferrer'} {...rest} />;
}

export default OuterLink;
