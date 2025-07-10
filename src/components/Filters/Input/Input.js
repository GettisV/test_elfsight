import React, { useCallback } from 'react';
import styled from 'styled-components';

export const Input = React.memo((props) => {
  const { placeholder, value, setValue } = props;

  const onChangeHandler = useCallback(
    (e) => {
      setValue(e.target.value);
    },
    [setValue]
  );

  return (
    <InputFilter
      placeholder={placeholder}
      type="text"
      value={value}
      onChange={onChangeHandler}
    />
  );
});

const InputFilter = styled.input`
  padding: 0 15px;
  background-color: #263750;
  border: transparent;
  border-radius: 10px;
  outline: 1px solid #83bf46;
  color: rgba(255, 255, 255, 1);
  font-size: 16px;
  text-overflow: ellipsis;
  overflow: hidden;

  &:focus {
    background-color: #001832;
  }
`;
