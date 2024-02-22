import { PageLoader } from 'components/ui/PageLoader/PageLoader';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { publicRouteConfig } from 'router/routerConfig';

const AppRouter = () => (
  <Routes>
    {Object.values(publicRouteConfig).map(({ element, path }) => (
      <Route
        key={path}
        path={path}
        element={
          <Suspense fallback={<PageLoader />}>
            <div className="page-wrapper">{element}</div>
          </Suspense>
        }
      />
    ))}
  </Routes>
);

export default AppRouter;
