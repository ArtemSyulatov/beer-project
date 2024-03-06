import { RouteProps } from 'react-router-dom';
import { lazy } from 'react';
import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage';
import { BeerPage } from '../pages/BeerPage/BeerPage';
import ProtectedRoute from './ProtectedRoute';
import ProtectedRouteAuth from './ProtectedRouteAuth';

const MainPage = lazy(() => import('pages/MainPage/MainPage'));
const History = lazy(() => import('pages/SearchHistoryPage/SearchHistoryPage'));
const FavouriteBeer = lazy(() => import('pages/FavoritePage/FavouriteBeer'));
const SignInPage = lazy(() => import('pages/SignInPage/SignInPage'));
const SignUpPage = lazy(() => import('pages/SignUpPage/SignUpPage'));
const SearchPage = lazy(() => import('pages/SearchPage/SearchPage'));
export enum AppRoutes {
  MAIN = 'main',
  HISTORY = 'history',
  NOT_FOUND = 'not_found',
  BEER_PAGE = 'beer_page',
  FAVOURITE_BEER = 'favourite_beer',
  SIGN_IN = 'signin',
  SIGN_UP = 'signup',
  SEARCH_PAGE = 'search',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.HISTORY]: '/history',
  [AppRoutes.NOT_FOUND]: '*',
  [AppRoutes.BEER_PAGE]: '/beer/:id',
  [AppRoutes.FAVOURITE_BEER]: '/favorites',
  [AppRoutes.SIGN_IN]: '/signin',
  [AppRoutes.SIGN_UP]: '/signup',
  [AppRoutes.SEARCH_PAGE]: '/search',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.SEARCH_PAGE]: {
    path: RoutePath.search,
    element: <SearchPage />,
  },
  [AppRoutes.SIGN_UP]: {
    path: RoutePath.signup,
    element: (
      <ProtectedRouteAuth>
        <SignUpPage />
      </ProtectedRouteAuth>
    ),
  },
  [AppRoutes.SIGN_IN]: {
    path: RoutePath.signin,
    element: (
      <ProtectedRouteAuth>
        <SignInPage />
      </ProtectedRouteAuth>
    ),
  },
  [AppRoutes.FAVOURITE_BEER]: {
    path: RoutePath.favourite_beer,
    element: (
      <ProtectedRoute>
        <FavouriteBeer />
      </ProtectedRoute>
    ),
  },
  [AppRoutes.HISTORY]: {
    path: RoutePath.history,
    element: (
      <ProtectedRoute>
        <History />
      </ProtectedRoute>
    ),
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
  [AppRoutes.BEER_PAGE]: {
    path: RoutePath.beer_page,
    element: <BeerPage />,
  },
};
