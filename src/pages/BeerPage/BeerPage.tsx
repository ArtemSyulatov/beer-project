import { useParams } from 'react-router-dom';
import { beerApi } from '../../redux-toolkit/services/BeerService';
import { PageLoader } from '../../components/ui/PageLoader/PageLoader';

export const BeerPage = () => {
  const params = useParams();
  const {
    data: beer,
    isLoading,
    error,
  } = beerApi.useGetSingleBeerQuery(params.id);
  if (isLoading) {
    return <PageLoader />;
  }
  if (error) {
    return <div>Ошибка</div>;
  }
  return (
    <div>
      <h2>{beer[0].name}</h2>
      <img src={beer[0].image_url} alt="" />
      <p>{beer[0].description}</p>
    </div>
  );
};
