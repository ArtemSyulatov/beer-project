import { TransformedBeer } from '../../types/Beer';
import { BeerCard } from '../../components/BeerCard/BeerCard';
import { beerApi } from '../../redux-toolkit/services/BeerService';
import s from './SearchPage.module.scss';
import { Loader } from '../../components/ui/Loader/Loader';
import { useQueryParams } from '../../hooks/useQueryParams';
import useFavorite from '../../hooks/useFavourite';

const SearchPage = () => {
  const params = useQueryParams();
  const { data: beers, isLoading } = beerApi.useGetAllBeersQuery({
    per_page: 5,
    beer_name: params.get('beer_name'),
  });
  const { toggleFavorite, getIsFavourite } = useFavorite();
  if (isLoading) {
    return <Loader />;
  }
  if (beers.length === 0) {
    return <h4>Found nothing</h4>;
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
    </div>
  );
};

export default SearchPage;
