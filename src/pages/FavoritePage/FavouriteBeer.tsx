import useFavorite from '../../hooks/useFavourite';
import { BeerCard } from '../../components/BeerCard/BeerCard';
import { TransformedBeer } from '../../types/Beer';
import s from './FavouriteBeer.module.scss';
import { Loader } from '../../components/ui/Loader/Loader';

function Favorites() {
  const {
    favorites,
    toggleFavorite,
    getIsFavourite,
    isLoading,
    isFavoriteFetching,
  } = useFavorite();
  if (isFavoriteFetching) {
    return <Loader />;
  }
  return (
    <div>
      <h2 className={s.title}>Favourite Beer</h2>
      <div className={s.cardContainer}>
        {favorites.length > 0 ? (
          favorites.map((beer: TransformedBeer) => (
            <BeerCard
              key={beer.key}
              beer={beer}
              isFavorite={getIsFavourite(beer)}
              toggleFavorite={() => toggleFavorite(beer)}
              isLoading={isLoading}
            />
          ))
        ) : (
          <h3>Empty..</h3>
        )}
      </div>
    </div>
  );
}

export default Favorites;
