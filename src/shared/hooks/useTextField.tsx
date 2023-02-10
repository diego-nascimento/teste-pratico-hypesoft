import { useState } from 'react';

export const useTextField = () => {
  const [search, setSearch] = useState('');

  const handleOnChangeField = (fieldText: string) => {
    setSearch(fieldText);
  };
  return {
    search,
    handleOnChangeField,
  };
};
