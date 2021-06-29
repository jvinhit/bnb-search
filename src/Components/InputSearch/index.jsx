/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useCallback, useState } from 'react';

// eslint-disable-next-line no-unused-vars
import Loading from '../Loading';
import {
  IconSearch,
  InputSearchContainer,
  Input,
  IconClear,
  LoadingWrapper,
  IconWrapper,
} from './style';

const SearchInput = ({ placeholder, searchTerm = '', onChange, children, loading = false }) => {
  const [value, setValue] = useState(searchTerm);
  const handleChange = useCallback(
    (e) => {
      if (typeof e === 'string') {
        setValue('');
        onChange('');
        return;
      }
      setValue(e?.target?.value);
      onChange(e?.target?.value);
    },
    [onChange, loading],
  );

  return (
    <InputSearchContainer>
      <IconSearch />
      <Input placeholder={placeholder} value={value} onChange={handleChange} />
      {(!loading && value) && (
        <IconWrapper onClick={() => handleChange('')}>
          <IconClear />
        </IconWrapper>
      )}
      {loading && (
        <LoadingWrapper>
          <Loading height="60px" />
        </LoadingWrapper>
      )}
      {children}
    </InputSearchContainer>
  );
};

export default SearchInput;
