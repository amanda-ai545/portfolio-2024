import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { FC } from 'react';

type Props = {
  className?: string;
};

export const Loader: FC<Props> = ({ className = `` }) => {
  useGSAP(() => {
    const wave = document.querySelector('#wave');
    const loader = document.querySelector('.loader');

    const shape2 =
      'M469.539032,263.986786H-0.000001L0,229.890961c310.649475,58.156982,255.61113-98.5,469.539032-65.062302V263.986786z';
    const shape3 = 'M469.539032,263.986786H-0.000001L0,0c226.11113,0,182.887283-0.414484,469.539032,0V263.986786zz';

    gsap
      .timeline()
      .fromTo(wave, { attr: { d: shape2 } }, { attr: { d: shape3 }, duration: 5, ease: 'power4.easeOut' })
      .fromTo(loader, { yPercent: 0 }, { yPercent: -100, duration: 1, ease: 'power1.easeOut' }, `>`);
  });

  return (
    <div
      className={`
        loader

        grid
        fixed
        w-screen
        h-screen
        content-end
        bg-gray-900
        z-30

        ${className}
      `}
    >
      <svg
        className="loader__wave absolute bottom-0 h-full w-full"
        viewBox="0 0 469.539032 263.986786"
        preserveAspectRatio="none"
      >
        <path
          id="wave"
          fill="#020617"
          d="M469.539032,263.986786H-0.000001L0,263.557617c66.11113,0.429169,351.088104,0.429169,469.539032,0.208344V263.986786z"
        />
      </svg>
    </div>
  );
};
