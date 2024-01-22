import { Card } from '@components/common/Card';
import { Chip } from '@components/common/Chip';
import { LogoAccenture } from '@components/common/LogoAccenture';
import { LogoSesimi } from '@components/common/LogoSesimi';
import { LogoTranscosmos } from '@components/common/LogoTranscosmos';
import { LogoUcc } from '@components/common/LogoUcc';

export const skills = [
  'React JS',
  'Vue 3',
  'VueX',
  'Tailwind CSS',
  'Bootstrap',
  'Material UI',
  'Styled-components',
  'CSS/CSS3',
  'SASS/SCSS',
  'JavaScript',
  'TypeScript',
  'jQuery',
  'Axios',
  'Chart JS',
  'Remotion JS',
  'GSAP',
  'HTML/HTML5',
  'Git',
  'Responsive Web Design',
];

export const details = [
  {
    label: 'Experience',
    content: (
      <div
        className={`
          grid
          grid-cols-2
          gap-8
          w-full

          tablet:grid-cols-1
          phone:grid-cols-1
        `}
      >
        <Card
          logo={<LogoSesimi className="w-auto h-12 mt-4" color="#1e293b" />}
          title="Web / Frontend Designer"
          subTitle="(September 2022 - Present)"
          description="My role primarily focused on constructing adaptable, reusable components and versatile Advertisement Templates. These templates were designed for various mediums such as Magazines, Banners, Social Media, TV Commercials, and Animated ads. Our clients utilized these Advertisement Templates on the Sesimi platform, allowing them to customize specific elements like Headlines, Video Footage, Backgrounds, and more to suit their needs."
          chips={['React JS', 'Typescript', 'Tailwind CSS', 'GSAP', 'Remotion JS', 'Git', 'Responsive Web Design']}
        />

        <Card
          logo={<LogoAccenture className="w-auto h-20 -mt-[0.5rem]" />}
          title="Advanced App Engineering Analyst"
          subTitle="(April 2021 - July 2022)"
          description="I successfully developed a proof-of-concept SFTP Application and played a pivotal role in a separate project where we constructed an Availability Web Application for a heavy equipment company. I have also effectively crafted and executed multiple applications using Vue 3 while closely collaborating with Japanese Frontend Developers and Backend Developers. Additionally, I was tasked with another project that involved gathering, evaluating, and analyzing data, and subsequently, I crafted comprehensive reports and dashboards using Power BI and Power Automate."
          chips={[
            'React JS',
            'Vue 3',
            'Typescript',
            'Bootstrap',
            'Material UI',
            'Styled-components',
            'AWS Services',
            'Git',
            'Responsive Web Design',
            'Power BI',
            'Power Automate',
          ]}
        />

        <Card
          logo={<LogoTranscosmos className="w-auto h-12 mt-2" />}
          title="Frontend Developer"
          subTitle="(May 2019 - April 2021)"
          description="My role involved the transformation of wireframes or designs into functional code or websites, ensuring precise alignment with our clients provided designs down to the pixel. Additionally, I participated in a project where we developed a proprietary Form Component exclusively for Transcosmos developers."
          chips={['React JS', 'HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Chart JS', 'Responsive Web Design']}
        />
      </div>
    ),
  },
  {
    label: 'Education',
    content: (
      <div
        className={`
          grid
          grid-cols-2
          gap-8
          w-full

          tablet:grid-cols-1
          phone:grid-cols-1
        `}
      >
        <Card
          logo={<LogoUcc />}
          title="Bachelors of Science in Computer Science"
          subTitle="(S.Y. 2015 - S.Y. 2019)"
          description="I had the opportunity to collaborate with a team of talented students to create our thesis project, Project Guèridon. During this project, I had the chance to demonstrate my expertise in Frontend development and was honored with the 'Best UI/UX Designer' award. Each team member exhibited unwavering integrity throughout the project, which ultimately earned us the prestigious 'Best Thesis 2019' and 'Most Innovative Thesis' awards."
        />
      </div>
    ),
  },
  {
    label: 'Skills',
    content: (
      <div
        className={`
          flex
          flex-wrap
          gap-2
        `}
      >
        {skills.map((skill) => (
          <Chip key={skill} className="text-xs">
            {skill}
          </Chip>
        ))}
      </div>
    ),
  },
];
