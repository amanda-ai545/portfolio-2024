import { FC } from 'react';

import { InnerWrapper } from '@components/common/InnerWrapper';
import { Tabs } from '@components/common/Tabs';
import { Title } from '@components/common/Title';
import { WaveOne } from '@components/common/WaveOne';
import { WaveTwo } from '@components/common/WaveTwo';
import { Wrapper } from '@components/common/Wrapper';
import { details } from '@data/details';

type Props = {
  className?: string;
};

export const AboutMe: FC<Props> = ({ className = `` }) => {
  return (
    <Wrapper
      className={`
        about__me

        relative
        min-h-screen
        pt-12
        bg-gray-100
        scroll-mt-[3.8rem]

        phone:pt-3

        ${className}
      `}
    >
      <Title className="text-center uppercase" id="aboutme">
        About me
      </Title>

      <InnerWrapper className="pt-5 pb-40">
        <Tabs tabs={details} />
      </InnerWrapper>

      <WaveOne className="absolute bottom-0 w-full z-10" color="#fff" />
      <WaveTwo className="absolute top-0 w-full z-10" color="#e5e7eb" />
    </Wrapper>
  );
};
