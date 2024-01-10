import { FC } from 'react';

import { InnerWrapper } from '@components/common/InnerWrapper';
import { Wrapper } from '@components/common/Wrapper';

import profile from '@assets/images/profile.png';

type Props = {
  className?: string;
};

export const Home: FC<Props> = ({ className = `` }) => {
  // const handleDownload = () => {
  //   /// using Java Script method to get PDF file
  //   fetch('Evallo, Amanda Diane P.pdf').then((response) => {
  //     response.blob().then((blob) => {
  //       // Creating new object of PDF file
  //       const fileURL = window.URL.createObjectURL(blob);
  //       // Setting various property values
  //       const alink = document.createElement('a');
  //       alink.href = fileURL;
  //       alink.download = 'Evallo, Amanda Diane P.pdf';
  //       alink.click();
  //     });
  //   });
  // };

  return (
    <Wrapper
      id="home"
      className={`
        home

        relative
        h-screen
        min-h-screen
        bg-gray-200

        ${className}
      `}
    >
      <InnerWrapper className="relative z-10 flex flex-wrap justify-between h-full pt-[4.7rem] pb-5 px-36">
        <div className="home__profile w-[40%] flex items-end mb-16 ml-10">
          <img className="" src={profile} alt="Amanda Diane Evallo" />
        </div>

        {/* <div className="home__details relative w-[52%] flex flex-wrap items-center pl-16">
          <div>
            <h1 className="mb-10 text-5xl">
              Hi, I am
              <span className="block mt-4 text-[4.3vw] font-semibold font-italiana uppercase leading-[110%]">
                Amanda Diane
              </span>
              <span className="block mb-1 text-[9vw] font-semibold font-italiana uppercase leading-[110%]">Evallo</span>
              <span className="block text-[0.84vw] font-semibold uppercase">
                Frontend Web Developer / Vue Developer / React JS Developer
              </span>
            </h1>

            <div className="flex w-full">
              <Button variant="outlined" className="mr-4 text-sm !px-5" onClick={handleDownload}>
                Download CV <IconPaper color="#555" className={`w-5`} />
              </Button>

              <Link variant="filled" className="text-sm !px-5" href="#projects">
                Checkout my projects <IconLightning color="#fff" className={`w-5`} />
              </Link>
            </div>
          </div>
        </div> */}
      </InnerWrapper>

      {/* <BlobOne className="absolute top-10 left-1 w-[30vw] h-auto animate-bounce" color="#cbd5e1" />
      <BlobTwo className="absolute bottom-0 left-80 w-[25vw] h-auto" color="#cbd5e1" />
      <BlobThree className="absolute top-12 right-0 w-[25vw] h-auto rotate-[-80deg]" color="#94a3b8" /> */}
    </Wrapper>
  );
};
