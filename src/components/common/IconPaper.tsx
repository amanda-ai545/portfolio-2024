import { FC } from 'react';

type Props = {
  className?: string;
  color?: string;
};

export const IconPaper: FC<Props> = ({ className = ``, color = `#000` }) => {
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
        icon__content-paper

        ${className}
      `}
    >
      <path d="M3 10c0-3.771 0-5.657 1.172-6.828C5.343 2 7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172C21 4.343 21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828C18.657 22 16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172C3 19.657 3 17.771 3 14v-4Z"></path>
      <path d="M8 10h8M8 14h5" />
    </svg>
  );
};
