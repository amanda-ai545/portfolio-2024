import { FC, ReactNode } from 'react';

type Props = {
  variant?: `filled` | `outlined`;
  className?: string;
  children?: ReactNode;
  href?: string;
};

export const Link: FC<Props> = ({ variant = `outlined`, className = ``, children, href }) => {
  const variants = {
    filled: `border rounded-full border-black text-black bg-black text-white`,
    outlined: `border border-black border-solid rounded-full text-black`,
  };

  return (
    <a
      className={`
        link

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
      href={href}
    >
      {children}
    </a>
  );
};
