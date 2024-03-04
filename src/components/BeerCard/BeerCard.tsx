import { Button } from 'components/ui/Button/Button';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import s from './BeerCard.module.scss';

interface Props {
  name: string;
  description: string;
  image_url: string;
  id: number;
}

export const BeerCard = ({ name, description, image_url, id }: Props) => {
  const [isFavourite, setIsFavourite] = useState(false);
  return (
    <div className={s.card}>
      <img src={image_url} alt={name} />
      <p>
        {id}. {name}
      </p>
      <p>{description}</p>
      <div>
        <NavLink to={`/beer/${id}`}>Details</NavLink>
        {isFavourite ? (
          <Button>Remove from favourites</Button>
        ) : (
          <Button>Add To Favourites</Button>
        )}
      </div>
    </div>
  );
};
