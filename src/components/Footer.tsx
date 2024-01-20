import { FC } from 'react';

import { InnerWrapper } from '@components/common/InnerWrapper';
import { Wrapper } from '@components/common/Wrapper';

type Props = {
  className?: string;
};

export const Footer: FC<Props> = ({ className = `` }) => {
  return (
    <Wrapper
      className={`
        footer

        bg-gray-900
        text-white
        text-center
        text-xs

        ${className}
      `}
    >
      <InnerWrapper className="py-5">
        <p>© Amanda Diane Evallo 2024 - version 2.0</p>
      </InnerWrapper>
    </Wrapper>
  );
};
