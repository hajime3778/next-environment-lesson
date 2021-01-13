import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.a<ButtonStyleProps>`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  text-align: center;
  width: 100px;
  ${(props: ButtonStyleProps) =>
    props.primary
      ? css`
          color: #ffffff;
          background-color: #5cc974;
        `
      : css`
          color: #333;
          background-color: transparent;
          box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
        `};
  background: ${(props: ButtonStyleProps) => props.backgroundColor};
  ${(props: ButtonStyleProps) =>
    props.size === 'small'
      ? css`
          font-size: 12px;
          padding: 10px 16px;
        `
      : props.size === 'large'
      ? css`
          font-size: 16px;
          padding: 12px 24px;
        `
      : css`
          font-size: 14px;
          padding: 11px 20px;
        `}
`;

export type ButtonStyleProps = {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  style?: React.CSSProperties;
};

export type ButtonProps = {
  label: string;
  onClick?: () => void;
} & ButtonStyleProps;

export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}) => {
  return (
    <StyledButton primary={primary} size={size} backgroundColor={backgroundColor} {...props}>
      {label}
    </StyledButton>
  );
};
