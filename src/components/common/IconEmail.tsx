import { FC } from 'react';

type Props = {
  className?: string;
  color?: string;
};

export const IconEmail: FC<Props> = ({ className = ``, color = `#000` }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`
        icon__content-email

        ${className}
      `}
    >
      <path d="m4 7 6.2 4.65a3 3 0 0 0 3.6 0L20 7" />
      <rect x="3" y="5" width="18" height="14" rx="2" />
    </svg>
  );
};
