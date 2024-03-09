import type { ComponentProps } from 'react';
import type { LinkProps } from '@chakra-ui/next-js';
import type { CustomDomComponent } from 'framer-motion';
import { motion } from 'framer-motion';

import { Column, ColumnCenter } from './base/Column';
import { Link } from './base/Link';
import { Row, RowCenter } from './base/Row';
import type { ViewProps } from './base/View';
import { View } from './base/View';

const MotionView = motion(View) as CustomDomComponent<Omit<ViewProps, 'transition' | 'style'>>;
export type MotionViewProps = ComponentProps<typeof MotionView>;

const MotionColumn = motion(Column) as CustomDomComponent<Omit<ViewProps, 'transition' | 'style'>>;
const MotionColumnCenter = motion(ColumnCenter) as CustomDomComponent<
  Omit<ViewProps, 'transition'>
>;
const MotionRow = motion(Row) as CustomDomComponent<Omit<ViewProps, 'transition' | 'style'>>;
const MotionRowCenter = motion(RowCenter) as CustomDomComponent<
  Omit<ViewProps, 'transition' | 'style'>
>;
const MotionLink = motion(Link) as CustomDomComponent<LinkProps>;

export { MotionView, MotionColumn, MotionColumnCenter, MotionRow, MotionRowCenter, MotionLink };
