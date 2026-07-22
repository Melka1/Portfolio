'use client'

import styled from 'styled-components';

export const Img = styled.img`
  width: 100%;
  /* Fixed ratio so every card's image crops identically instead of
     stretching to whatever height the card happens to be. */
  aspect-ratio: 16 / 10;
  object-fit: cover;
  display: block;
  border-radius: ${(props) => props.theme.radii.lg} ${(props) => props.theme.radii.lg} 0 0;
  transition: transform 0.5s ease;
`

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  /* stretch, so cards in a row share a height */
  align-items: stretch;
  gap: 32px;
  padding: 24px 0 8px;
  width: 100%;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 16px 0 0;
  }
`

export const BlogCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  text-align: left;
  overflow: hidden;
  background: ${(props) => props.theme.colors.surface};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radii.lg};
  box-shadow: ${(props) => props.theme.shadows.card};
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: ${(props) => props.theme.colors.borderStrong};
    box-shadow: ${(props) => props.theme.shadows.cardHover};
  }

  &:hover ${Img} {
    transform: scale(1.04);
  }
`;

export const TitleContent = styled.div`
  width: 100%;
  padding: ${(props) => props.stack ? '0 24px' : '20px 24px 0'};
  font-size: ${(props) => props.stack ? '1.3rem' : 'inherit'};
  font-weight: ${(props) => props.stack ? '600' : 'inherit'};
  letter-spacing: ${(props) => props.stack ? '0.12em' : 'normal'};
  text-transform: ${(props) => props.stack ? 'uppercase' : 'none'};
  color: ${(props) => props.stack ? props.theme.colors.textSubtle : 'inherit'};
`;


export const HeaderThree = styled.h3`
  font-weight: 600;
  letter-spacing: -0.01em;
  line-height: 1.3;
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.title ? '2.2rem' : '1.8rem'};
`;

export const Hr = styled.hr`
  width: 40px;
  height: 3px;
  margin: 16px 0;
  border: 0;
  border-radius: ${(props) => props.theme.radii.pill};
  background: ${(props) => props.theme.gradients.brand};
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 24px 20px;
  color: ${(props) => props.theme.colors.textMuted};
  font-size: 1.6rem;
  line-height: 1.6;
  /* Was justified with word-break: break-all, which chopped words
     mid-syllable and left rivers of whitespace. */
  text-align: left;
  overflow-wrap: break-word;

  /* Cards in a row share a height, so one long description would stretch
     its whole row and leave the others half empty. Cap the teaser. */
  display: -webkit-box;
  -webkit-line-clamp: 9;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

/* Pushes the stack + links block to the bottom so cards with shorter
   descriptions still line their buttons up with their neighbours. */
export const CardFooter = styled.div`
  margin-top: auto;
  padding-bottom: 20px;
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 12px;
  padding: 0 24px;
  margin: 20px 0 0;
`;

export const ExternalLinks = styled.a`
  flex: 1;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 12px 16px;
  border-radius: ${(props) => props.theme.radii.pill};
  transition: 0.25s ease;

  /* Primary = View, secondary = Source. The old maroon (#6b3030) fought
     the site's cyan/purple palette. */
  color: ${(props) => props.left ? '#0F1624' : props.theme.colors.text};
  background: ${(props) => props.left ? props.theme.gradients.brand : 'transparent'};
  border: 1px solid ${(props) => props.left ? 'transparent' : props.theme.colors.borderStrong};

  &:hover {
    ${(props) => props.left
      ? 'filter: brightness(1.12);'
      : `background: rgba(255, 255, 255, 0.08);`}
    transform: translateY(-1px);
  }
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 12px 24px 0;
`
export const Tag = styled.li`
  color: ${(props) => props.theme.colors.textMuted};
  font-size: 1.3rem;
  line-height: 1;
  padding: 6px 12px;
  border-radius: ${(props) => props.theme.radii.pill};
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid ${(props) => props.theme.colors.border};
`
