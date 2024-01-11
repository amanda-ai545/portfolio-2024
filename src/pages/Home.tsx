import { FC } from 'react';

import profile from '@assets/images/profile.png';

import { BlobOne } from '@/components/common/BlobOne';
import { BlobThree } from '@/components/common/BlobThree';
import { BlobTwo } from '@/components/common/BlobTwo';
import { Button } from '@components/common/Button';
import { IconLightning } from '@components/common/IconLightning';
import { IconPaper } from '@components/common/IconPaper';
import { InnerWrapper } from '@components/common/InnerWrapper';
import { Link } from '@components/common/Link';
import { Wrapper } from '@components/common/Wrapper';

type Props = {
  className?: string;
};

export const Home: FC<Props> = ({ className = `` }) => {
  const handleDownload = () => {
    /// using Java Script method to get PDF file
    fetch('Evallo, Amanda Diane P.pdf').then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        const alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'Evallo, Amanda Diane P.pdf';
        alink.click();
      });
    });
  };

  return (
    <Wrapper
      id="home"
      className={`
        home

        relative
        bg-gray-200

        ${className}
      `}
    >
      <InnerWrapper className="relative z-10 flex flex-wrap justify-center h-full py-[7rem] px-20">
        <div className="home__profile flex items-center w-[30%] mr-[5%] phone:hidden">
          <img className="" src={profile} alt="Amanda Diane Evallo" />
        </div>

        <div className="home__details relative flex flex-wrap justify-between items-center w-auto">
          <div>
            <h1 className="mb-10 text-[4.3vw] phone:mb-5 phone:text-[10vw]">
              Hi, I am
              <span className="block mt-4 text-[4.3vw] font-semibold font-italiana uppercase leading-[110%] phone:text-[10vw] phone:mt-0">
                Amanda Diane
              </span>
              <span className="block mb-1 text-[9vw] font-semibold font-italiana uppercase leading-[110%] phone:text-[20vw]">
                Evallo
              </span>
              <span className="block text-[0.84vw] font-semibold uppercase phone:text-[2.5vw]">
                Frontend Web Developer / Vue Developer / React JS Developer
              </span>
            </h1>

            <div className="flex w-full">
              <Button
                variant="outlined"
                className="mr-4 text-sm !px-5 tablet:text-xs tablet:!px-2.5 tablet:py-1 tablet:mr-2 tablet:gap-1 phone:text-[3vw] phone:!px-2 phone:py-1 phone:mr-2 phone:gap-1"
                onClick={handleDownload}
              >
                Download CV <IconPaper color="#555" className={`w-5`} />
              </Button>

              <Link
                variant="filled"
                className="text-sm !px-5 tablet:text-xs tablet:!px-2.5 tablet:py-1 tablet:gap-1 phone:text-[3vw] phone:!px-2 phone:py-1 phone:gap-1"
                href="#projects"
              >
                Checkout my projects <IconLightning color="#fff" className={`w-5`} />
              </Link>
            </div>
          </div>
        </div>
      </InnerWrapper>

      <BlobOne className="absolute top-10 w-[30%] h-auto phone:top-16" color="#cbd5e1" />
      <BlobTwo className="absolute bottom-10 left-[50vw] w-[25vw] h-auto" color="#cbd5e1" />
      <BlobThree className="absolute top-12 right-0 w-[25vw] h-auto rotate-[-80deg]" color="#94a3b8" />
    </Wrapper>
  );
};
