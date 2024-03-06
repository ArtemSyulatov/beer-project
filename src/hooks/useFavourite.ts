import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './redux';
import {
  addFavorite,
  fetchFavorites,
  removeFavorite,
} from '../redux-toolkit/thunks/favourite';
import { TransformedBeer } from '../types/Beer';
import {
  selectFavoriteItems,
  selectFavoritesLoading,
  selectIsFavoriteFetching,
} from '../redux-toolkit/selectors/getFavorites';
import { selectUser } from '../redux-toolkit/selectors/getUser';

const useFavorite = () => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(selectFavoriteItems);
  const isLoading = useAppSelector(selectFavoritesLoading);
  const isFavoriteFetching = useAppSelector(selectIsFavoriteFetching);
  const user = useAppSelector(selectUser);
  useEffect(() => {
    if (user && user.email) {
      dispatch(fetchFavorites(user.email));
    }
  }, [dispatch, user]);

  const getIsFavourite = useCallback(
    (beer: TransformedBeer) =>
      favorites.some((fav: TransformedBeer) => fav.id === beer.id),
    [favorites],
  );

  const toggleFavorite = useCallback(
    (beer: TransformedBeer) => {
      if (!user || !user.email) {
        return;
      }

      if (getIsFavourite(beer)) {
        dispatch(removeFavorite({ email: user.email, beer }));
      } else {
        dispatch(addFavorite({ email: user.email, beer }));
      }
    },
    [dispatch, getIsFavourite, user],
  );

  return {
    favorites,
    toggleFavorite,
    getIsFavourite,
    isLoading,
    isFavoriteFetching,
  };
};

export default useFavorite;
