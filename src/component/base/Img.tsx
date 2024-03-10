import type { Ref } from 'react';
import React, { forwardRef } from 'react';
import type { ImageProps } from '@chakra-ui/next-js';
import { Image } from '@chakra-ui/next-js';

const Img = forwardRef<HTMLImageElement, ImageProps>(
  (props: ImageProps, ref: Ref<HTMLImageElement>) => <Image ref={ref} {...props} />,
);
export { Img };
export type { ImageProps as ImgProps };
