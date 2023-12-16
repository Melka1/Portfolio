'use client'

import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
 return (
  <FooterWrapper>
    <LinkList>
      <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href='tel:+251931213930'>+2519-31213930</LinkItem>
      </LinkColumn>
      <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href='mailto:melkatole1@gmail.com'>melkatole1@gmail.com</LinkItem>
      </LinkColumn>
    </LinkList>
    <SocialIconsContainer>
      <CompanyContainer>
        <Slogan>Building one project a time</Slogan>
      </CompanyContainer>
      <SocialContainer>
        <SocialIcons href='https://github.com/melka1'>
          <AiFillGithub size='3rem'/>
        </SocialIcons>
        <SocialIcons href='https://www.linkedin.com/in/melka-tolessa-11599311b/'>
          <AiFillLinkedin size='3rem'/>
        </SocialIcons>
        <SocialIcons href='https://github.com/melak1'>
          <AiFillInstagram size='3rem'/>
        </SocialIcons>
      </SocialContainer>
    </SocialIconsContainer>
  </FooterWrapper>
 )
};

export default Footer;
