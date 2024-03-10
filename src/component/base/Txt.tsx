import React, { forwardRef } from 'react';
import { Text as Inner, type TextProps as Props } from '@chakra-ui/react';
import { is } from '@mj-studio/js-util';

export type TxtProps = Props & { maxLines?: number; s?: TxtProps['textStyle'] };

export const Txt = forwardRef<HTMLParagraphElement, TxtProps>(
  ({ maxLines, children, textStyle, s, ...rest }: TxtProps, ref) => (
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
  ),
);

export const ErrorTxt = forwardRef<HTMLParagraphElement, TxtProps>(
  ({ maxLines, children, ...rest }: TxtProps, ref) =>
    children ? (
      <Txt ref={ref} color={'error'} fontWeight={'medium'} fontStyle={'italic'} {...rest}>
        {children}
      </Txt>
    ) : null,
);
