import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../ui/Input/Input';
import { Button } from '../ui/Button/Button';
import s from './SearchBar.module.scss';
import { Suggest } from '../Suggest/Suggest';
import { useDebounce } from '../../hooks/useDebounce';
import { useFocusInput } from '../../hooks/useFocusInput';
import { useHistory } from '../../hooks/useHistory';

export const SearchBar = () => {
  const navigate = useNavigate();
  const { value, setValue, setIsFocus, isFocus, onChange } = useFocusInput();
  const { addHistory } = useHistory();
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (value) {
      setValue('');
      const date = new Date().toJSON();
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
        <Suggest setValueDefault={() => setValue('')} value={debounceValue} />
      )}
    </div>
  );
};
