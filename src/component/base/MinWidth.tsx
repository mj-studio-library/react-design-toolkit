'use client';

import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';

import type { Breakpoints } from '../../styles/system/DesignToken';
import { DT } from '../../styles/system/DesignToken';

export function MinWidth({
  breakpoint: w,
  children,
}: {
  breakpoint: string | Breakpoints;
  children?: ReactNode;
}) {
  const px = Object.keys(DT.breakpoints).includes(w) ? DT.breakpoints[w as Breakpoints] : w;

  const [isMatch, setMatch] = useState<boolean>();

  useEffect(() => {
    const match = window.matchMedia(`(min-width: ${px})`);
    const listener = () => {
      setMatch(match.matches);
    };
    setMatch(match.matches);
    match.addEventListener('change', listener);

    return () => match.removeEventListener('change', listener);
  }, [px]);

  return isMatch === true ? children : null;
}
