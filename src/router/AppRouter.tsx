import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { publicRouteConfig } from 'router/routerConfig';
import { Loader } from '../components/ui/Loader/Loader';

const AppRouter = () => (
  <Routes>
    {Object.values(publicRouteConfig).map(({ element, path }) => (
      <Route
        key={path}
        path={path}
        element={
          <Suspense fallback={<Loader />}>
            <div className="page-wrapper">{element}</div>
          </Suspense>
        }
      />
    ))}
  </Routes>
);

export default AppRouter;
