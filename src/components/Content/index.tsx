import { useDispatch } from 'react-redux';
import { Loading } from 'components/Loading';
import { resetFavorites } from 'redux/favorites';
import {
  StyledButton,
  StyledButtonsWrapper,
  StyledChildrenWrapper,
  StyledContentTitle,
  StyledContentTitleWrapper,
  StyledContentWrapper,
  StyledFilterWrapper,
  StyledNoItems,
  StyledTitleWrapper,
} from './styled';
import type { ContentProps } from './types';
import React, { Fragment } from 'react';

export const Content: React.FC<ContentProps> = ({
  children,
  hideTitle = false,
  onPreviousClick,
  onNextClick,
  pageNum,
  numOfUsers,
  error,
  loading,
  hideButtons = false,
  favorites = 0,
  returnSortType,
  title = '<Person />',
}) => {
  const dispatch = useDispatch();
  return (
    <StyledContentWrapper>
      {!hideTitle ? (
        <StyledTitleWrapper>
          <StyledContentTitle>
            Search for a<br />
            <StyledContentTitleWrapper>{title}</StyledContentTitleWrapper>
          </StyledContentTitle>
        </StyledTitleWrapper>
      ) : (
        !hideButtons && (
          <Fragment>
            <StyledButtonsWrapper>
              <StyledButton
                onClick={onPreviousClick}
                disabled={pageNum === 1 || (numOfUsers === 0 && true)}
              >
                &lt; Prev
              </StyledButton>
              <StyledButton
                onClick={onNextClick}
                disabled={(numOfUsers === 0 && true) || error}
              >
                &gt; Next
              </StyledButton>
            </StyledButtonsWrapper>
            <StyledFilterWrapper>
              <p>Sort by ID: </p>
              <select onClick={(e: any) => returnSortType(e.target.value)}>
                <option value="descending">Descending</option>
                <option value="ascending">Ascending</option>
              </select>
            </StyledFilterWrapper>
          </Fragment>
        )
      )}
      {favorites > 0 && (
        <StyledButton onClick={() => dispatch(resetFavorites())}>
          Clear Favorites
        </StyledButton>
      )}
      {error && (
        <StyledNoItems>There are no more users with this name.</StyledNoItems>
      )}
      {loading ? (
        <Loading />
      ) : (
        <StyledChildrenWrapper>{children}</StyledChildrenWrapper>
      )}
    </StyledContentWrapper>
  );
};
