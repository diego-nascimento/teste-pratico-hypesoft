import React, { PropsWithChildren } from 'react';
import * as SC from './style';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <SC.Wrapper>
      <SC.Main>{children}</SC.Main>
    </SC.Wrapper>
  );
};
