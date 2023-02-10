import React from 'react';
import * as SC from './style';
import { FaSearch } from 'react-icons/fa';

interface Props {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  onSubmit: (e: React.FormEvent) => void;
  disabled: boolean;
}

export const TextInput = ({
  onChange,
  value,
  placeholder,
  onSubmit,
  disabled,
}: Props) => {
  return (
    <SC.Wrapper onSubmit={onSubmit}>
      <SC.Input
        type="text"
        value={value}
        onChange={(event) => {
          onChange(event.target.value);
        }}
        placeholder={placeholder}
      />
      <SC.SubmitButton type="submit" disabled={disabled}>
        <FaSearch size={20} />
      </SC.SubmitButton>
    </SC.Wrapper>
  );
};
