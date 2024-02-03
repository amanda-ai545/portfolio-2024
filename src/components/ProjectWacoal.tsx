import { FC } from 'react';

import { Chip } from '@components/common/Chip';

import cover from '@assets/images/wacoal/cover.jpg';
import image1 from '@assets/images/wacoal/image1.jpg';
import image2 from '@assets/images/wacoal/image2.jpg';
import image3 from '@assets/images/wacoal/image3.jpg';
import image4 from '@assets/images/wacoal/image4.jpg';

export const ProjectWacoal: FC = () => {
  return (
    <div
      className={`
        project__wacoal-wing
      `}
    >
      <h3 className="project__wacoal-wing-title mb-5 text-8xl font-semibold font-jost uppercase tablet:text-6xl phone:pr-5 phone:text-3xl">
        Wacoal Wing
      </h3>

      <div className="project__wacoal-wing-inner">
        <div className="project__wacoal-wing-skills flex flex-wrap gap-2 mb-5 font-light text-xs">
          <Chip>HTML/HTML5</Chip>
          <Chip>CSS/CSS3</Chip>
          <Chip>jQuery</Chip>
          <Chip>Git</Chip>
          <Chip>Responsive Web Design</Chip>
        </div>

        <div
          className="
            project__wacoal-wing-cover

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

        <h4 className="project__wacoal-wing-subheadline flex items-center mb-5 text-6xl font-semibold font-jost uppercase tablet:text-4xl phone:text-2xl">
          Platform&nbsp;
          <a
            href="https://www.w-wing.jp/personal/"
            target="_blank"
            className="
              bg-cyan-700
              text-xs
              text-white
              px-4
              pt-1
              pb-[0.2rem]
              rounded-full
              transition-opacity
              duration-300

              hover:opacity-80

              phone:px-3
              phone:text-[0.6rem]
            "
          >
            Live Access&nbsp;&nbsp;→
          </a>
        </h4>

        <div className="project__wacoal-wing-content">
          <p className="mb-10 font-light font-jost phone:text-sm">
            As a developer responsible for one of Wacoal's websites, I ensured its pixel-perfect precision. The project
            involved meticulous attention to detail, ensuring every element aligned flawlessly to create a visually
            polished and professional appearance. I implemented best practices in web development to enhance user
            experience and optimize the site's performance.
          </p>

          <div className="grid grid-cols-2 gap-10 phone:grid-cols-1">
            <div
              className="
                flex
                justify-center
                w-full
                h-96
                rounded-2xl
                overflow-hidden
                shadow-xl

                tablet:h-52
                phone:h-48
              "
            >
              <img
                src={image1}
                srcSet={`${image1} 640w, ${image1} 750w, ${image1} 828w, ${image1} 1080w, ${image1} 1200w, ${image1} 1920w, ${image1} 2048w, ${image1} 3840w`}
                loading="lazy"
                className="w-auto h-full"
              />
            </div>

            <div
              className="
                flex
                justify-center
                w-full
                h-96
                rounded-2xl
                overflow-hidden
                shadow-xl

                tablet:h-52
                phone:h-48
              "
            >
              <img
                src={image2}
                srcSet={`${image2} 640w, ${image2} 750w, ${image2} 828w, ${image2} 1080w, ${image2} 1200w, ${image2} 1920w, ${image2} 2048w, ${image2} 3840w`}
                loading="lazy"
                className="w-auto h-full"
              />
            </div>

            <div
              className="
                flex
                justify-center
                w-full
                h-96
                rounded-2xl
                overflow-hidden
                shadow-xl

                tablet:h-52
                phone:h-48
              "
            >
              <img
                src={image3}
                srcSet={`${image3} 640w, ${image3} 750w, ${image3} 828w, ${image3} 1080w, ${image3} 1200w, ${image3} 1920w, ${image3} 2048w, ${image3} 3840w`}
                loading="lazy"
                className="w-auto h-full"
              />
            </div>

            <div
              className="
                flex
                justify-center
                w-full
                h-96
                rounded-2xl
                overflow-hidden
                shadow-xl

                tablet:h-52
                phone:h-48
              "
            >
              <img
                src={image4}
                srcSet={`${image4} 640w, ${image4} 750w, ${image4} 828w, ${image4} 1080w, ${image4} 1200w, ${image4} 1920w, ${image4} 2048w, ${image4} 3840w`}
                loading="lazy"
                className="w-auto h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
