import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../ui/Input/Input';
import { Button } from '../ui/Button/Button';
import s from './SearchBar.module.scss';
import { Suggest } from '../Suggest/Suggest';
import { useDebounce } from '../../hooks/useDebounce';

export const SearchBar = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);

  const onChange = (e: FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (value) {
      setValue('');
      navigate(`/search?beer_name=${value}`);
    }
  };
  const debounceValue = useDebounce(value, 500);
  const setValueDefault = () => {
    setValue('');
  };
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
        <Suggest setValueDefault={setValueDefault} value={debounceValue} />
      )}
    </div>
  );
};
