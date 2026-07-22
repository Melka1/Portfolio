'use client'

import styled from 'styled-components';

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  @media ${(props) => props.theme.breakpoints.lg} {
    align-items: center;
    text-align: center;

    /* Headings centre well; an 11-line paragraph does not — ragged both
       edges makes it hard to find the next line. */
    p {
      text-align: left;
    }
  }
`;

/* Small label above the headline. The hero used to stack two same-size
   headings, which gave it no hierarchy. */
export const Eyebrow = styled.p`
  display: inline-flex;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.cyan};
  padding: 8px 16px;
  margin-bottom: 20px;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radii.pill};
  background: rgba(19, 173, 199, 0.08);
`;

export const Role = styled.h3`
  font-size: clamp(1.8rem, 2.6vw, 2.6rem);
  font-weight: 500;
  line-height: 1.3;
  margin-bottom: 20px;
  background: ${(props) => props.theme.gradients.brand};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-bottom: 0.1em;
`;
