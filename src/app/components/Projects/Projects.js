'use client'

import React from 'react';

import { BlogCard, CardFooter, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section id='projects'>
    <SectionDivider/>
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({id, title, description, tags, visit, image, source})=>(
        <BlogCard key={id}>
          <Img src={image} alt={`Screenshot of the ${title} project`} loading='lazy'/>
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

export default Projects;
