import { useParams } from 'react-router-dom';
import { beerApi } from '../../redux-toolkit/services/BeerService';
import s from './BeerPage.module.scss';
import { Loader } from '../../components/ui/Loader/Loader';

const BeerPage = () => {
  const params = useParams();
  const {
    data: beer,
    isLoading,
    error,
  } = beerApi.useGetSingleBeerQuery(params.id);
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
    </div>
  );
};

export default BeerPage;
