'use client'

import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { FaTiktok } from 'react-icons/fa';

import { Container, Div1, Div2, Div3, Inner, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () => (
  <Container>
    <Inner>
      <Div1>
        <Link href='/'>
          <DiCssdeck size='2.6rem' />
          <Span>Portfolio</Span>
        </Link>
      </Div1>
      <Div2>
        <NavLink as={Link} href='#projects'>Projects</NavLink>
        <NavLink as={Link} href='#open-source'>Open Source</NavLink>
        <NavLink as={Link} href='#tech'>Technologies</NavLink>
        <NavLink as={Link} href='#about'>About</NavLink>
      </Div2>
      <Div3>
        <SocialIcons href='https://github.com/melka1' target='_blank' rel='noopener noreferrer' aria-label='GitHub'>
          <AiFillGithub />
        </SocialIcons>
        <SocialIcons href='https://www.linkedin.com/in/melka-tolessa-11599311b/' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'>
          <AiFillLinkedin />
        </SocialIcons>
        <SocialIcons href='https://www.tiktok.com/@melkatole1' target='_blank' rel='noopener noreferrer' aria-label='TikTok'>
          <FaTiktok />
        </SocialIcons>
      </Div3>
    </Inner>
  </Container>
);

export default Header;
