// @ts-nocheck
/* eslint-disable */
/**
 * Generated file. Don't modify manually.
 */

import { Icon, IconProps, ResponsiveValue } from '@chakra-ui/react';
import * as React from 'react';

const ICMinusCircle = ({
  size,
  w = size,
  h = size,
  ...props
}: IconProps & { size?: ResponsiveValue<number> }) => (
  <Icon
    w={w}
    h={h}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    aria-hidden="true"
    data-slot="icon"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0"
    />
  </Icon>
);
export default ICMinusCircle;
