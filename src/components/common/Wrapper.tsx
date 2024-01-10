import { FC, ReactNode } from 'react';

type Props = {
  id?: string;
  className?: string;
  children?: ReactNode;
};

export const Wrapper: FC<Props> = ({ id, className = ``, children }) => {
  return (
    <div
      id={id}
      className={`
        wrapper

        w-full
        h-full

        ${className}
      `}
    >
      {children}
    </div>
  );
};
