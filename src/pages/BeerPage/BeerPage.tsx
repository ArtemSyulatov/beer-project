import { useParams } from 'react-router-dom';
import { beerApi } from '../../redux-toolkit/services/BeerService';
import s from './BeerPage.module.scss';
import { Loader } from '../../components/ui/Loader/Loader';
import { Button } from '../../components/ui/Button/Button';
import { useAppSelector } from '../../hooks/redux';
import { getIsAuth } from '../../redux-toolkit/selectors/getIsAuth';
import useFavorite from '../../hooks/useFavourite';

const BeerPage = () => {
  const params = useParams();
  const {
    data: beer,
    isLoading,
    error,
  } = beerApi.useGetSingleBeerQuery(params.id);
  const isAuth = useAppSelector(getIsAuth);
  const { toggleFavorite, getIsFavourite } = useFavorite();
  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <div>Error..</div>;
  }
  return (
    <div className={s.card}>
      <h2>{beer.name}</h2>
      <img src={beer.imageUrl} alt="" />
      <p>{beer.description}</p>
      {isAuth && (
        <div className={s.favouriteBtn}>
          <Button onClick={() => toggleFavorite(beer)}>
            {getIsFavourite(beer) ? (
              <p>Remove from favourites</p>
            ) : (
              <p>Add To Favourites</p>
            )}
          </Button>
        </div>
      )}
    </div>
  );
};

export default BeerPage;
