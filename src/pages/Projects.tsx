import { FC, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { ProjectAdsTemplates } from '@components/ProjectAdsTemplates';
import { ProjectComingSoon } from '@components/ProjectComingSoon';
import { ProjectGueridon } from '@components/ProjectGueridon';
import { ProjectHotPepperBeauty } from '@components/ProjectHotPepperBeauty';
import { ProjectPreview } from '@components/ProjectPreview';
import { ProjectWacoal } from '@components/ProjectWacoal';
import { Button } from '@components/common/Button';
import { InnerWrapper } from '@components/common/InnerWrapper';
import { Modal } from '@components/common/Modal';
import { Title } from '@components/common/Title';
import { Wrapper } from '@components/common/Wrapper';
import { projects } from '@data/projects';

type Props = {
  className?: string;
};

export const Projects: FC<Props> = ({ className = `` }) => {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState('');
  const [selectedProjectName, setSelectedProjectName] = useState('');
  const [visibleItems, setVisibleItems] = useState(4);
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

  const handleViewMore = () => {
    setVisibleItems((prev) => prev + 4);
  };

  useEffect(() => {
    setSelectedProjectName(location.search.split('=')[1]);
  }, [location.search, selectedProject]);

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
        {projects.slice(0, visibleItems).map((project, index) => (
          <ProjectPreview
            key={index}
            title={project.title}
            subtitle={project.subtitle}
            imgSrc={project.imgSrc}
            onClick={() => handleClick(project.title.toLowerCase().replace(/\s+/g, '-'))}
          />
        ))}
      </InnerWrapper>

      {visibleItems < projects.length && (
        <InnerWrapper className="grid justify-center py-16">
          <Button
            variant="filled"
            className="mr-4 text-sm !px-10 tablet:text-xs tablet:!px-2.5 tablet:py-1 tablet:mr-2 tablet:gap-1 phone:text-[3vw] phone:!px-2 phone:py-1 phone:mr-2 phone:gap-1"
            onClick={handleViewMore}
          >
            View more
          </Button>
        </InnerWrapper>
      )}

      <Modal isOpen={isModalOpen} onClose={closeModal} className="max-w-screen-xl">
        {selectedProjectName === 'ads-templates' && <ProjectAdsTemplates />}
        {selectedProjectName === 'dog-hotel-&-spa' && <ProjectComingSoon />}
        {selectedProjectName === 'okimeguri' && <ProjectComingSoon />}
        {selectedProjectName === 'iriomote-admin' && <ProjectComingSoon />}
        {selectedProjectName === 'smart-front-mujinn' && <ProjectComingSoon />}
        {selectedProjectName === 'family-docs-box' && <ProjectComingSoon />}
        {selectedProjectName === 'wacoal-wing' && <ProjectWacoal />}
        {selectedProjectName === 'hot-pepper-beauty-academy' && <ProjectHotPepperBeauty />}
        {selectedProjectName === 'project-gueridon' && <ProjectGueridon />}
      </Modal>
    </Wrapper>
  );
};
