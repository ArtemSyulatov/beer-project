import { NavLink } from 'react-router-dom';
import { SearchHistory } from '../../types/SearchHistory';
import s from './SearchHistoryItem.module.scss';
import { Button } from '../ui/Button/Button';

interface Props {
  historyItem: SearchHistory;
  handleRemoveHistory: () => void;
}

export const SearchHistoryItem = ({
  historyItem,
  handleRemoveHistory,
}: Props) => (
  <div className={s.item}>
    <Button type="button" onClick={handleRemoveHistory} className={s.removeBtn}>
      Delete
    </Button>
    <NavLink to={`/search?beer_name=${historyItem.name}`} className={s.link}>
      <h4>{historyItem.name}</h4>
    </NavLink>
  </div>
);
