import { NavLink } from 'react-router-dom';
import PropTypes, { string } from 'prop-types';
import { SearchHistory } from '../../types/SearchHistory';
import s from './SearchHistoryItem.module.scss';
import { Button } from '../ui/Button/Button';
import { getDateForUi } from '../../utils/getDate';
import { useAppDispatch } from '../../hooks/redux';
import { setSearchValue } from '../../redux-toolkit/reducers/beerSlice';

interface Props {
  historyItem: SearchHistory;
  handleRemoveHistory: () => void;
}

export const SearchHistoryItem = ({
  historyItem,
  handleRemoveHistory,
}: Props) => {
  const dispatch = useAppDispatch();
  return (
    <div className={s.item}>
      <Button
        type="button"
        onClick={handleRemoveHistory}
        className={s.removeBtn}
      >
        Delete
      </Button>
      <NavLink
        onClick={() =>
          dispatch(setSearchValue({ searchValue: historyItem.name }))
        }
        to={`/search?beer_name=${historyItem.name}`}
        className={s.link}
      >
        <h4>{historyItem.name}</h4>
      </NavLink>
      <div>
        <p>{getDateForUi(historyItem)}</p>
      </div>
    </div>
  );
};

SearchHistoryItem.propTypes = {
  historyItem: PropTypes.shape({
    date: string,
    name: string,
  }).isRequired,
  handleRemoveHistory: PropTypes.func.isRequired,
};
