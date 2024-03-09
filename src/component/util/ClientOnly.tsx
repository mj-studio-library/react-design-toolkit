'use client';

import type { PropsWithChildren } from 'react';
import { useIsClient } from '@mj-studio/react-util';

type Props = PropsWithChildren<{}>;

export function ClientOnly({ children }: Props) {
  const isClient = useIsClient();

  return isClient ? children : null;
}
