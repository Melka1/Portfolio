'use client'

import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section nopadding>
    <LeftSection>
      <SectionTitle>
        Welcome,
      </SectionTitle>
      <SectionTitle>My name is Melka Tolessa</SectionTitle>
      <SectionText>
      As a full stack web developer with experience, I am passionate about creating dynamic and user-friendly web applications. With expertise in both front-end and back-end development. My skills include proficiency in programming languages such as HTML, CSS, JavaScript, as well as experience with popular frameworks such as React, Redux, Node js, and Next js. With excellent problem-solving skills and the ability to work both independently and collaboratively, I am confident in my ability to contribute to any development team.
      </SectionText>
      <Button onClick={()=>window.location = 'https://github.com/melka1'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;