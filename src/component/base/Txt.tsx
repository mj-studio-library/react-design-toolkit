'use client';

import { forwardRef } from 'react';
import { Text as Inner, type TextProps as Props } from '@chakra-ui/react';
import { is } from '@mj-studio/js-util';

export type TextProps = Props & { maxLines?: number; s?: TextProps['textStyle'] };

export const Txt = forwardRef(({ maxLines, children, textStyle, s, ...rest }: TextProps, ref) => (
  <Inner
    ref={ref}
    textStyle={textStyle ?? s}
    {...rest}
    css={
      is.number(maxLines)
        ? ` 
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: ${maxLines}; /* number of lines to show */
    line-clamp: ${maxLines};
    -webkit-box-orient: vertical;`
        : ''
    }
  >
    {children}
  </Inner>
));

export const ErrorTxt = forwardRef(({ maxLines, children, ...rest }: TextProps, ref) =>
  children ? (
    <Txt ref={ref} color={'error'} fontWeight={'medium'} fontStyle={'italic'} {...rest}>
      {children}
    </Txt>
  ) : null,
);
