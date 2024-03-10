import React, { forwardRef } from 'react';
import type { ButtonProps as InnerProps } from '@chakra-ui/react';
import { Button as Inner } from '@chakra-ui/react';

type BtnProps = InnerProps & { removeHoverClickBackground?: boolean };

const Btn = forwardRef(
  ({ removeHoverClickBackground, _hover, _active, ...rest }: BtnProps, ref) => (
    <Inner
      _active={removeHoverClickBackground ? { ..._active, backgroundColor: undefined } : _hover}
      _hover={removeHoverClickBackground ? { ..._hover, backgroundColor: undefined } : _hover}
      display={'flex'}
      ref={ref}
      {...rest}
    />
  ),
);
export { Btn };
export type { BtnProps };
