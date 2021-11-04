import styled from 'styled-components';

export const StyledTopbar = styled.nav``;
export const StyledTopbarWrapper = styled.div`
  background: ${({ theme }) => theme.white};
  border-bottom: 1px solid #eee;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  .git-icon {
    width: 50px;
    margin-right: 50px;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    .git-icon {
      margin-right: 0;
      margin-bottom: 10px;
    }
    form {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-right: 0;
      button {
        margin-top: 10px;
        margin-left: 0;
        width: 102px;
      }
    }
    .favorites-btn {
      margin-top: 10px;
    }
  }
`;
export const StyledFormWrapper = styled.form`
  display: flex;
  button {
    margin-left: 20px;
  }
  margin-right: 20px;
`;
