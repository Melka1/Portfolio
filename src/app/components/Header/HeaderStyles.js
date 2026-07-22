'use client'

import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

/* Sticky, translucent bar. Was a 5-column grid that collapsed into
   overlapping areas at small widths. */
export const Container = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  background: rgba(15, 22, 36, 0.72);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  max-width: 1300px;
  margin: 0 auto;
  padding: 16px 40px;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 12px 24px;
    gap: 16px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-wrap: wrap;
    justify-content: center;
    padding: 12px 16px;
    row-gap: 8px;
  }
`;

export const Span = styled.span`
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: -0.01em;
`;

export const Div1 = styled.div`
  display: flex;
  align-items: center;
  flex: 0 0 auto;

  a {
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${(props) => props.theme.colors.text};
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.8;
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    order: 1;
  }
`;

export const Div2 = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;

  @media ${(props) => props.theme.breakpoints.md} {
    gap: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    order: 3;
    flex-basis: 100%;
    justify-content: center;
    gap: 16px;
  }
`;

export const Div3 = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  flex: 0 0 auto;

  @media ${(props) => props.theme.breakpoints.sm} {
    order: 2;
  }
`;

// Navigation Links
export const NavLink = styled.a`
  position: relative;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1;
  padding: 6px 0;
  color: ${(props) => props.theme.colors.textMuted};
  transition: color 0.3s ease;
  cursor: pointer;

  /* Gradient underline that wipes in on hover. */
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    border-radius: 2px;
    background: ${(props) => props.theme.gradients.brand};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: #fff;
  }

  &:hover::after {
    transform: scaleX(1);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.5rem;
  }
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;
  line-height: 32px;
  color: ${(props) => props.theme.colors.textMuted};
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;


// Social Icons

export const SocialIcons = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: ${(props) => props.theme.colors.textMuted};
  transition: color 0.3s ease, background-color 0.3s ease, transform 0.3s ease;

  svg {
    width: 2.2rem;
    height: 2.2rem;
  }

  &:hover {
    color: #fff;
    background-color: ${(props) => props.theme.colors.surfaceRaised};
    transform: translateY(-2px);
    cursor: pointer;
  }
`
