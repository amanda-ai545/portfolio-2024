import { FC, ReactNode } from 'react';

type Props = {
  className?: string;
  children?: ReactNode;
};

export const Chip: FC<Props> = ({ className = ``, children }) => {
  return (
    <div
      className={`
        chip

        inline-block
        px-3.5
        py-1
        border
        border-solid
        border-gray-900
        rounded-full
        text-black

        ${className}
      `}
    >
      {children}
    </div>
  );
};
