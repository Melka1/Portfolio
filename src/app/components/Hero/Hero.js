'use client'

import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section>
    <LeftSection>
      <SectionTitle>
        Welcome, <br/><br/>
      </SectionTitle>
      <SectionTitle>My name is Melka Tolessa</SectionTitle>
      <SectionText>
        I am a fullstack web developer. I build reponsive and interactive websites or webpages using HTML, CSS, Javascipt. and also libraries like jQuery, React, Redux and so on. So, as a developer I will help you reach your goal of having to build a website or a webpage.
      </SectionText>
      <Button onClick={()=>window.location = 'https://github.com/melka1'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;