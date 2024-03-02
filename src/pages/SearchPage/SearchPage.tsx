import { useLocation } from 'react-router-dom';
import { TransformedBeer } from '../../types/Beer';
import { BeerCard } from '../../components/BeerCard/BeerCard';
import { beerApi } from '../../redux-toolkit/services/BeerService';
import s from './SearchPage.module.scss';
import { Loader } from '../../components/ui/Loader/Loader';

const SearchPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const { data: beers, isLoading } = beerApi.useGetAllBeersQuery({
    per_page: 5,
    beer_name: params.get('beer_name'),
  });
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className={s.cards}>
      {beers &&
        beers.map((beer: TransformedBeer) => (
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
