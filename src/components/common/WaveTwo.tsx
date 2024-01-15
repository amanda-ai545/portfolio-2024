import { FC } from 'react';

type Props = {
  className?: string;
  color?: string;
};

export const WaveTwo: FC<Props> = ({ className = ``, color = `#fff` }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1728 256"
      fill="none"
      className={`
        wave__content-two

        ${className}
      `}
    >
      <g clipPath="url(#clip0_172_315)">
        <path
          d="M0 73.1429L144.191 60.9143C288.381 49.1429 576.762 24 865.143 54.8571C1153.52 85.7143 1441.91 170.286 1586.09 213.371L1730.29 256V0H1586.09C1441.91 0 1153.52 0 865.143 0C576.762 0 288.381 0 144.191 0H0V73.1429Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_172_315">
          <rect width="1728" height="256" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
