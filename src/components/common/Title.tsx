import { FC, ReactNode } from 'react';

type Props = {
  id?: string;
  className?: string;
  children?: ReactNode;
};

export const Title: FC<Props> = ({ id, className = ``, children }) => {
  return (
    <h2
      id={id}
      className={`
        title

        font-italiana
        text-[18vw]
        uppercase

        ${className}
      `}
    >
      {children}
    </h2>
  );
};
