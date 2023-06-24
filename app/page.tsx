import React from 'react';
import Image from 'next/image';
import About from './components/about';
import {
  aboutData,
  educationData,
  skillsData,
  professionalExperienceData,
  graphicDesignData,
  personalData,
  portfolioData,
} from '../data/data';
import ProfessionalExperience from './components/professional-experience';
import Education from './components/education';
import PortfolioTemp from './components/portfolio-temp';
import GraphicDesign from './components/graphic-design';
import Personal from './components/personal';
import Resume from './components/resume-cv';
import Contact from './components/contact';
import NavTop from './components/NavTop';
import { contact } from '../data/contact-data';
// import Skills from './components/skills';

const BackDrop = () => {
  return (
    <div className='absolute'>
      <Image
        src='/images/dev-banjo-porch.png'
        alt='Max on porch coding and playing banjo'
        aria-label='Max on porch coding and playing banjo'
        width={0}
        height={0}
        sizes='100%'
        style={{
          zIndex: -1,
          width: '100%',
          height: 'auto',
          position: 'fixed',
          top: 0,
          left: 0,
          objectFit: 'cover',
        }}
      />
    </div>
  );
};

const Page: React.FC = () => {
  return (
    <div className='relative w-full h-auto'>
      <BackDrop />
      <div className='relative pl-0  md:pl-[200px] lg:pl-[300px]'>
        <div className='md:hidden'>
          <NavTop data={contact} />
        </div>
        <div className='px-4 lg:px-8 bg-white/[.850] relative'>
          <About data={aboutData} />

          {/* <Skills data={skillsData} /> */}
          <Resume />
          <ProfessionalExperience data={professionalExperienceData} />
          <Education data={educationData} />
          <PortfolioTemp data={portfolioData} />
          <GraphicDesign data={graphicDesignData} />
          <Personal data={personalData} />
          <Contact />
          <div className='w-full pt-12 sm:pt-18 md:pt-20 pb-2'>
            <div className='flex justify-center items-end'>
              <p className='text-teal font-light opacity-50'>
                maxskewes@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
