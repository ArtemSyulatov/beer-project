import { FormEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../ui/Input/Input';
import { Button } from '../ui/Button/Button';
import s from './SearchBar.module.scss';
import { Suggest } from '../Suggest/Suggest';
import { useDebounce } from '../../hooks/useDebounce';
import { useFocusInput } from '../../hooks/useFocusInput';
import { useHistory } from '../../hooks/useHistory';
import { getDate } from '../../utils/getDate';
import { useQueryParams } from '../../hooks/useQueryParams';
import { useAppDispatch } from '../../hooks/redux';
import { setSearchValue } from '../../redux-toolkit/reducers/beerSlice';

export const SearchBar = () => {
  const params = useQueryParams();
  const navigate = useNavigate();
  const { value, setIsFocus, isFocus, onChange } = useFocusInput();
  const { addHistory } = useHistory();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!value) {
      dispatch(setSearchValue({ searchValue: params.get('beer_name') }));
    }
  }, [dispatch, params, value]);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (value) {
      const date = getDate();
      addHistory({ date, name: value });
      navigate(`/search?beer_name=${value}`);
    }
  };
  const debounceValue = useDebounce(value, 500);
  return (
    <div>
      <div className={s.search}>
        <form onSubmit={onSubmit}>
          <Input
            onFocus={() => setIsFocus(true)}
            value={value}
            onChange={onChange}
            onBlur={() => setIsFocus(false)}
          />
          <Button>Search</Button>
        </form>
      </div>
      {isFocus && value && (
        <Suggest
          setValueDefault={() => dispatch(setSearchValue({ searchValue: '' }))}
          value={debounceValue}
        />
      )}
    </div>
  );
};
