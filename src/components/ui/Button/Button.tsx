import React from 'react';
import s from './Button.module.scss';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export const Button = ({ children, ...props }: ButtonProps) => (
  <button {...props} className={s.button}>
    {children}
  </button>
);
