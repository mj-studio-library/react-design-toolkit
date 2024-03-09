// @ts-nocheck
/* eslint-disable */
/**
 * Generated file. Don't modify manually.
 */

import { Icon, IconProps, ResponsiveValue } from '@chakra-ui/react';
import * as React from 'react';

const ICCheckCircle = ({
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
      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"
    />
  </Icon>
);
export default ICCheckCircle;
