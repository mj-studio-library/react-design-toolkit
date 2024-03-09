'use client';

import type { PropsWithChildren } from 'react';
import { Card, Center } from '@chakra-ui/react';

import { ColumnCenter } from '../base/Column';
import { Txt } from '../base/Txt';
import { MotionView } from '../MotionView';

type Props = PropsWithChildren<{
  title: string;
  body: string;
}>;

function CenterCardLayout({ children, title, body }: Props) {
  return (
    <Center flex={1} h={'100%'} position={'relative'} overflow={'hidden'}>
      <Card
        bg={'surface'}
        px={4}
        py={10}
        variant={'outline'}
        w={['md']}
        backdropFilter={'blur(10px)'}
      >
        <ColumnCenter>
          <MotionView initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Txt textStyle={'t1'}>{title}</Txt>
          </MotionView>
          <MotionView animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 0.5 }}>
            <Txt mt={4} textStyle={'t3'}>
              {body}
            </Txt>
          </MotionView>
          {children}
        </ColumnCenter>
      </Card>
    </Center>
  );
}

export default CenterCardLayout;
