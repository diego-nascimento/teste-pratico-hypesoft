import React from 'react';
import * as SC from './style';

export interface optionsProps {
  value: string;
  text: string;
}

interface Props {
  value: string;
  onChange: (value: string) => void;
  options: optionsProps[];
}

export const SelectInput = ({ value, onChange, options }: Props) => {
  return (
    <SC.Select value={value} onChange={(e) => onChange(e.target.value)}>
      {options.map((option, index) => {
        return (
          <SC.Option value={option.value} key={index}>
            {option.text}
          </SC.Option>
        );
      })}
    </SC.Select>
  );
};
