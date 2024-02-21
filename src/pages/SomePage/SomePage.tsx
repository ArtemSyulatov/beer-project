import { beerApi } from 'redux-toolkit/services/BeerService';
import { BeerCard } from '../../components/BeerCard/BeerCard';
import { PageLoader } from '../../components/ui/PageLoader/PageLoader';

const SomePage = () => {
  const { data: beers, isLoading, error } = beerApi.useGetAllBeersQuery({}); // Трансформацию данных пока не сделал, но про это знаю, сделаю чуть позже
  if (isLoading) {
    return <PageLoader />;
  }
  if (error) {
    return <div>Ошибка</div>;
  }
  return (
    <div>
      <h1>SomePage</h1>
      {beers.map((beer: any) => (
        <BeerCard
          name={beer.name}
          description={beer.description}
          image_url={beer.image_url}
        />
      ))}
    </div>
  );
};
export default SomePage;
