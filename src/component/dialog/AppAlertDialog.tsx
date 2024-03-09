'use client';

import type { ReactNode } from 'react';
import { useRef, useState } from 'react';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
} from '@chakra-ui/react';
import { is } from '@mj-studio/js-util';
import { createCtx, useStableCallback, useUnmount } from '@mj-studio/react-util';

import { Btn } from '../base/Btn';

export type AlertDialogAction = 'cancel-confirm';
export type AlertDialogOpenParams = {
  title: string;
  body: string;
  actionType?: AlertDialogAction;
  onClose?: () => void;
  onConfirm?: () => void | Promise<void>;
  confirmText?: string;
  cancelText?: string;
};
type AlertDialogState = {
  id: string;
  isOpen: boolean;
  isConfirmLoading?: boolean;
} & AlertDialogOpenParams;

let globalId = 0;
const [useAppAlertDialogContext, AppAlertDialogProvider] = createCtx((_, transformChildren) => {
  const [alerts, setAlerts] = useState<AlertDialogState[]>([]);

  const mutate = (id: string, fn: (alert: AlertDialogState) => AlertDialogState) => {
    setAlerts((v) => v.map((alert) => (alert.id === id ? fn(alert) : alert)));
  };

  const close = (id: string) => {
    mutate(id, (alert) => ({ ...alert, isOpen: false }));
  };

  const alertElements = alerts.map(
    ({
      actionType,
      body,
      id,
      title,
      onClose,
      isOpen,
      cancelText,
      confirmText,
      isConfirmLoading,
      onConfirm,
    }) => {
      return (
        <AlertDialog
          key={id}
          leastDestructiveRef={{ current: null }}
          isOpen={isOpen}
          onClose={() => {
            setAlerts((v) => v.filter((a) => a.id !== id));
            onClose?.();
          }}
          motionPreset={'scale'}
          closeOnOverlayClick={!isConfirmLoading}
        >
          <AlertDialogOverlay>
            <AlertDialogContent bg={'background'} borderWidth={1} borderColor={'outline'}>
              <AlertDialogHeader fontSize={'lg'}>{title}</AlertDialogHeader>
              <AlertDialogCloseButton isDisabled={isConfirmLoading} />
              <AlertDialogBody>{body}</AlertDialogBody>
              <AlertDialogFooter>
                {actionType === 'cancel-confirm' ? (
                  <>
                    <Btn
                      colorScheme={'gray'}
                      onClick={() => close(id)}
                      isDisabled={isConfirmLoading}
                    >
                      {cancelText ?? 'Cancel'}
                    </Btn>
                    <Btn
                      ml={3}
                      onClick={async () => {
                        const ret = onConfirm?.();
                        if (is.promise(ret)) {
                          mutate(id, (alert) => ({ ...alert, isConfirmLoading: true }));
                          try {
                            await ret;
                            close(id);
                          } catch (e) {
                            throw e;
                          } finally {
                            mutate(id, (alert) => ({ ...alert, isConfirmLoading: false }));
                          }
                        } else {
                          close(id);
                        }
                      }}
                      isLoading={isConfirmLoading}
                    >
                      {confirmText ?? 'Confirm'}
                    </Btn>
                  </>
                ) : null}
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      );
    },
  );

  transformChildren((children) => (
    <>
      {children}
      {alertElements}
    </>
  ));

  const openAlertDialog = useStableCallback((params: AlertDialogOpenParams) => {
    const id = '' + globalId++;
    const newAlert = {
      id,
      body: params.body,
      title: params.title,
      onClose: params.onClose,
      actionType: params.actionType ?? 'cancel-confirm',
      cancelText: params.cancelText,
      confirmText: params.confirmText,
      onConfirm: params.onConfirm,
      isOpen: true,
    } satisfies AlertDialogState;
    setAlerts((v) => [...v, newAlert]);

    return { close: () => close(id) };
  });

  return {
    openAlertDialog,
  };
}, 'AppAlertDialog');

export { AppAlertDialogProvider, useAppAlertDialogContext };

export const AppDialogHandler = (props: {
  children: (params: {
    open: (params: AlertDialogOpenParams) => void;
    close: () => void;
  }) => ReactNode;
}) => {
  const { openAlertDialog } = useAppAlertDialogContext();

  const closeRef = useRef<Function>();
  const open = useStableCallback((params: AlertDialogOpenParams) => {
    const { close } = openAlertDialog(params);
    closeRef.current = close;
  });

  useUnmount(() => {
    closeRef.current = undefined;
  });

  return props.children({ open, close: () => closeRef.current?.() });
};
