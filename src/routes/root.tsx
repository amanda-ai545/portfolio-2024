import { Footer } from '@components/Footer';
import { NavBar } from '@components/NavBar';
import { SideNav } from '@components/SideNav';
import { Loader } from '@components/common/Loader';
import { AboutMe } from '@pages/AboutMe';
import { Contact } from '@pages/Contact';
import { Home } from '@pages/Home';
import { Projects } from '@pages/Projects';

export const Root = () => {
  return (
    <>
      <Loader />
      <NavBar />
      <Home />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
      <SideNav />
    </>
  );
};
