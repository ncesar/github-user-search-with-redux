import { StyledButton } from './styled';
import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};
