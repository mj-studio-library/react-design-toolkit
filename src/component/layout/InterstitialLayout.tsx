import type { PropsWithChildren, ReactElement } from 'react';
import { Card } from '@chakra-ui/react';
import { is } from '@mj-studio/js-util';
import { motion } from 'framer-motion';

import { usePalette } from '../../hook/usePalette';
import { DT } from '../../server/styles/DesignToken';
import { Column, ColumnCenter } from '../base/Column';
import { RowCenter } from '../base/Row';
import { Txt } from '../base/Txt';
import { MotionView } from '../MotionView';

export type InterstitialLayoutProps = PropsWithChildren<{
  title: string;
  description?: string;
  icon?: ReactElement;
  logo?: ReactElement;
}>;

export function InterstitialLayout({
  children,
  title,
  description,
  icon,
  logo,
}: InterstitialLayoutProps) {
  const c = usePalette();

  return (
    <ColumnCenter minW={['sm', 'md', 'lg']} pb={'128px'} px={DT.sidePadding}>
      {logo}
      <svg height={40} style={{ marginLeft: 1, marginTop: 0 }} viewBox={'0 0 1 40'} width={1}>
        <motion.path
          animate={{ pathLength: 1, strokeOpacity: 1 }}
          d={'M0 0 1 40'}
          initial={{ pathLength: 0, strokeOpacity: 0 }}
          stroke={c.text}
          transition={{ duration: 1 }}
        />
      </svg>
      <MotionView
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        <Txt align={'center'} textStyle={'t1'}>
          {title}
        </Txt>
      </MotionView>
      <Card bg={'surface'} my={8} px={6} py={8} variant={'outline'} w={['sm', 'md', 'lg']}>
        <Column>
          {is.notEmptyString(description) || icon ? (
            <RowCenter gap={2} justifyContent={'center'}>
              {icon}
              <Txt align={'center'} textStyle={'b1'}>
                {description}
              </Txt>
            </RowCenter>
          ) : null}
          <Column mt={12}>{children}</Column>
        </Column>
      </Card>
    </ColumnCenter>
  );
}
