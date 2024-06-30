import { SyntheticEvent } from 'react';

type CallbackType<E extends SyntheticEvent> = (event: E) => void;

export const withPreventDefault = <E extends SyntheticEvent>(
  callback: CallbackType<E>
): CallbackType<E> => {
  return (event: E) => {
    event.preventDefault();
    callback(event);
  };
};
