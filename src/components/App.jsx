import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import Home from '../pages/Home';
import Tweets from '../pages/Tweets';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="" element={<Tweets />} />
        </Route>
      </Routes>
    </>
  );
};
