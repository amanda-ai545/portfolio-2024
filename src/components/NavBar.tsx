import { FC, ReactNode, useState } from 'react';
import { HashLink } from 'react-router-hash-link';

import { InnerWrapper } from '@components/common/InnerWrapper';
import { LogoMain } from '@components/common/LogoMain';

type Props = {
  className?: string;
  children?: ReactNode;
};

export const NavBar: FC<Props> = ({ className = `` }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleMobileNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div
      id="navbar"
      className={`
        navbar

        fixed
        top-0
        left-0
        w-full
        py-5
        text-gray-900
        text-sm
        uppercase
        z-20

        ${className}
      `}
    >
      <InnerWrapper className="flex justify-between items-center">
        <LogoMain className="navbar__content-logo h-[2.5rem]" color="#111827" />

        <ul className="navbar__content-links flex items-center tablet:hidden phone:hidden">
          <li className="px-8">
            <HashLink to="#home" smooth>
              Home
            </HashLink>
          </li>
          <li className="px-8">
            <HashLink to="#aboutme" smooth>
              About me
            </HashLink>
          </li>
          <li className="px-8">
            <HashLink to="#projects" smooth>
              Projects
            </HashLink>
          </li>
          <li className="pl-8">
            <HashLink to="#contact" smooth>
              Contact
            </HashLink>
          </li>
        </ul>

        <div className="navbar-mobile__content hidden tablet:block phone:block">
          <div className="navbar-mobile__content-button relative sm:max-w-xl mx-auto z-10">
            <button className="text-gray-500 w-6 h-10 relative focus:outline-none" onClick={handleMobileNav}>
              <div
                className={`
                  grid
                  absolute
                  top-1/2
                  left-1/2
                  w-6
                  transform
                  -translate-x-1/2
                  -translate-y-1/2

                  ${isNavOpen ? 'justify-items-center' : 'justify-items-end'}
                `}
              >
                <span
                  aria-hidden="true"
                  className={`
                    block
                    absolute
                    w-6
                    h-0.5
                    bg-slate-800
                    transform
                    transition
                    duration-500
                    ease-in-out

                    ${isNavOpen ? 'rotate-45 !w-5' : '-translate-y-1.5'}
                  `}
                ></span>

                <span
                  aria-hidden="true"
                  className={`
                    block
                    absolute
                    w-6
                    h-0.5
                    bg-slate-800
                    transform
                    transition
                    duration-500
                    ease-in-out

                    ${isNavOpen ? 'opacity-0' : ''}
                  `}
                ></span>

                <span
                  aria-hidden="true"
                  className={`
                    block
                    absolute
                    w-4
                    h-0.5
                    bg-slate-800
                    transform
                    transition
                    duration-500
                    ease-in-out

                    ${isNavOpen ? '-rotate-45 !w-5' : 'translate-y-1.5'}
                  `}
                ></span>
              </div>
            </button>
          </div>

          <div
            className={`
              navbar-mobile__content-links
              flex
              items-center
              absolute
              left-0
              top-0
              w-screen
              h-screen
              bg-white
              transform
              transition
              duration-1000
              ease-in-out

              ${isNavOpen ? 'translate-y-0' : 'translate-y-[110%]'}
            `}
          >
            <InnerWrapper className="flex justify-center items-center text-center">
              <ul className="navbar-mobile__content-links grid gap-10 text-lg">
                <li>
                  <HashLink to="#home" smooth onClick={handleMobileNav}>
                    Home
                  </HashLink>
                </li>
                <li>
                  <HashLink to="#aboutme" smooth onClick={handleMobileNav}>
                    About me
                  </HashLink>
                </li>
                <li>
                  <HashLink to="#projects" smooth onClick={handleMobileNav}>
                    Projects
                  </HashLink>
                </li>
                <li>
                  <HashLink to="#contact" smooth onClick={handleMobileNav}>
                    Contact
                  </HashLink>
                </li>
              </ul>
            </InnerWrapper>
          </div>
        </div>
      </InnerWrapper>
    </div>
  );
};
