import { FC } from 'react';
import ReactPlayer from 'react-player';

type Props = {
  footage?: string;
};

export const VideoPlayer: FC<Props> = ({ footage }) => {
  return <ReactPlayer url={footage} controls width="100%" height="100%" volume={0.5} />;
};
