'use client'

import styled from 'styled-components'

export const ImageContainer = styled.div`
  text-align: center;
  background-image: radial-gradient(50% 50% at 50% 50%, rgba(79, 108, 176, 0.25) 53.8%, rgba(79, 108, 176, 0) 100%);
  width: 100%;
  padding: 60px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${props => props.theme.breakpoints.lg} {
    background-image: none;
    padding: 0;
    margin-top: 40px;
  }
  @media ${props => props.theme.breakpoints.md} {
    background-image: none;
    padding: 0;
    margin-top: 16px;
  }
`

export const MainImage = styled.img`
  width: 100%;
`

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  /* auto-fit rather than a hard 3 columns, so the row reflows cleanly
     at tablet widths instead of squeezing. */
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
  margin: 2.4rem 0 0;
  width: 100%;

  @media ${props => props.theme.breakpoints.sm}{
    grid-template-columns: 1fr;
    gap: 16px;
    margin: 16px 0 0;
  }
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ListTitle = styled.h4`
  font-weight: 700;
  font-size: clamp(2rem, 2.2vw, 2.4rem);
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: #FFFFFF;
  margin-bottom: 8px;
`

export const ListParagraph = styled.p`
  font-size: 1.6rem;
  line-height: 1.6;
  color: ${props => props.theme.colors.textMuted};
`

/* Chips rather than a comma-separated sentence — the back-end card lists
   six items, which reads as a wall of text in prose. */
export const TechTagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 14px;
`

export const TechTag = styled.li`
  font-size: 1.3rem;
  line-height: 1;
  padding: 6px 12px;
  border-radius: ${props => props.theme.radii.pill};
  color: ${props => props.theme.colors.textMuted};
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid ${props => props.theme.colors.border};
`

/* Card treatment so these read as part of the same system as the
   project and accomplishment cards, instead of floating text. */
export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 28px 24px;
  background: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.radii.lg};
  transition: transform 0.3s ease, border-color 0.3s ease, background-color 0.3s ease;

  svg {
    color: ${props => props.theme.colors.cyan};
    flex: none;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: ${props => props.theme.colors.borderStrong};
    background: ${props => props.theme.colors.surfaceRaised};
  }

  @media ${props => props.theme.breakpoints.sm}{
    flex-direction: row;
    /* Content is now taller than the icon, so top-align rather than
       floating the icon in the vertical middle. */
    align-items: flex-start;
    padding: 20px;
  }
`

export const ListIcon = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  margin-bottom: 10px;
  
  @media ${props => props.theme.breakpoints.md}{
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    width: 32px;
    height: 32px;
    margin-bottom: 0px;
  }
`
