import React from 'react';
import { CloseOutline as ClearIcon } from '@styled-icons/evaicons-outline/CloseOutline';
import { StyledInput, StyledInputWrapper } from './styled';
import type { InputProps } from './types';

export const Input: React.FC<InputProps> = ({
  error,
  onChange,
  onClearClick,
  placeholder,
  value,
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
