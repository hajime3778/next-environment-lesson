import React from 'react';
import styled from 'styled-components';

export type Props = {
  defaultValue?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
};

const StyledText = styled.input`
  width: 90%;
  border-radius: 10px;
  font-size: 18px;
  border: 1px solid #dfdfdf;
  box-sizing: border-box;
  padding: 10px 15px;
  margin: 10px 0px;
  transition: 0.3s;
  &::-webkit-input-placeholder {
    color: #cacaca;
  }
  &:focus {
    outline: none;
    border: 1px solid #5cc974;
    box-shadow: 0 0 4px 0 #00802c;
  }
`;

export const TextBox: React.FC<Props> = ({ defaultValue, value, placeholder, onChange }) => {
  return (
    <StyledText type="text" defaultValue={defaultValue} value={value} placeholder={placeholder} onChange={onChange} />
  );
};
