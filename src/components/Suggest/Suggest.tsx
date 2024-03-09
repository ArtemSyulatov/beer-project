import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './Suggest.module.scss';
import { beerApi } from '../../redux-toolkit/services/BeerService';
import { Loader } from '../ui/Loader/Loader';

interface Props {
  value: string;
  setValueDefault: () => void;
}

export const Suggest = ({ value, setValueDefault }: Props) => {
  const { data: beers, isLoading } = beerApi.useGetAllBeersQuery({
    per_page: 5,
    beer_name: value,
  });
  if (!value || isLoading) {
    return (
      <div className={s.suggest}>
        <Loader />
      </div>
    );
  }
  if (beers.length === 0) {
    return (
      <div className={s.suggest}>
        <h4>Found Nothing...</h4>
      </div>
    );
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
Suggest.propTypes = {
  value: PropTypes.string.isRequired,
  setValueDefault: PropTypes.func.isRequired,
};
