'use client'

import styled from "styled-components"

export const Boxes = styled.div`
  width: 100%;
  display: grid;
  /* Was a hard 4 columns for 3 items, leaving a dead cell. */
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
  margin: 8px 0 40px;

  /* The cards are wrapped in anchors; make those fill their grid cell so
     the whole card is the click target and heights stay even. */
  > a {
    display: block;
    height: 100%;
  }

  @media ${props => props.theme.breakpoints.sm}{
    grid-template-columns: 1fr;
    gap: 16px;
    margin: 8px 0 32px;
  }
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  /* Heights were fixed per breakpoint, which clipped the longer
     certificate titles. Let the content set the height instead. */
  padding: 28px 24px;
  background: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.radii.lg};
  transition: transform 0.3s ease, border-color 0.3s ease, background-color 0.3s ease;

  svg {
    color: ${props => props.theme.colors.cyan};
  }

  &:hover {
    border-color: ${props => props.theme.colors.borderStrong};
    background: ${props => props.theme.colors.surfaceRaised};
    transform: translateY(-4px);
  }

  @media ${props => props.theme.breakpoints.sm} {
    padding: 20px;
  }
`
export const BoxNum = styled.h5`
  font-weight: 600;
  font-size: 2.2rem;
  line-height: 1.3;
  letter-spacing: -0.01em;
  color: #FFFFFF;
  margin-top: 12px;
`

export const BoxText = styled.p`
  font-size: 1.6rem;
  line-height: 1.5;
  color: ${props => props.theme.colors.textMuted};
`

export const Join = styled.div`
  display: flex;
  max-width: 1040px;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;

  @media ${props => props.theme.breakpoints.md}{
    display: flex;
    justify-content: center;
    padding-bottom: 64px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 32px;
  }
`

export const JoinText = styled.h5`
  display: flex;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.5);

@media ${props => props.theme.breakpoints.md}{
  line-height: 32px;
  font-size: 20px;
};

@media ${props => props.theme.breakpoints.sm}{
  font-size: 16px;
  line-height: 24px;
  margin: 0 0 16px;
}
`

export const IconContainer = styled.div`
  display: flex;
`
