import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './redux';
import { useAuthActions } from './useAuthActions';
import { SearchHistory } from '../types/SearchHistory';
import {
  selectHistoryItems,
  selectHistoryLoading,
  selectIsHistoryFetching,
} from '../redux-toolkit/selectors/getHistory';
import {
  addHistoryItem,
  fetchHistory,
  removeHistoryItem,
} from '../redux-toolkit/thunks/history';

export const useHistory = () => {
  const dispatch = useAppDispatch();
  const history = useAppSelector(selectHistoryItems);
  const isLoading = useAppSelector(selectHistoryLoading);
  const isHistoryFetching = useAppSelector(selectIsHistoryFetching);
  const { user } = useAuthActions();

  useEffect(() => {
    if (user && user.email) {
      dispatch(fetchHistory(user.email));
    }
  }, [dispatch, user]);

  const addHistory = useCallback(
    (item: SearchHistory) => {
      if (user && user.email) {
        dispatch(addHistoryItem({ email: user.email, item }));
      }
    },
    [dispatch, user],
  );

  const removeHistory = useCallback(
    (item: SearchHistory) => {
      if (user && user.email) {
        dispatch(removeHistoryItem({ email: user.email, item }));
      }
    },
    [dispatch, user],
  );

  return { history, addHistory, removeHistory, isLoading, isHistoryFetching };
};
