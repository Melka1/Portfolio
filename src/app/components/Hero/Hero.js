'use client'

import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { Eyebrow, LeftSection, Role } from './HeroStyles';

const Hero = (props) => (
  <Section nopadding>
    <LeftSection>
      <Eyebrow>Welcome</Eyebrow>
      <SectionTitle main>My name is Melka Tolessa</SectionTitle>
      <Role>Full stack developer — web &amp; mobile</Role>
      <SectionText>
        I build full stack products across web and mobile — React and Next.js
        interfaces, the Node, Firebase and Supabase services behind them, and
        cross-platform apps in Flutter and React Native. Recent work includes a
        real estate platform, a wedding site with QR-based guest check-in, and a
        dual-calendar Flutter package published on pub.dev.
      </SectionText>
      <Button onClick={()=>window.location = 'https://github.com/melka1'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
