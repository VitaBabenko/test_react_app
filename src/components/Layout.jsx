import { NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from './Loader';

export const Layout = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/tweets">Tweets</NavLink>
      </nav>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
