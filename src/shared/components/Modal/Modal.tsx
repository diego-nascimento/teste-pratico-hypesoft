import { PropsWithChildren } from 'react';
import * as SC from './style';

interface Props {}

export const Modal = ({ children }: PropsWithChildren<Props>) => {
  return <SC.Wrapper>{children}</SC.Wrapper>;
};
