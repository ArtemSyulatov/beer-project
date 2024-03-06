import { Loader } from '../../components/ui/Loader/Loader';
import { useHistory } from '../../hooks/useHistory';
import s from './SearchHistory.module.scss';
import { SearchHistoryItem } from '../../components/SearchHistoryItem/SearchHistoryItem';

const SearchHistoryPage = () => {
  const { history, removeHistory, isHistoryFetching } = useHistory();

  if (isHistoryFetching) {
    return <Loader />;
  }
  return (
    <div className={s.history}>
      <h2>Search History</h2>
      {history.length > 0 ? (
        history.map((historyItem) => (
          <SearchHistoryItem
            key={historyItem.date}
            historyItem={historyItem}
            handleRemoveHistory={() => removeHistory(historyItem)}
          />
        ))
      ) : (
        <h3>Empty...</h3>
      )}
    </div>
  );
};

export default SearchHistoryPage;
