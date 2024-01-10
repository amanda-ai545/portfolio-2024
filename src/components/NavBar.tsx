import { FC, ReactNode } from 'react';
import { HashLink } from 'react-router-hash-link';

import { InnerWrapper } from '@components/common/InnerWrapper';
import { LogoMain } from '@components/common/LogoMain';

type Props = {
  className?: string;
  children?: ReactNode;
};

export const NavBar: FC<Props> = ({ className = `` }) => {
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

        <ul className="navbar__content-links flex items-center">
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
      </InnerWrapper>
    </div>
  );
};
