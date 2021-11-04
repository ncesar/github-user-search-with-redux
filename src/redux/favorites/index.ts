import { createSlice } from '@reduxjs/toolkit';
import { FavoritesProps } from './types';

const initialState = {
  favorites: [],
};

export const favoriteCheckHandler = (
  favoritesState: any,
  sendingState: any,
): boolean => {
  if (
    favoritesState.some((obj: FavoritesProps) => obj.name === sendingState.name)
  ) {
    return true;
  }
  return false;
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    updateFavorites: (state: any, action: any) => {
      const favoritesState = state.favorites;
      const selectedFavorite = {
        name: action.payload.login || action.payload.name,
        type: action.payload.type,
        photo: action.payload.avatar_url || action.payload.photo,
        url: action.payload.html_url || action.payload.url,
        id: action.payload.id,
      };
      if (favoriteCheckHandler(favoritesState, selectedFavorite)) {
        favoritesState.splice(
          favoritesState.findIndex(
            (el: FavoritesProps) => el.name === selectedFavorite.name,
          ),
          1,
        );
      } else {
        favoritesState.push(selectedFavorite);
      }
    },
    resetFavorites: () => initialState,
  },
});

export const { updateFavorites, resetFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
