import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  padding: 0.25em 0 0.25em 0.75em;
  border-left: 10px solid #62d87d;
  font-size: 30px;
  font-weight: bold;
  padding: 0 0 0 10px;
`;

const RegisterButton = styled.a`
  color: #ffffff;
  background-color: #7fd989;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 37px;
  border-radius: 50%;
  display: inline-block;
  text-decoration: none;
  transition: 0.3s;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24);
  &:hover {
    cursor: pointer;
    color: #7fd989;
    background-color: #efefef;
    border-radius: 50%;
    text-decoration: none;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
  }
`;

export type HeaderProps = {
  title: string;
  visibleRegister?: boolean;
  registerClick?: () => void;
};

export const Header: React.FC<HeaderProps> = ({ title, visibleRegister, registerClick }) => {
  return (
    <header>
      <Title>
        {title} {visibleRegister && <RegisterButton onClick={registerClick}>+</RegisterButton>}
      </Title>
    </header>
  );
};
