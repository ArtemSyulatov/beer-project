import { FormEvent, useState } from 'react';

export const useFocusInput = () => {
  const [value, setValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);

  const onChange = (e: FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  return { value, isFocus, setValue, setIsFocus, onChange };
};
