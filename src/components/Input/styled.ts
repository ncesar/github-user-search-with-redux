import styled from 'styled-components';
import { ErrorProps } from './types';

export const StyledInputWrapper = styled.div<ErrorProps>`
  position: relative;
  .clear-icon {
    width: 20px;
    position: absolute;
    right: 12px;
    top: 11px;
    cursor: pointer;
  }
  input {
    border: ${({ error }) => (error ? '1px solid red' : '1px solid #eee')};
  }
`;
export const StyledInput = styled.input`
  height: 40px;
  border-radius: 5px;
  padding: 0 20px;
  width: 350px;
  box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
  font-family: 'Poppins', 'sans-serif';
  &:focus {
    outline: none;
  }
  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    font-family: 'Poppins', 'sans-serif';
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    font-family: 'Poppins', 'sans-serif';
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    font-family: 'Poppins', 'sans-serif';
  }
  :-moz-placeholder {
    /* Firefox 18- */
    font-family: 'Poppins', 'sans-serif';
  }
  @media (max-width: 768px) {
    width: 200px;
  }
`;
