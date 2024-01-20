import { FC, ReactNode, useState } from 'react';

type Tabs = {
  label: string;
  content: ReactNode;
};

type Props = {
  tabs: Tabs[];
  className?: string;
};

export const Tabs: FC<Props> = ({ tabs, className = `` }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div
      className={`
        tabs

        ${className}
      `}
    >
      <div
        className={`
          tabs__content-labels
          flex
          gap-10
          mb-4

          phone:gap-5
          phone:justify-center
        `}
      >
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`
              tabs__content-label
              py-2
              px-4
              uppercase
              font-medium
              transition-opacity
              duration-300
              hover:opacity-100
              focus:outline-none

              ${index === activeTab ? 'opacity-100' : 'opacity-40'}

              phone:p-2
              phone:text-[4vw]
            `}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div
        className={`
          tabs__content
          font-light
        `}
      >
        {tabs[activeTab].content}
      </div>
    </div>
  );
};
