import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import ProjectItem from './ProjectItem';
import SectionTitle from './SectionTitle';
import 'swiper/css';
import 'swiper/css/navigation';
import projects from '../assets/data/projects';

const ProjectSectionStyle = styled.div`
  padding: 5rem 0;
  
  .projects__allItems {
    display: flex;
    gap: 3rem;
    margin-top: 5rem;
  }
  
  .swiper-container {
    padding-top: 8rem;
    max-width: 100%;
  }
  
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    height: 40px;
    width: 40px;
    background: var(--deep-dark);
    z-index: 10;
    right: 60px;
    left: auto;
    top: 0;
    transform: translateY(50%);
    color: var(--gray-1);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .swiper-button-next {
    right: 0;
  }
  
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 1.5rem;
  }
  
  
`;

export default function ProjectsSection() {
  return (
    <ProjectSectionStyle>
      <div className="container">
        <SectionTitle subheading="some of my recent works" heading="Projects" />
        <div className="projects__allItems">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            breakpoints={{
              480: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {projects.map((project, index) => {
              if (index >= 5) return null;
              return (
                <SwiperSlide key={project.id}>
                  <ProjectItem
                    title={project.name}
                    img={project.img}
                    desc={project.desc}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </ProjectSectionStyle>
  );
}