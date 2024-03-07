import { SearchHistory } from '../types/SearchHistory';

export const getDate = () => new Date().toJSON();
export const getDateForUi = (historyItem: SearchHistory): string =>
  new Date(historyItem.date).toLocaleString().slice(0, 8);