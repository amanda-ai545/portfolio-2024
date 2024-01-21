import { FC, ReactNode } from 'react';

import { Chip } from '@components/common/Chip';

type Props = {
  className?: string;
  logo?: ReactNode;
  title: string;
  subTitle?: string;
  description: string;
  chips?: string[];
};

export const Card: FC<Props> = ({ className = ``, logo, title, subTitle, description, chips }) => {
  return (
    <div
      className={`
        card

        p-5
        rounded-2xl
        border
        border-solid
        border-gray-200

        phone:p-3

        ${className}
      `}
    >
      {logo && (
        <div
          className={`
            card__content-logo
            flex
            h-16
            mb-3
          `}
        >
          {logo}
        </div>
      )}

      <div>
        <h3
          className={`
            card__content-title
            mb-1
            text-lg
            font-medium

            phone:text-md
          `}
        >
          {title} {subTitle && <span className="text-xs text-slate-500">{subTitle}</span>}
        </h3>

        <p
          className={`
            card__content-description
            mb-4
            text-sm
            font-light

            phone:text-xs
          `}
        >
          {description}
        </p>

        {chips && (
          <div
            className={`
              card__content-chips
              flex
              flex-wrap
              gap-2
            `}
          >
            {chips.map((chip) => (
              <Chip key={chip} className="text-xs">
                {chip}
              </Chip>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
