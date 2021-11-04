import styled from 'styled-components';

export const StyledButton = styled.button`
  height: 40px;
  border: 1px solid ${({ theme }) => theme.grey};
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
`;
