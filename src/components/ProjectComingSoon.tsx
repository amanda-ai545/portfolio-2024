import { FC } from 'react';

import cover from '@assets/images/under-construction.jpg';

export const ProjectComingSoon: FC = () => {
  return (
    <div
      className={`
        project__gueridon
      `}
    >
      <h3 className="project__gueridon-title mb-5 text-8xl font-semibold font-jost uppercase tablet:text-6xl phone:pr-5 phone:text-3xl">
        Coming Soon!
      </h3>

      <div className="project__gueridon-inner">
        <div
          className="
            project__gueridon-cover

            flex
            justify-center
            w-full
            rounded-2xl
            bg-white
            overflow-hidden
          "
        >
          <img
            src={cover}
            srcSet={`${cover} 640w, ${cover} 750w, ${cover} 828w, ${cover} 1080w, ${cover} 1200w, ${cover} 1920w, ${cover} 2048w, ${cover} 3840w`}
            loading="lazy"
            className="w-[50%] h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};
