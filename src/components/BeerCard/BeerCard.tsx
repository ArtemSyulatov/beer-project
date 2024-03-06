import { Button } from 'components/ui/Button/Button';
import { NavLink } from 'react-router-dom';
import PropTypes, { number, string } from 'prop-types';
import s from './BeerCard.module.scss';
import { TransformedBeer } from '../../types/Beer';
import { Loader } from '../ui/Loader/Loader';
import { useAppSelector } from '../../hooks/redux';
import { getIsAuth } from '../../redux-toolkit/selectors/getIsAuth';

interface Props {
  beer: TransformedBeer;
  isLoading: boolean;
  toggleFavorite: (beer: TransformedBeer) => void;
  isFavorite: boolean;
}

export const BeerCard = ({
  beer,
  isLoading,
  toggleFavorite,
  isFavorite,
}: Props) => {
  const isAuth = useAppSelector(getIsAuth);
  const { name, description, imageUrl, id } = beer;
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className={s.card}>
      <img src={imageUrl} alt={name} />
      <p>
        {id}. {name}
      </p>
      <p>{description}</p>
      <div className={s.buttons}>
        <NavLink to={`/beer/${id}`}>Details</NavLink>
        {isAuth && (
          <div>
            <Button onClick={() => toggleFavorite(beer)}>
              {isFavorite ? (
                <p>Remove from favourites</p>
              ) : (
                <p>Add To Favourites</p>
              )}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
BeerCard.propTypes = {
  beer: PropTypes.shape({
    name: string,
    description: string,
    imageUrl: string,
    id: number,
  }).isRequired,
  isLoading: PropTypes.bool.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool.isRequired,
};
