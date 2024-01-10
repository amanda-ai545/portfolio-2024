import '@assets/styles/main.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { NavBar } from '@components/NavBar';
import { Loader } from '@components/common/Loader';
import { Wrapper } from '@components/common/Wrapper';

function App() {
  gsap.registerPlugin(ScrollTrigger);

  // useEffect(() => {
  //   ScrollTrigger.create({
  //     start: 'top top',
  //     end: 'bottom center',
  //     animation: gsap.to(document.querySelector('.navbar'), {
  //       paddingTop: `0.75rem`,
  //       paddingBottom: `0.75rem`,
  //       backgroundColor: `#111827`,
  //       color: `#fff`,
  //       immediateRender: false,
  //     }),
  //     toggleActions: 'restart none none reverse',
  //   });

  //   ScrollTrigger.create({
  //     start: 'top top',
  //     end: 'bottom center',
  //     animation: gsap.to(document.querySelector('.navbar__content-logo-main'), {
  //       fill: `#e2e8f0`, // #FFCF34
  //       immediateRender: false,
  //     }),
  //     toggleActions: 'restart none none reverse',
  //   });

  //   ScrollTrigger.create({
  //     start: 'bottom bottom',
  //     end: 'top center',
  //     animation: gsap.to(document.querySelector('.side__nav'), {
  //       bottom: `56px`,
  //       immediateRender: false,
  //     }),
  //     toggleActions: 'restart none none reverse',
  //   });
  // }, []);

  return (
    <Wrapper className="relative select-none">
      <Loader />
      <NavBar />
    </Wrapper>
  );
}

export default App;
