// @ts-nocheck
/* eslint-disable */
/**
 * Generated file. Don't modify manually.
 */

import { Icon, IconProps, ResponsiveValue } from '@chakra-ui/react';
import * as React from 'react';

const ICCube = ({
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
      d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
    />
  </Icon>
);
export default ICCube;
