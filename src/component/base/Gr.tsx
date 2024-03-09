'use client';

import type { ResponsiveArray, ThemeTypings } from '@chakra-ui/styled-system';
import { is } from '@mj-studio/js-util';
import type * as CSS from 'csstype';
import styled from 'styled-components';
import { variant } from 'styled-system';

import type { BetterSystemStyleObject } from '../../@types/common-types';
import { convertToNegativeSpaceValue, DT, ThemeSpaceHalfs } from '../../styles/system/DesignToken';

import { Row } from './Row';
import type { ViewProps } from './View';
import { View } from './View';

type Responsive<T> = T | ResponsiveArray<T>;

type Token<CSSType, ThemeKey = unknown> = ThemeKey extends keyof ThemeTypings
  ? Responsive<CSSType | ThemeTypings[ThemeKey]>
  : Responsive<CSSType>;

export type GProps = {
  gap?: Token<CSS.Property.GridGap | number, 'space'>;
  gapX?: Token<CSS.Property.GridGap | number, 'space'>;
  gapY?: Token<CSS.Property.GridGap | number, 'space'>;
  wrap?: Responsive<boolean>;
} & Omit<ViewProps, 'gap' | 'columnGap' | 'rowGap' | 'gridGap' | 'gridColumnGap' | 'gridRowGap'>;
type GWidthType = number | 'max' | 'min';

export type GItemProps = { w: Responsive<GWidthType> } & Omit<
  ViewProps,
  'width' | 'w' | 'maxW' | 'maxWidth' | 'flex' | 'flexBasis' | 'flexShrink' | 'flexGrow'
>;

const Base = styled(Row)(
  variant({
    prop: '$gapX',
    variants: Object.fromEntries(
      Object.entries(ThemeSpaceHalfs).map(([key, value]) => {
        const styleValue: BetterSystemStyleObject = {
          '& > *': { px: value },
          'mx': convertToNegativeSpaceValue(value),
        };

        return [key, styleValue];
      }),
    ),
  }),
  variant({
    prop: '$gapY',
    variants: Object.fromEntries(
      Object.entries(DT.space).map(([key, value]) => {
        const styleValue: BetterSystemStyleObject = {
          '& > *': { mt: value },
          'mt': convertToNegativeSpaceValue(value),
        };

        return [key, styleValue];
      }),
    ),
  }),
  variant({
    prop: 'wrap',
    variants: {
      true: {
        flexWrap: 'wrap',
      },
      false: {
        flexWrap: 'nowrap',
      },
    },
  }),
);

function parseResponsive<R>(
  value: Responsive<GWidthType>,
  parser: (w: GWidthType) => R,
): Responsive<R> {
  if (is.array(value)) {
    return value.map(parser as any);
  } else {
    return parser(value);
  }
}

function getPixelOrPercentByNumber(w: number): `${number}%` | `${number}px` {
  if (w <= 1) {
    return `${((w * 100) / 10000) * 10000}%`;
  }

  return `${w}px`;
}

const getFlexGrow = (w: GWidthType) => (w === 'max' ? 1 : w === 'min' ? 0 : 1);
const getFlexBasis = (w: GWidthType) => {
  return w === 'max' || w === 'min' ? 'auto' : getPixelOrPercentByNumber(w);
};
const getWidth = (w: GWidthType) => (w === 'max' ? 'auto' : w === 'min' ? 'auto' : 'none');
const getMaxWidth = (w: GWidthType) => {
  return w === 'max' ? '100%' : w === 'min' ? 'none' : getPixelOrPercentByNumber(w);
};

export function Gr({ gap = 0, gapX = gap, gapY = gap, wrap = true, ...rest }: GProps) {
  return <Base {...rest} $gapX={gapX} $gapY={gapY} wrap={wrap} />;
}

export function GItem({ w, ...rest }: GItemProps) {
  return (
    <View
      {...rest}
      flexGrow={parseResponsive(w, getFlexGrow)}
      flexBasis={parseResponsive(w, getFlexBasis)}
      flexShrink={1}
      width={parseResponsive(w, getWidth)}
      maxWidth={parseResponsive(w, getMaxWidth)}
    />
  );
}
