'use client'

import React from 'react';
import { DiDatabase, DiReact } from 'react-icons/di';
import { SiFlutter } from 'react-icons/si';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, TechTag, TechTagList } from './TechnologiesStyles';

const technologies = [
  {
    title: 'Front-End',
    Icon: DiReact,
    blurb: 'Building responsive interfaces and design systems.',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'SASS'],
  },
  {
    title: 'Back-End',
    Icon: DiDatabase,
    blurb: 'APIs, authentication and data modelling.',
    items: ['Node.js', 'Express', 'MongoDB', 'Firebase', 'Supabase', 'Prisma'],
  },
  {
    title: 'Mobile',
    Icon: SiFlutter,
    // Solid glyph, so it reads larger than the outlined marks at the
    // same nominal size.
    iconSize: '3.8rem',
    blurb: 'Cross-platform apps and published packages.',
    items: ['Flutter', 'Dart', 'React Native'],
  },
];

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with a wide range of technologies, from frontend and backend
      web development through to cross-platform mobile.
    </SectionText>
    <List>
      {technologies.map(({ title, Icon, iconSize, blurb, items }) => (
        <ListItem key={title}>
          <Icon size={iconSize || '4.4rem'}/>
          <ListContainer>
            <ListTitle>{title}</ListTitle>
            <ListParagraph>{blurb}</ListParagraph>
            <TechTagList>
              {items.map((item) => (
                <TechTag key={item}>{item}</TechTag>
              ))}
            </TechTagList>
          </ListContainer>
        </ListItem>
      ))}
    </List>
  </Section>
);

export default Technologies;
