'use client'

import React from 'react';
import { FaFreeCodeCamp } from 'react-icons/fa'
import { SecondaryBtn, Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText, IconContainer } from './AcomplishmentsStyles';
import { Hr } from '../Projects/ProjectsStyles';

const data = [
  { link: 'https://www.freecodecamp.org/certification/melka1/responsive-web-design', title: 'Responsive Web Design'},
  { link: 'https://www.freecodecamp.org/certification/melka1/front-end-development-libraries', title: 'Front End Development Libraries' },
  { link: 'https://www.freecodecamp.org/certification/melka1/javascript-algorithms-and-data-structures', title: 'Javascript Algorithms and  Data Structure' },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Acomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <a key={index} href={card.link} target='_blank'>
          <Box>
            <IconContainer>
              <FaFreeCodeCamp size={38}/>
            </IconContainer>
            <BoxNum>FreeCodeCamp</BoxNum>
            <Hr/>
            <BoxText>{card.title}</BoxText>
          </Box>
        </a>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
