import type { Ref } from 'react';
import React, { forwardRef } from 'react';
import type { ImageProps } from '@chakra-ui/next-js';
import { Image } from '@chakra-ui/next-js';
import type CSS from 'csstype';

type ImgProps = Omit<ImageProps, 'w' | 'width' | 'h' | 'height' | 'objectFit'> & {
  w?: number | `${number}` | undefined;
  h?: number | `${number}` | undefined;
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
  objectFit?: CSS.Property.ObjectFit;
};

const Img = forwardRef<HTMLImageElement, ImgProps>(
  ({ w, h, width, height, objectFit, style, ...rest }: ImgProps, ref: Ref<HTMLImageElement>) => (
    <Image
      ref={ref}
      {...rest}
      objectFit={objectFit ?? style?.objectFit}
      style={{ objectFit, ...style }}
      width={width ?? w}
      height={height ?? h}
    />
  ),
);
export { Img };
export type { ImgProps };
