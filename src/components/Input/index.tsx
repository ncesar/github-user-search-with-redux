import React from 'react';
import { StyledInput, StyledInputWrapper } from './styled';
import { CloseOutline as ClearIcon } from '@styled-icons/evaicons-outline/CloseOutline';
import type { InputProps } from './types';

export const Input: React.FC<InputProps> = ({
  placeholder,
  onChange,
  onClearClick,
  value,
  error,
}) => {
  return (
    <StyledInputWrapper error={error}>
      <StyledInput
        placeholder={placeholder}
        onChange={onChange}
        name="username"
        value={value}
      />
      <ClearIcon className="clear-icon" onClick={onClearClick} />
    </StyledInputWrapper>
  );
};
