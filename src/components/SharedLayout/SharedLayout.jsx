import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import styles from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <>
      <nav className={styles.header}>
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
