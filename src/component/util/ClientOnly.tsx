import type { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{}>;

export function ClientOnly({ children }: Props) {
  return typeof document === 'undefined' ? null : children;
}
