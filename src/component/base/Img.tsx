import { forwardRef } from 'react';
import type { ImageProps } from '@chakra-ui/next-js';
import { Image } from '@chakra-ui/next-js';

const Img = forwardRef((props: ImageProps, ref) => <Image ref={ref} {...props} />);
export { Img };
export type { ImageProps as ImgProps };
