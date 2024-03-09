import { is } from '@mj-studio/js-util';

const space = {
  px: '1px',
  0.5: '0.125rem',
  1: '0.25rem',
  1.5: '0.375rem',
  2: '0.5rem',
  2.5: '0.625rem',
  3: '0.75rem',
  3.5: '0.875rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
  11: '2.75rem',
  12: '3rem',
  13: '3.25rem',
  14: '3.5rem',
  15: '3.75rem',
  16: '4rem',
  17: '4.25rem',
  18: '4.5rem',
  19: '4.75rem',
  20: '5rem',
  21: '5.25rem',
  22: '5.5rem',
  23: '5.75rem',
  24: '6rem',
  25: '6.25rem',
  26: '6.5rem',
  27: '6.75rem',
  28: '7rem',
  29: '7.25rem',
  30: '7.5rem',
  31: '7.75rem',
  32: '8rem',
  33: '8.25rem',
  34: '8.5rem',
  35: '8.75rem',
  36: '9rem',
  37: '9.25rem',
  38: '9.5rem',
  39: '9.75rem',
  40: '10rem',
  41: '10.25rem',
  42: '10.5rem',
  43: '10.75rem',
  44: '11rem',
  45: '11.25rem',
  46: '11.5rem',
  47: '11.75rem',
  48: '12rem',
  52: '13rem',
  56: '14rem',
  60: '15rem',
  64: '16rem',
  72: '18rem',
  80: '20rem',
  96: '24rem',
};

export const DT = {
  sidePadding: 8,
  verticalPading: 8,
  breakpoints: {
    'base': '0em',
    'sm': '480px',
    'md': '768px',
    'lg': '1280px',
    'xl': '1400px',
    '2xl': '1600px',
  },
  space,
  sizes: {
    ...space,
    'max': 'max-content',
    'min': 'min-content',
    'full': '100%',
    '3xs': '14rem',
    '2xs': '16rem',
    'xs': '20rem',
    'sm': '24rem',
    'md': '28rem',
    'lg': '32rem',
    'xl': '36rem',
    '2xl': '42rem',
    '3xl': '48rem',
    '4xl': '56rem',
    '5xl': '64rem',
    '6xl': '72rem',
    '7xl': '80rem',
    '8xl': '90rem',
    'container': {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  text: {
    display: {
      fontSize: '2.5rem',
      lineHeight: 1.4,
      fontWeight: '500',
    },
    t1: {
      fontSize: '2rem',
      lineHeight: 1.5,
      fontWeight: '600',
    },
    t2: {
      fontSize: '1.25rem',
      lineHeight: 1.6,
      fontWeight: '600',
    },
    t3: {
      fontSize: '1rem',
      lineHeight: 1.5,
      fontWeight: '600',
    },
    b1: {
      fontSize: '1.125rem',
      lineHeight: 1.55,
      fontWeight: '400',
    },
    b2: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    b3: {
      fontSize: '0.875rem',
      lineHeight: 1.4285,
    },
    b4: {
      fontSize: '0.75rem',
      lineHeight: 1.6666,
    },
    caption: {
      fontSize: '0.75rem',
      lineHeight: 1.3333,
      fontWeight: '400',
    },
  },
};

export type Breakpoints = keyof (typeof DT)['breakpoints'];

export function getHalfValueSpaceValue(value: string | number) {
  if (is.number(value)) {
    return value / 2;
  }

  const regex = /^(-?\d+(\.\d+)?)([a-z]+)$/;
  const match = regex.exec(value);

  if (!match) {
    return value;
  }

  return `${Number(match[1]) / 2}${match[3]}`;
}

export function convertToNegativeSpaceValue(value: string | number) {
  if (is.number(value)) {
    return -1 * value;
  }

  if (value.startsWith('-')) {
    return value.slice(1);
  } else {
    return `-${value}`;
  }
}
export const ThemeSpaceHalfs = Object.fromEntries(
  Object.entries(DT.space).map(([k, v]) => {
    return [k, getHalfValueSpaceValue(v)];
  }),
);
