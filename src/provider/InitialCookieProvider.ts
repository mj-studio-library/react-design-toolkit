'use client';

import { createCtx } from '@mj-studio/react-util';
import type { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';

export const [useInitialCookiesContext, InitialCookiesProvider, InitialCookiesConsumer] = createCtx(
  ({ cookies }: { cookies: RequestCookie[] }) => {
    return {
      cookies,
    };
  },
  'InitialCookies',
);
