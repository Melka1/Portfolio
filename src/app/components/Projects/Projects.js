'use client'

import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section id='projects'>
    <SectionDivider/>
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({id, title, description, tags, visit, image, source})=>(
        <BlogCard key={id}>
          <Img src={image}/>
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr/>
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <Hr/>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag, index)=>(
                <Tag key={index}>{tag}</Tag>
              ))}
            </TagList>
            <UtilityList>
              <ExternalLinks href={visit} left target='_black'>View</ExternalLinks>
              <ExternalLinks href={source} target='_black'>Source</ExternalLinks>
            </UtilityList>
          </div>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;