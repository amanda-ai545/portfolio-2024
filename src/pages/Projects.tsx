import { FC, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { ProjectAdsTemplates } from '@components/ProjectAdsTemplates';
import { ProjectGueridon } from '@components/ProjectGueridon';
import { ProjectHotPepperBeauty } from '@components/ProjectHotPepperBeauty';
import { ProjectPreview } from '@components/ProjectPreview';
import { ProjectWacoal } from '@components/ProjectWacoal';
import { InnerWrapper } from '@components/common/InnerWrapper';
import { Modal } from '@components/common/Modal';
import { Title } from '@components/common/Title';
import { Wrapper } from '@components/common/Wrapper';

import thumbnail1 from '@assets/images/project-1-thumbnail.jpg';
import thumbnail2 from '@assets/images/project-2-thumbnail.jpg';
import thumbnail3 from '@assets/images/project-3-thumbnail.jpg';
import thumbnail4 from '@assets/images/project-4-thumbnail.jpg';

type Props = {
  className?: string;
};

export const Projects: FC<Props> = ({ className = `` }) => {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState('');
  const [selectedProjectName, setSelectedProjectName] = useState('');
  const navigate = useNavigate();

  const closeModal = () => {
    navigate(`/`);
    setIsModalOpen(false);
  };

  const handleClick = (projectName: string) => {
    navigate(`/?modal=${projectName}`);
    setIsModalOpen(!isModalOpen);
    setSelectedProject(projectName);
  };

  useEffect(() => {
    setSelectedProjectName(location.search.split('=')[1]);
  }, [selectedProject]);

  return (
    <Wrapper
      className={`
        projects

        relative
        min-h-screen
        -mt-[1rem]
        bg-white
        scroll-mt-[3.8rem]

        tablet:-mt-[1px]
        phone:-mt-[1px]

        ${className}
      `}
    >
      <Title className="text-center uppercase" id="projects">
        Projects
      </Title>

      <InnerWrapper className="grid grid-cols-2 gap-10 w-full py-5 tablet:grid-cols-2 phone:grid-cols-1">
        <ProjectPreview
          title="Ads Templates"
          subtitle="Brand content"
          imgSrc={thumbnail4}
          onClick={() => handleClick('ads-templates')}
        />

        <ProjectPreview
          title="Wacoal Wing"
          subtitle="Website"
          imgSrc={thumbnail3}
          onClick={() => handleClick('wacoal-wing')}
        />

        <ProjectPreview
          title="Hot Pepper Beauty Academy"
          subtitle="Website"
          imgSrc={thumbnail2}
          onClick={() => handleClick('hot-pepper-beauty-academy')}
        />

        <ProjectPreview
          title="Project Guèridon"
          subtitle="Website | Application | Smart table"
          imgSrc={thumbnail1}
          onClick={() => handleClick('project-gueridon')}
        />
      </InnerWrapper>

      <Modal isOpen={isModalOpen} onClose={closeModal} className="max-w-screen-xl">
        {selectedProjectName === 'ads-templates' && <ProjectAdsTemplates />}
        {selectedProjectName === 'wacoal-wing' && <ProjectWacoal />}
        {selectedProjectName === 'hot-pepper-beauty-academy' && <ProjectHotPepperBeauty />}
        {selectedProjectName === 'project-gueridon' && <ProjectGueridon />}
      </Modal>
    </Wrapper>
  );
};
