import { NavLink } from 'react-router-dom';
import s from './Suggest.module.scss';
import { beerApi } from '../../redux-toolkit/services/BeerService';
import { Loader } from '../ui/Loader/Loader';

interface Props {
  value: string;
  setValueDefault: () => void;
}

export const Suggest = ({ value, setValueDefault }: Props) => {
  const { data: beers } = beerApi.useGetAllBeersQuery({
    per_page: 5,
    beer_name: value,
  });
  if (!value) {
    return <Loader />;
  }
  return (
    <div className={s.suggest}>
      {beers.map((beer) => (
        <NavLink
          onMouseDown={(e) => e.preventDefault()}
          onClick={setValueDefault}
          key={beer.id}
          className={s.link}
          to={`/beer/${beer.id}`}
        >
          <p>
            {beer.id}. {beer.name}
          </p>
        </NavLink>
      ))}
    </div>
  );
};
