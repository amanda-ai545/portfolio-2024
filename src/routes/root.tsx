import { NavBar } from '@components/NavBar';
import { AboutMe } from '@pages/AboutMe';
import { Home } from '@pages/Home';

export const Root = () => {
  return (
    <>
      <NavBar />
      <Home />
      <AboutMe />
    </>
  );
};
