import s from './ErrorPage.module.scss';
import { Button } from '../../components/ui/Button/Button';

export const ErrorPage = () => {
  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={s.ErrorPage}>
      <p>Произошла непредвиденная ошибка</p>
      <Button onClick={reloadPage}>Обновить страницу</Button>
    </div>
  );
};
