import styled from 'styled-components';

export const StyledPersonWrapper = styled.li`
  height: 250px;
  margin-right: 25px;
  padding: 10px 20px;
  border: 1px solid ${({ theme }) => theme.grey};
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 20px;
  flex: 0 0 calc(33.333333% - 2em);
`;
export const StyledLinkWrapper = styled.a`
  position: absolute;
  top: 5px;
  right: 50px;
  cursor: pointer;
  width: 23px;
  svg {
    fill: ${({ theme }) => theme.darkGrey};
  }
`;
export const StyledPersonAddFavorite = styled.span`
  position: absolute;
  top: 5px;
  right: 15px;
  cursor: pointer;
  width: 20px;
  svg {
    fill: ${({ theme }) => theme.darkRed};
  }
`;
export const StyledPersonImageWrapper = styled.picture`
  width: 125px;
  height: 125px;
  border-radius: 50%;
  border: 10px solid ${({ theme }) => theme.grey};
  box-shadow: rgb(100 100 111 / 48%) 0px 7px 29px 0px;
  margin-bottom: 20px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;
export const StyledPersonDataWrapper = styled.div`
  display: flex;
  width: 250px;
`;
export const StyledPersonPrimaryTitle = styled.h3`
  color: ${({ theme }) => theme.darkGrey};
  font-weight: bold;
  margin-right: 5px;
`;
export const StyledPersonSecondaryTitle = styled.h3`
  color: ${({ theme }) => theme.darkGrey};
  font-weight: normal;
  line-break: anywhere;
`;
