'use client'

import React, { useRef } from 'react';

import { BlogCard, CardFooter, CardInfo, CarouselButton, CarouselControls, ExternalLinks, GridContainer, HeaderThree, Hr, ProjectsHeading, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => {
  const carouselRef = useRef(null);

  const moveCarousel = (direction) => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    carousel.scrollBy({ left: direction * carousel.clientWidth, behavior: 'smooth' });
  };

  return (
    <Section id='projects'>
      <SectionDivider/>
      <ProjectsHeading>
        <SectionTitle main>Projects</SectionTitle>
        <CarouselControls aria-label='Project carousel controls'>
          <CarouselButton type='button' onClick={() => moveCarousel(-1)} aria-label='Previous projects' aria-controls='projects-carousel'>
            <span aria-hidden='true'>←</span>
          </CarouselButton>
          <CarouselButton type='button' onClick={() => moveCarousel(1)} aria-label='Next projects' aria-controls='projects-carousel'>
            <span aria-hidden='true'>→</span>
          </CarouselButton>
        </CarouselControls>
      </ProjectsHeading>
      <GridContainer id='projects-carousel' ref={carouselRef} aria-label='Projects' aria-roledescription='carousel' tabIndex='0'>
        {projects.map(({id, title, description, tags, visit, image, source})=>(
        <BlogCard key={id}>
          {image && <Img src={image} alt={`Screenshot of the ${title} project`} loading='lazy'/>}
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr/>
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <CardFooter>
            <TitleContent stack>Stack</TitleContent>
            <TagList>
              {tags.map((tag, index)=>(
                <Tag key={index}>{tag}</Tag>
              ))}
            </TagList>
            <UtilityList>
              <ExternalLinks href={visit} left target='_blank' rel='noopener noreferrer'>View</ExternalLinks>
              {/* Client work without a public repo shows View on its own. */}
              {source && (
                <ExternalLinks href={source} target='_blank' rel='noopener noreferrer'>Source</ExternalLinks>
              )}
            </UtilityList>
          </CardFooter>
        </BlogCard>
        ))}
      </GridContainer>
    </Section>
  );
};

export default Projects;
