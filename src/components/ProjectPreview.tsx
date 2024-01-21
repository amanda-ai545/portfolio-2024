import { FC } from 'react';

type Props = {
  title: string;
  subtitle?: string;
  imgSrc: string;
  className?: string;
  onClick?: () => void;
};

export const ProjectPreview: FC<Props> = ({ title, subtitle, imgSrc, className = ``, onClick }) => {
  return (
    <div
      className={`
        project__preview

        relative
        h-72
        rounded-2xl
        bg-gray-300
        transition
        duration-300
        cursor-pointer
        overflow-hidden

        hover:scale-[1.02]

        ${className}
      `}
      onClick={onClick}
    >
      <img
        src={imgSrc}
        srcSet={`${imgSrc} 640w, ${imgSrc} 750w, ${imgSrc} 828w, ${imgSrc} 1080w, ${imgSrc} 1200w, ${imgSrc} 1920w, ${imgSrc} 2048w, ${imgSrc} 3840w`}
        loading="lazy"
        className="project__preview-thumbnail absolute w-full h-full object-cover"
      />

      <div
        className="
          project__preview-details

          absolute
          grid
          content-end
          w-full
          h-full
          p-6
          bg-gradient-to-t
          from-black
          via-transparent
          to-transparent
          to-90%
          opacity-0
          transition
          duration-300

          hover:opacity-100
        "
      >
        <div className="w-full h-full text-white ">
          <p className="text-xs font-extralight uppercase">{subtitle}</p>
          <h3 className="font-light">{title}</h3>
        </div>
      </div>
    </div>
  );
};
