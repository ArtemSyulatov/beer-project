import { Loader } from '../Loader/Loader';
import s from './PageLoader.module.scss';

export const PageLoader = () => (
  <div className={s.PageLoader}>
    <Loader />
  </div>
);
