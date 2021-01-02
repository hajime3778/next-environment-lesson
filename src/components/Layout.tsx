import React from 'react';
import type { ReactNode } from 'react';
import styled from 'styled-components';
import { Header } from './Header';

export const Contents = styled.div`
  width: 800px;
  margin: 0 auto;
`;

export type LayoutProps = {
  title: string;
  visibleRegister?: boolean;
  children: ReactNode;
};

export const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  return (
    <>
      <Contents>
        <Header title={props.title} visibleRegister={props.visibleRegister} />
        <main>{props.children}</main>
      </Contents>
    </>
  );
};
