import { FC } from 'react';

import { IconGithub } from '@components/common/IconGithub';
import { IconLinkedIn } from '@components/common/IconLinkedIn';
import { IconSandbox } from '@components/common/IconSandbox';

type Props = {
  className?: string;
};

export const SideNav: FC<Props> = ({ className = `` }) => {
  return (
    <div
      className={`
        side__nav

        fixed
        bottom-0
        right-5
        w-10
        z-10

        tablet:right-2
        phone:right-0

        ${className}
      `}
    >
      <ul
        className="
          side__nav-links

          flex
          flex-col
          items-center
          after:w-[1px]
          after:h-12
          after:mx-auto
          after:bg-gray-900
        "
      >
        <li>
          <a href="https://github.com/amanda-ai545" target="_blank" rel="noreferrer">
            <IconGithub color="#111827" className="w-6 mb-4 tablet:w-5 phone:w-5" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/amanda-diane-e-3a352b1b5/" target="_blank" rel="noreferrer">
            <IconLinkedIn color="#111827" className="w-6 mb-4 tablet:w-5 phone:w-5" />
          </a>
        </li>
        <li>
          <a href="https://codesandbox.io/u/amanda-ai545" target="_blank" rel="noreferrer">
            <IconSandbox color="#111827" className="w-6 mb-6 tablet:w-5 phone:w-5" />
          </a>
        </li>
      </ul>
    </div>
  );
};
