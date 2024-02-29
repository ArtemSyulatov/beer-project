import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { beerApi } from '../../redux-toolkit/services/BeerService';
import { PageLoader } from '../../components/ui/PageLoader/PageLoader';
import { BeerCard } from '../../components/BeerCard/BeerCard';
import s from './MainPage.module.scss';
import { Beer } from '../../types/Beer';

const MainPage = () => {
  const [perPage, setPerPage] = useState(10);
  const {
    data: beers,
    isLoading,
    error,
  } = beerApi.useGetAllBeersQuery({ per_page: perPage }); // Трансформацию данных пока не сделал, но про это знаю, сделаю чуть позже
  const downloadMore = () => {
    setPerPage((prevState) => prevState + 10);
  };
  if (isLoading) {
    return <PageLoader />;
  }
  return (
    <div className={s.cards}>
      {beers.map((beer: Beer) => (
        <NavLink key={beer.id} to={`/beer/${beer.id}`}>
          <BeerCard
            name={beer.name}
            description={beer.description}
            image_url={beer.image_url}
            id={beer.id}
          />
        </NavLink>
      ))}
      <button disabled={!!error} onClick={downloadMore}>
        {error ? <p>Beer is out</p> : <p>Загрузить еще</p>}
      </button>
    </div>
  );
};

export default MainPage;
