import { StyledButton } from './styled';
import type { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  onClick,
}) => {
  return (
    <StyledButton onClick={onClick} className={className}>
      {children}
    </StyledButton>
  );
};
