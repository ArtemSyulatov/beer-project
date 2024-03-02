import { beerApi } from '../../redux-toolkit/services/BeerService';
import { BeerCard } from '../../components/BeerCard/BeerCard';
import s from './MainPage.module.scss';
import { TransformedBeer } from '../../types/Beer';
import { Button } from '../../components/ui/Button/Button';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { beerSlice } from '../../redux-toolkit/reducers/beerSlice';
import { Loader } from '../../components/ui/Loader/Loader';

const MainPage = () => {
  const { perPage } = useAppSelector((state) => state.beerSlice);
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
  const downloadMore = () => {
    dispatch(setPerPage({ perPage: perPage + 10 }));
  };
  if (isLoading || !beers) {
    return <Loader />;
  }
  return (
    <div className={s.cards}>
      {beers.map((beer: TransformedBeer) => (
        <BeerCard
          key={beer.id}
          name={beer.name}
          description={beer.description}
          image_url={beer.imageUrl}
          id={beer.id}
        />
      ))}
      <Button disabled={!!error} onClick={downloadMore}>
        {error ? <p>Beer is out</p> : <p>Загрузить еще</p>}
      </Button>
    </div>
  );
};

export default MainPage;
