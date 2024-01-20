import { FC } from 'react';

import logoUCC from '@assets/images/logo-ucc.png';

type Props = {
  className?: string;
};

export const LogoUcc: FC<Props> = ({ className = `` }) => {
  return (
    <img
      className={`
        logo__content-ucc

        ${className}
      `}
      src={logoUCC}
      alt="University of Caloocan City"
    />
  );
};
