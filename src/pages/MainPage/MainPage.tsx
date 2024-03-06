import { beerApi } from '../../redux-toolkit/services/BeerService';
import { BeerCard } from '../../components/BeerCard/BeerCard';
import s from './MainPage.module.scss';
import { TransformedBeer } from '../../types/Beer';
import { Button } from '../../components/ui/Button/Button';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { beerSlice } from '../../redux-toolkit/reducers/beerSlice';
import { Loader } from '../../components/ui/Loader/Loader';
import { getPerPage } from '../../redux-toolkit/selectors/getPerPage';
import useFavorite from '../../hooks/useFavourite';

const MainPage = () => {
  const perPage = useAppSelector(getPerPage);
  const dispatch = useAppDispatch();
  const { setPerPage } = beerSlice.actions;
  const {
    data: beers,
    isLoading,
    error,
  } = beerApi.useGetAllBeersQuery({
    per_page: perPage,
    beer_name: '',
  });
  const {
    toggleFavorite,
    getIsFavourite,
    isLoading: isFavouritesLoading,
  } = useFavorite();
  const downloadMore = () => {
    dispatch(setPerPage({ perPage: perPage + 10 }));
  };
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className={s.cards}>
      {beers.map((beer: TransformedBeer) => (
        <BeerCard
          key={beer.key}
          beer={beer}
          isFavorite={getIsFavourite(beer)}
          toggleFavorite={() => toggleFavorite(beer)}
          isLoading={isLoading}
        />
      ))}
      <Button disabled={!!error} onClick={downloadMore}>
        {error ? <p>Beer is out</p> : <p>More..</p>}
      </Button>
    </div>
  );
};

export default MainPage;
