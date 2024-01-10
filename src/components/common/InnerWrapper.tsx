import { FC, ReactNode } from 'react';

type Props = {
  id?: string;
  className?: string;
  children?: ReactNode;
};

export const InnerWrapper: FC<Props> = ({ id, className = ``, children }) => {
  return (
    <div
      id={id}
      className={`
        inner__wrapper

        w-full
        max-w-[1920px]
        mx-auto
        px-20
        font-jost

        ${className}
      `}
    >
      {children}
    </div>
  );
};
