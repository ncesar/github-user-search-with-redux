import { Loading } from 'components/Loading';
import { useDispatch } from 'react-redux';
import { resetFavorites } from 'redux/favorites';
import {
  StyledButton,
  StyledButtonsWrapper,
  StyledChildrenWrapper,
  StyledContentTitle,
  StyledContentTitleWrapper,
  StyledContentWrapper,
  StyledNoItems,
  StyledTitleWrapper,
} from './styled';
import type { ContentProps } from './types';

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
