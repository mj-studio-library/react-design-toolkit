'use client';

import React from 'react';
import { Menu as ChakraMenu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';

import ICChevronDown from '../icon/ICChevronDown';

import type { BtnProps } from './Btn';
import { Btn } from './Btn';

export type MenuItem<T> = {
  value: T;
  text: string;
};
export type MenuProps<T> = {
  selected: string;
  buttonProps?: BtnProps;
  items: MenuItem<T>[];
  onSelected: (params: { index: number; value: T }) => void;
};

export function Menu<T extends string | number>({
  selected,
  buttonProps,
  items,
  onSelected,
}: MenuProps<T>) {
  return (
    <ChakraMenu>
      <MenuButton as={Btn} variant={'ghost'} rightIcon={<ICChevronDown />} {...buttonProps}>
        {selected}
      </MenuButton>
      <MenuList>
        {items.map((item, i) => (
          <MenuItem key={item.value} onClick={() => onSelected({ index: i, value: item.value })}>
            {item.text}
          </MenuItem>
        ))}
      </MenuList>
    </ChakraMenu>
  );
}
