import { FC } from 'react';

import { Chip } from '@components/common/Chip';
import { VideoPlayer } from '@components/common/VideoPlayer';

import cover from '@assets/images/ads-templates/cover.jpg';
import footage1 from '@assets/videos/catch-video-template.mp4';
import footage3 from '@assets/videos/chery-animated-template.mp4';
import footage2 from '@assets/videos/toyota-video-template.mp4';

export const ProjectAdsTemplates: FC = () => {
  return (
    <div
      className={`
        project__ads-templates
      `}
    >
      <h3 className="project__ads-templates-title mb-5 text-8xl font-semibold font-jost uppercase tablet:text-6xl phone:pr-5 phone:text-3xl">
        Ads Templates
      </h3>

      <div className="project__ads-templates-inner">
        <div className="project__ads-templates-skills flex flex-wrap gap-2 mb-5 font-light text-xs">
          <Chip>React JS</Chip>
          <Chip>TypeScript</Chip>
          <Chip>Tailwind CSS</Chip>
          <Chip>GSAP</Chip>
          <Chip>Remotion JS</Chip>
          <Chip>Git</Chip>
          <Chip>Responsive Web Design</Chip>
        </div>

        <div
          className="
            project__ads-templates-cover

            flex
            justify-center
            items-end
            relative
            w-full
            h-[90vh]
            mb-32
            rounded-2xl
            bg-gray-100
            overflow-hidden

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
            className="absolute w-[66%] h-auto object-cover shadow-3xl phone:w-[70%]"
          />
        </div>

        <h4 className="project__ads-templates-subheadline flex items-center mb-5 text-6xl font-semibold font-jost uppercase tablet:text-4xl phone:text-2xl">
          Platform&nbsp;
          <a
            href="https://sesimi.com/"
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

        <div className="project__ads-templates-content">
          <div className="grid grid-cols-1 gap-10 phone:grid-cols-1">
            <div className="grid grid-cols-2 gap-10">
              <div
                className="
                  flex
                  justify-center
                  w-full
                  h-96
                  bg-black
                  rounded-2xl
                  overflow-hidden
                  shadow-xl

                  tablet:h-52
                  phone:h-48
                "
              >
                <VideoPlayer footage={footage1} />
              </div>
              <div>
                <p className="mb-5 font-light font-jost phone:text-sm">
                  The Catch HD and Social Video template includes elements such as a Background Image, Search Bar,
                  Product details, and Product images, among others. Users can easily customize these components to
                  align with their specific needs. This template also incorporates seamless transitions of the products,
                  enhancing the overall visual appeal and user engagement. Additionally, the typing backtrack is
                  synchronized with the length of the search bar text, contributing to a cohesive and dynamic user
                  experience.
                </p>

                <div className="flex flex-wrap gap-2 mb-5 font-light text-xs">
                  <Chip>React JS</Chip>
                  <Chip>TypeScript</Chip>
                  <Chip>Tailwind CSS</Chip>
                  <Chip>Remotion JS</Chip>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-10">
              <div
                className="
                  flex
                  justify-center
                  w-full
                  h-96
                  bg-black
                  rounded-2xl
                  overflow-hidden
                  shadow-xl

                  tablet:h-52
                  phone:h-48
                "
              >
                <VideoPlayer footage={footage2} />
              </div>

              <div>
                <p className="mb-5 font-light font-jost phone:text-sm">
                  The VDP Video template for Toyota incorporates various elements such as Background Images, Vehicles,
                  Footage, and more. Similar to other templates, users have the flexibility to modify these elements
                  from the Sesimi App according to their preferences or specific requirements.
                </p>

                <div className="flex flex-wrap gap-2 mb-5 font-light text-xs">
                  <Chip>React JS</Chip>
                  <Chip>TypeScript</Chip>
                  <Chip>Tailwind CSS</Chip>
                  <Chip>Remotion JS</Chip>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-10">
              <div
                className="
                  flex
                  justify-center
                  w-full
                  h-96
                  bg-black
                  rounded-2xl
                  overflow-hidden
                  shadow-xl

                  tablet:h-52
                  phone:h-48
                "
              >
                <VideoPlayer footage={footage3} />
              </div>

              <div>
                <p className="mb-5 font-light font-jost phone:text-sm">
                  The Animated template for Cherymotor includes diverse elements like Vehicles, Mountain Background
                  Image, Sky Background Image, and more. In this template, clients only need flexibility in customizing
                  dealership details.
                </p>

                <div className="flex flex-wrap gap-2 mb-5 font-light text-xs">
                  <Chip>React JS</Chip>
                  <Chip>TypeScript</Chip>
                  <Chip>Tailwind CSS</Chip>
                  <Chip>GSAP</Chip>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
