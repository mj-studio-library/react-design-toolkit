import type { PropsWithChildren } from 'react';

import type { ColumnProps } from './Column';
import { Column } from './Column';

type Props = PropsWithChildren<{ center?: boolean }> & ColumnProps;

const Full = ({ children, center = false, ...rest }: Props) => {
  return (
    <Column
      flex={1}
      w={'100%'}
      h={'100%'}
      {...(center ? { alignSelf: 'center', justifyContent: 'center' } : undefined)}
      {...rest}
    >
      {children}
    </Column>
  );
};

export default Full;
