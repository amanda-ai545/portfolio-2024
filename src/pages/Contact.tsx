import { FC } from 'react';

import { Link } from '@/components/common/Link';
import { IconEmail } from '@components/common/IconEmail';
import { IconPhone } from '@components/common/IconPhone';
import { InnerWrapper } from '@components/common/InnerWrapper';
import { Title } from '@components/common/Title';
import { WaveTwo } from '@components/common/WaveTwo';
import { Wrapper } from '@components/common/Wrapper';

type Props = {
  className?: string;
};

export const Contact: FC<Props> = ({ className = `` }) => {
  return (
    <Wrapper
      className={`
        contact

        relative
        min-h-screen
        pt-10
        bg-gray-300
        scroll-mt-[3.8rem]

        phone:min-h-[80vh]

        ${className}
      `}
    >
      <Title className="text-center uppercase">Contact</Title>

      <InnerWrapper className="flex flex-wrap justify-center text-center py-5" id="contact">
        <p className="mb-10 phone:text-sm">
          Please don't hesitate to reach out to me via my mobile phone or email address. <br />
          You can initiate contact by clicking the button below. I'm eagerly looking forward to speaking with you.
        </p>

        <div className="flex justify-center gap-5 w-full flex-wrap">
          <Link href="tel:+639774807958" variant="filled" className="w-[160px] justify-center">
            Phone call <IconPhone color="#fff" className={`w-5`} />
          </Link>

          <Link href="mailto:amandadianeevallo@gmail.com" variant="outlined" className="w-[160px] justify-center">
            Send email <IconEmail color="#555" className={`w-5`} />
          </Link>
        </div>
      </InnerWrapper>

      <WaveTwo className="absolute top-0 w-full z-10 tablet:-top-[1px] phone:-top-[1px]" color="#fff" />
    </Wrapper>
  );
};
