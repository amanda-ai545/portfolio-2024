import { FC } from 'react';

type Props = {
  className?: string;
  color?: string;
};

export const WaveOne: FC<Props> = ({ className = ``, color = `#fff` }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1511 160"
      fill={color}
      className={`
        wave__content-one

        ${className}
      `}
    >
      <path d="M0 0L62.9583 21.3C125.917 43 251.833 85 377.75 101.3C503.667 117 629.583 107 755.5 90.7C881.417 75 1007.33 53 1133.25 58.7C1259.17 64 1385.08 96 1448.04 112L1511 128V160H1448.04C1385.08 160 1259.17 160 1133.25 160C1007.33 160 881.417 160 755.5 160C629.583 160 503.667 160 377.75 160C251.833 160 125.917 160 62.9583 160H0V0Z" />
    </svg>
  );
};
