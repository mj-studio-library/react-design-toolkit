import type { AvatarProps } from '@chakra-ui/react';
import { Avatar } from '@chakra-ui/react';

import { usePalette } from '../../hook/usePalette';
import ICUserOutline from '../icon/ICUserOutline';

export function CircleAvatar(props: AvatarProps) {
  const { surface } = usePalette();

  return (
    <Avatar
      bg={surface}
      icon={<ICUserOutline />}
      ignoreFallback={true}
      loading={'eager'}
      showBorder
      {...props}
    />
  );
}

export type { AvatarProps as CircleAvatarProps };
