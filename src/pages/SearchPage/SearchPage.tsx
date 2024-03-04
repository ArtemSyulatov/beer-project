import { TransformedBeer } from '../../types/Beer';
import { BeerCard } from '../../components/BeerCard/BeerCard';
import { beerApi } from '../../redux-toolkit/services/BeerService';
import s from './SearchPage.module.scss';
import { Loader } from '../../components/ui/Loader/Loader';
import { useQueryParams } from '../../hooks/useQueryParams';

const SearchPage = () => {
  const params = useQueryParams();
  const { data: beers, isLoading } = beerApi.useGetAllBeersQuery({
    per_page: 5,
    beer_name: params.get('beer_name'),
  });
  if (isLoading) {
    return <Loader />;
  }
  if (beers.length === 0) {
    return <h4>Ничего не найдено</h4>;
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
    </div>
  );
};

export default SearchPage;
