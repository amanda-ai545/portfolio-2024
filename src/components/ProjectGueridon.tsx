import { FC } from 'react';

import { Chip } from '@components/common/Chip';
import { VideoPlayer } from '@components/common/VideoPlayer';

import cover from '@assets/images/project-gueridon/cover.jpg';
import image1 from '@assets/images/project-gueridon/image1.jpg';
import image2 from '@assets/images/project-gueridon/image2.jpg';
import image3 from '@assets/images/project-gueridon/image3.jpg';
import footage1 from '@assets/videos/project-gueridon-teaser.mp4';

export const ProjectGueridon: FC = () => {
  return (
    <div
      className={`
        project__gueridon
      `}
    >
      <h3 className="project__gueridon-title mb-5 text-8xl font-semibold font-jost uppercase tablet:text-6xl phone:text-4xl">
        Project Guèridon
      </h3>

      <div className="project__gueridon-inner">
        <div className="project__gueridon-skills flex flex-wrap gap-2 mb-5 font-light text-xs">
          <Chip>HTML/HTML5</Chip>
          <Chip>CSS/CSS3</Chip>
          <Chip>Bootstrap</Chip>
          <Chip>JavaScript</Chip>
          <Chip>jQuery</Chip>
          <Chip>Git</Chip>
          <Chip>Responsive Web Design</Chip>
        </div>

        <div
          className="
            project__gueridon-cover

            flex
            justify-center
            relative
            w-full
            h-[90vh]
            mb-32
            rounded-2xl
            bg-gray-100
            overflow-hidden
            pt-20

            tablet:h-[50vh]
            tablet:mb-20
            tablet:pt-10

            phone:h-[30vh]
            phone:pt-10
            phone:mb-20
          "
        >
          <img
            src={cover}
            srcSet={`${cover} 640w, ${cover} 750w, ${cover} 828w, ${cover} 1080w, ${cover} 1200w, ${cover} 1920w, ${cover} 2048w, ${cover} 3840w`}
            loading="lazy"
            className="absolute w-[80%] h-auto object-cover shadow-3xl"
          />
        </div>

        <h4 className="project__gueridon-subheadline mb-5 text-6xl font-semibold font-jost uppercase tablet:text-4xl phone:text-2xl">
          Platform
        </h4>

        <div className="project__gueridon-content">
          <p className="mb-10 font-light font-jost phone:text-sm">
            As a developer of Project Guèridon, I had the privilege of collaborating with a team of highly skilled
            students who have since become some of the finest developers in the field. As a Senior Frontend Developer of
            Project Guèridon, my role involves close collaboration with our UI/UX designer, Backend Developers, and,
            most significantly, fellow Frontend Developers. During this project, I had the chance to demonstrate my
            expertise in Frontend development to build the frontend side of our Web Portal, Mobile Application and our
            Smart Table.
          </p>

          <div className="grid grid-cols-2 gap-10 phone:grid-cols-1">
            <div
              className="
                flex
                justify-center
                items-end
                w-full
                h-96
                rounded-2xl
                overflow-hidden

                tablet:h-52
                phone:h-48
              "
            >
              <img
                src={image3}
                srcSet={`${image3} 640w, ${image3} 750w, ${image3} 828w, ${image3} 1080w, ${image3} 1200w, ${image3} 1920w, ${image3} 2048w, ${image3} 3840w`}
                loading="lazy"
                className="w-auto h-full object-cover"
              />
            </div>

            <div
              className="
                flex
                justify-center
                items-center
                w-full
                h-96
                rounded-2xl

                tablet:h-52
                phone:h-48
              "
            >
              <img
                src={image2}
                srcSet={`${image2} 640w, ${image2} 750w, ${image2} 828w, ${image2} 1080w, ${image2} 1200w, ${image2} 1920w, ${image2} 2048w, ${image2} 3840w`}
                loading="lazy"
                className="w-auto h-[100%] object-cover"
              />
            </div>

            <div
              className="
                flex
                justify-center
                items-center
                w-full
                h-96
                bg-black
                rounded-2xl
                overflow-hidden

                tablet:h-52
                phone:h-48
              "
            >
              <VideoPlayer footage={footage1} />
            </div>

            <div
              className="
                flex
                justify-center
                items-center
                w-full
                h-96
                rounded-2xl

                tablet:h-52
                phone:h-48
              "
            >
              <img
                src={image1}
                srcSet={`${image1} 640w, ${image1} 750w, ${image1} 828w, ${image1} 1080w, ${image1} 1200w, ${image1} 1920w, ${image1} 2048w, ${image1} 3840w`}
                loading="lazy"
                className="w-auto h-[90%] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
