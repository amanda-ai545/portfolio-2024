import { FC } from 'react';

type Props = {
  className?: string;
  color?: string;
};

export const IconLightning: FC<Props> = ({ className = ``, color = `#000` }) => {
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
        icon__content-lightning

        ${className}
      `}
    >
      <path d="m5.67 9.914l3.062-4.143c1.979-2.678 2.969-4.017 3.892-3.734c.923.283.923 1.925.923 5.21v.31c0 1.185 0 1.777.379 2.148l.02.02c.387.363 1.003.363 2.236.363c2.22 0 3.329 0 3.704.673l.018.034c.354.683-.289 1.553-1.574 3.29l-3.062 4.144c-1.98 2.678-2.969 4.017-3.892 3.734c-.923-.283-.923-1.925-.923-5.21v-.31c0-1.185 0-1.777-.379-2.148l-.02-.02c-.387-.363-1.003-.363-2.236-.363c-2.22 0-3.329 0-3.704-.673a1.084 1.084 0 0 1-.018-.034c-.354-.683.289-1.552 1.574-3.29Z"></path>
    </svg>
  );
};
