import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import '@assets/styles/main.css';
import { Wrapper } from '@components/common/Wrapper';
import { Root } from '@routes/root';

function App() {
  gsap.registerPlugin(ScrollTrigger);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
    },
  ]);

  useEffect(() => {
    ScrollTrigger.create({
      start: 'top top',
      end: 'bottom center',
      animation: gsap.to(document.querySelector('.navbar'), {
        paddingTop: `0.75rem`,
        paddingBottom: `0.75rem`,
        backgroundColor: `#111827`,
        color: `#fff`,
        immediateRender: false,
      }),
      toggleActions: 'restart none none reverse',
    });

    // ScrollTrigger.create({
    //   start: 'top top',
    //   end: 'bottom center',
    //   animation: gsap.to(document.querySelector('.navbar__content-logo-main'), {
    //     fill: `#e2e8f0`, // #FFCF34
    //     immediateRender: false,
    //   }),
    //   toggleActions: 'restart none none reverse',
    // });

    // ScrollTrigger.create({
    //   start: 'bottom bottom',
    //   end: 'top center',
    //   animation: gsap.to(document.querySelector('.side__nav'), {
    //     bottom: `56px`,
    //     immediateRender: false,
    //   }),
    //   toggleActions: 'restart none none reverse',
    // });
  }, []);

  return (
    <Wrapper className="relative select-none">
      {/* <Loader /> */}
      <RouterProvider router={router} />
    </Wrapper>
  );
}

export default App;
