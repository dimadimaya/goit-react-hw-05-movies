import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
