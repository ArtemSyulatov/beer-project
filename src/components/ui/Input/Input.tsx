import React from 'react';
import s from './Input.module.scss';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = (props: InputProps) => (
  <input {...props} className={s.input} />
);
