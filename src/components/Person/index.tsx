import {
  StyledLinkWrapper,
  StyledPersonAddFavorite,
  StyledPersonDataWrapper,
  StyledPersonImageWrapper,
  StyledPersonPrimaryTitle,
  StyledPersonSecondaryTitle,
  StyledPersonWrapper,
} from './styled';
import { LinkExternal as LinkIcon } from '@styled-icons/boxicons-regular/LinkExternal';
import { Heart as FavIcon } from '@styled-icons/bootstrap/Heart';
import { HeartFill as FavFilledIcon } from '@styled-icons/bootstrap/HeartFill';
import type { PersonProps } from './types';
import { useSelector } from 'react-redux';
import { favoriteCheckHandler } from 'redux/favorites';
import { RootState } from 'redux/store';

export const Person: React.FC<PersonProps> = ({
  photo,
  name,
  type,
  url,
  onAddFavoritesClick,
  selectedPerson,
}) => {
  const { favorites } = useSelector((state: RootState) => state.favorites);
  const favoriteCheck = () => {
    if (favoriteCheckHandler(favorites, selectedPerson)) {
      return <FavFilledIcon />;
    }
    return <FavIcon />;
  };
  return (
    <StyledPersonWrapper>
      <StyledLinkWrapper href={url} target="_blank">
        <LinkIcon />
      </StyledLinkWrapper>
      <StyledPersonAddFavorite onClick={onAddFavoritesClick}>
        {favoriteCheck()}
      </StyledPersonAddFavorite>
      <StyledPersonImageWrapper>
        <img src={photo} alt={`${name} avatar`} loading="lazy" />
      </StyledPersonImageWrapper>
      <StyledPersonDataWrapper>
        <StyledPersonPrimaryTitle>Login:</StyledPersonPrimaryTitle>
        <StyledPersonSecondaryTitle>{name}</StyledPersonSecondaryTitle>
      </StyledPersonDataWrapper>
      <StyledPersonDataWrapper>
        <StyledPersonPrimaryTitle>Type:</StyledPersonPrimaryTitle>
        <StyledPersonSecondaryTitle>{type}</StyledPersonSecondaryTitle>
      </StyledPersonDataWrapper>
    </StyledPersonWrapper>
  );
};
