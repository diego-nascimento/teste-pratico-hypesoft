import React from 'react';
import {
  optionsProps,
  SelectInput,
} from '../../../../shared/components/SelectInput';
import * as SC from './style';

interface Props {
  changeNumberPerPage: (amount: number) => void;
  amountPerPage: number;
}

const options: optionsProps[] = [
  {
    text: '10',
    value: '10',
  },
  {
    text: '20',
    value: '20',
  },
  {
    text: '30',
    value: '30',
  },
  {
    text: '40',
    value: '40',
  },
];

export const Filters = ({ changeNumberPerPage, amountPerPage }: Props) => {
  const onChange = (value: string) => {
    changeNumberPerPage(Number(value));
  };
  return (
    <SC.Wrapper>
      <SelectInput
        onChange={onChange}
        value={amountPerPage.toString()}
        options={options}
      />
    </SC.Wrapper>
  );
};
