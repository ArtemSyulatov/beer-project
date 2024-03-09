import React from 'react';
import { useTheme } from '../../../hooks/useTheme';
import { Button } from '../../ui/Button/Button';

export const ThemeSwitcher = () => {
  const { toggleTheme } = useTheme();

  return <Button onClick={toggleTheme}>Switch Theme</Button>;
};
