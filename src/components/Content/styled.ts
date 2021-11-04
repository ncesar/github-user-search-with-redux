import styled from 'styled-components';

export const StyledContentWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 50px;
`;
export const StyledTitleWrapper = styled.div`
  width: 425px;
`;
export const StyledContentTitle = styled.h1`
  font-weight: bold;
  color: #333333;
  text-align: center;
  font-size: 48px;
  overflow: hidden;
  border-right: 0.15em solid #333333;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.15em;
  animation: typing 2.5s steps(40, end), blink-caret 0.75s step-end infinite;

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: #333333;
    }
  }
`;
export const StyledContentTitleWrapper = styled.span`
  background: #113394;
  background: -webkit-linear-gradient(to right, #113394 0%, #619fcf 100%);
  background: -moz-linear-gradient(to right, #113394 0%, #619fcf 100%);
  background: linear-gradient(to right, #113394 0%, #619fcf 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: monospace;
  margin-right: -25px;
`;
export const StyledChildrenWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
export const StyledButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;
export const StyledButton = styled.button`
  margin-right: 10px;
  border: 1px solid #d7cfcf;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  &:disabled,
  [disabled] {
    cursor: not-allowed;
  }
`;
export const StyledNoItems = styled.h3`
  margin-top: 10px;
  color: #da3f3f;
`;
