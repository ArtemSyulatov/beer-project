import { NavLink } from 'react-router-dom';
import { beerApi } from '../../redux-toolkit/services/BeerService';
import { PageLoader } from '../../components/ui/PageLoader/PageLoader';
import { BeerCard } from '../../components/BeerCard/BeerCard';
import s from './MainPage.module.scss';

const MainPage = () => {
  const { data: beers, isLoading, error } = beerApi.useGetAllBeersQuery({}); // Трансформацию данных пока не сделал, но про это знаю, сделаю чуть позже
  if (isLoading) {
    return <PageLoader />;
  }
  if (error) {
    return <div>Ошибка</div>;
  }
  return (
    <div className={s.cards}>
      {beers.map((beer: any) => (
        <NavLink to={`/beer/${beer.id}`}>
          <BeerCard
            name={beer.name}
            description={beer.description}
            image_url={beer.image_url}
            id={beer.id}
          />
        </NavLink>
      ))}
    </div>
  );
};

export default MainPage;
