import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from '../Loader';
import { Container, NavList, NavLink, Wrapper } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <NavList>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/tweets">Tweets</NavLink>
      </NavList>
      <Wrapper>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Wrapper>
    </Container>
  );
};
