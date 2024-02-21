import { RouteProps } from 'react-router-dom';
import { lazy } from 'react';
import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage';

const MainPage = lazy(() => import('pages/MainPage/MainPage'));
const SomePage = lazy(() => import('pages/SomePage/SomePage'));

export enum AppRoutes {
  MAIN = 'main',
  SOME = 'some',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.SOME]: '/some',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.SOME]: {
    path: RoutePath.some,
    element: <SomePage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
