import { NavLink } from 'react-router-dom';
import s from './BeerCard.module.scss';

interface Props {
  name: string;
  description: string;
  image_url: string;
  id: number;
}

export const BeerCard = ({ name, description, image_url, id }: Props) => (
  <div className={s.card}>
    <img src={image_url} alt={name} />
    <p>
      {id}. {name}
    </p>
    <p>{description}</p>
    <NavLink to={`/beer/${id}`}>Подробнее</NavLink>
  </div>
);
