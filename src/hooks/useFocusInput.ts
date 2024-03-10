import { FormEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from './redux';
import { setSearchValue } from '../redux-toolkit/reducers/beerSlice';
import { getSearchValue } from '../redux-toolkit/selectors/getPerPage';

export const useFocusInput = () => {
  const [isFocus, setIsFocus] = useState(false);
  const value = useAppSelector(getSearchValue);
  const dispatch = useAppDispatch();
  const onChange = (e: FormEvent<HTMLInputElement>) => {
    dispatch(setSearchValue({ searchValue: e.currentTarget.value }));
  };

  return { value, isFocus, setIsFocus, onChange };
};
