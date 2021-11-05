import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { Content } from 'components/Content';
import { Person } from 'components/Person';
import { Topbar } from 'components/Topbar';
import { updateFavorites } from 'redux/favorites';
import { FavoriteProps } from './types';
import { MotionWrapper } from 'components/MotionWrapper';

export const Favorites = () => {
  const dispatch = useDispatch();

  const { favorites } = useSelector((state: RootState) => state.favorites);
  const checkForExistingData = favorites.length > 0 && true;
  return (
    <React.Fragment>
      <Topbar />
      <MotionWrapper>
        <Content
          hideTitle={checkForExistingData}
          hideButtons
          favorites={favorites.length || 0}
          title="<Favorite />"
        >
          {favorites.map(
            ({ name, photo, url, type, id }: FavoriteProps, index: number) => (
              <Person
                favorites={favorites}
                key={id}
                name={name}
                photo={photo}
                url={url}
                type={type}
                id={id}
                selectedPerson={favorites[index]}
                onAddFavoritesClick={() => {
                  dispatch(updateFavorites(favorites[index]));
                }}
              />
            ),
          )}
        </Content>
      </MotionWrapper>
    </React.Fragment>
  );
};
