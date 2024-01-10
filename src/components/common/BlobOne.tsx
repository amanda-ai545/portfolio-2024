import { FC } from 'react';

type Props = {
  className?: string;
  color?: string;
};

export const BlobOne: FC<Props> = ({ className = ``, color = `#9fddf9` }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3500 2500"
      className={`
        blob__content-one

        ${className}
      `}
    >
      <path
        style={{ opacity: 1 }}
        fill={color}
        d="M1509.5-.5h44c52.73 4.119 105.06 11.952 157 23.5 73.11 17.194 146.11 34.86 219 53a1282.692 1282.692 0 0 0 153 27c92.2 10.813 182.53 2.147 271-26a5708.047 5708.047 0 0 1 159-49c192.22-52.908 358.39-9.075 498.5 131.5 83.63 87.221 140.3 189.888 170 308a1080.69 1080.69 0 0 1 4.5 32v40c-6.45 62.524-27.29 119.857-62.5 172-32.29 47.985-70.13 91.485-113.5 130.5a2729.883 2729.883 0 0 1-48 41.5c-89.05 69.147-183.39 130.65-283 184.5-89.48 47.57-178.48 95.9-267 145-71.6 40.62-139.93 85.95-205 136-55.5 44.83-105.67 95-150.5 150.5-11.33 14.83-22.83 29.5-34.5 44a9056.63 9056.63 0 0 0-76.5 104 58766.32 58766.32 0 0 1-184 267 2974.651 2974.651 0 0 1-167 218 1354.076 1354.076 0 0 1-144.5 145.5c-39.98 33.63-82.98 62.97-129 88-58.41 30.86-120.41 49.03-186 54.5h-52c-73.11-6.2-142.107-26.7-207-61.5-151.63-82.8-265.63-201.63-342-356.5-70.221-143.32-96.387-294.32-78.5-453 8.091-61.27 26.424-119.27 55-174 37.941-68.27 92.775-118.1 164.5-149.5 12.667-5.33 25.333-10.67 38-16a7507.56 7507.56 0 0 1 160-53c142.31-48.64 240.48-143.14 294.5-283.5 40.96-110.169 40.63-220.169-1-330a7454.925 7454.925 0 0 1-43-107c-16.13-40.836-24.63-83.169-25.5-127 1.09-57.736 19.59-109.07 55.5-154a343.193 343.193 0 0 0 14.5-17c39.53-40.297 85.53-71.464 138-93.5 65.48-26.993 133.48-42.16 204-45.5Z"
      />
      <path
        style={{ opacity: 0.5 }}
        fill={color}
        d="M1167.5 138.5a343.193 343.193 0 0 1-14.5 17c-35.91 44.93-54.41 96.264-55.5 154 .87 43.831 9.37 86.164 25.5 127a7454.925 7454.925 0 0 0 43 107c41.63 109.831 41.96 219.831 1 330-54.02 140.36-152.19 234.86-294.5 283.5a7507.56 7507.56 0 0 0-160 53c-12.667 5.33-25.333 10.67-38 16-71.725 31.4-126.559 81.23-164.5 149.5-28.576 54.73-46.909 112.73-55 174-17.887 158.68 8.279 309.68 78.5 453-109.116-9.65-210.116-43.15-303-100.5-84.336-54.68-145.836-128.52-184.5-221.5-28.166-67.32-43.666-137.32-46.5-210v-34c2.237-72.62 19.404-141.62 51.5-207 59.562-111.74 151.729-179.57 276.5-203.5a610.528 610.528 0 0 1 76-7c63.345-.07 126.678-.74 190-2 102.819-6.25 193.152-42.584 271-109 81.573-70.598 134.406-158.765 158.5-264.5a437.9 437.9 0 0 0 8.5-87.5 3068.054 3068.054 0 0 0-7.5-133.5 956.47 956.47 0 0 1 0-62c5.94-101.655 53.78-175.655 143.5-222ZM2961.5 883.5c27.53 127.15 8.03 246.48-58.5 358-58.15 95.82-136.65 169.99-235.5 222.5-97.51 50.39-200.84 82.06-310 95-58.2 8.75-116.54 9.75-175 3-39.69-4.81-79.36-9.81-119-15a513.878 513.878 0 0 0-42-3.5c11.67-14.5 23.17-29.17 34.5-44 44.83-55.5 95-105.67 150.5-150.5 65.07-50.05 133.4-95.38 205-136 88.52-49.1 177.52-97.43 267-145 99.61-53.85 193.95-115.353 283-184.5Z"
      />
      <path
        style={{ opacity: 0.997 }}
        fill={color}
        d="M2285.5 1602.5c52.91-5.32 86.75 17.34 101.5 68 12.24 67.46.58 130.46-35 189-28.61 42.39-67.11 71.89-115.5 88.5-47.56 13.09-90.9 4.75-130-25-28.72-26.16-40.89-58.66-36.5-97.5 4.06-28.12 13.73-54.12 29-78 22.11-33.79 48.27-64.29 78.5-91.5 23.82-21.78 51.15-37.78 82-48 8.74-2.17 17.4-4.01 26-5.5Z"
      />
      <path
        style={{ opacity: 0.993 }}
        fill={color}
        d="M2334.5 2040.5c23.66-1.29 43.49 6.71 59.5 24 10.86 14.31 13.19 29.98 7 47-9.04 20.37-22.54 37.21-40.5 50.5-16.77 13.05-35.43 22.38-56 28-23.43 2.08-46.09-1.25-68-10-27.88-11.32-33.38-29.49-16.5-54.5 18.17-26.17 40.33-48.33 66.5-66.5 14.88-9.45 30.88-15.62 48-18.5Z"
      />
    </svg>
  );
};
