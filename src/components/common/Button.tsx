import { FC, ReactNode } from 'react';

type Props = {
  variant?: `filled` | `outlined`;
  disabled?: boolean;
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
};

export const Button: FC<Props> = ({ variant = `outlined`, disabled = false, className = ``, children, onClick }) => {
  const variants = {
    filled: `border rounded-full border-black text-black bg-black text-white`,
    outlined: `border border-black border-solid rounded-full text-black`,
  };
  return (
    <button
      className={`
        button

        inline-flex
        items-center
        gap-2
        px-6
        py-2.5
        cursor-pointer
        transition-opacity
        duration-300
        hover:opacity-60
        disabled:opacity-50
        disabled:cursor-default

        ${className}
        ${variants[variant]}
      `}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
