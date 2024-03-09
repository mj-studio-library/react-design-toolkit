import type { PropsWithChildren } from 'react';

import type { ColumnProps } from './Column';
import { Column } from './Column';

type Props = PropsWithChildren<{ center?: boolean }> & ColumnProps;

const AbsoluteFill = ({ children, center = false, ...rest }: Props) => {
  return (
    <Column
      {...(center ? { alignSelf: 'center', justifyContent: 'center' } : undefined)}
      position={'absolute'}
      top={0}
      left={0}
      right={0}
      bottom={0}
      {...rest}
    >
      {children}
    </Column>
  );
};

export default AbsoluteFill;
