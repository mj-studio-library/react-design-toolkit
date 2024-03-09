'use client';

import { useToast } from '@chakra-ui/react';
import { useStableCallback } from '@mj-studio/react-util';

import { DT } from '../../server/styles/DesignToken';

export type FeedbackOption = {
  body?: string;
  duration: number;
  isClosable: boolean;
};

const defaultOptions: FeedbackOption = {
  duration: 5000,
  isClosable: false,
};

export function useFeedback() {
  const toast = useToast();

  const isWideWindow = () => window.matchMedia(`(min-width: ${DT.breakpoints.sm})`).matches;

  const showSuccess = useStableCallback((title: string, _options?: Partial<FeedbackOption>) => {
    const { isClosable, duration, body } = { ...defaultOptions, ..._options };
    toast({
      position: isWideWindow() ? 'bottom-right' : 'bottom',
      title,
      description: body,
      duration,
      isClosable,
      status: 'success',
      variant: 'left-accent',
      containerStyle: { transform: 'translate(0, -24px)' },
    });
  });

  const showError = useStableCallback(
    (title: string = 'Error', _options?: Partial<FeedbackOption>) => {
      const { isClosable, duration, body } = { ...defaultOptions, ..._options };
      toast({
        position: isWideWindow() ? 'bottom-right' : 'bottom',
        title,
        description: body,
        duration,
        isClosable,
        status: 'error',
        variant: 'left-accent',
        containerStyle: { transform: 'translate(0, -24px)' },
      });
    },
  );

  // const promise = useStableCallback(
  //   <Result extends unknown, Err extends Error = any>(
  //     promise: Promise<Result>,
  //     {
  //       errorTitle,
  //       loadingTitle,
  //       successTitle,
  //     }: {
  //       successTitle: string;
  //       errorTitle: string;
  //       loadingTitle: string;
  //     },
  //   ) => {
  //     toast.promise<Result, Err>(promise, {
  //       success: (result) => {
  //         showSuccess(t('success'));
  //         return result;
  //       },
  //     });
  //   },
  // );

  return {
    showSuccess,
    showError,
  };
}
