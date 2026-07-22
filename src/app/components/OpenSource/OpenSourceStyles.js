'use client'

import styled from 'styled-components'

export const PackageList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  margin-top: 8px;
`

export const PackageCard = styled.article`
  display: grid;
  /* Meta rail beside the description on wide screens, stacked below it
     once there isn't room for two readable columns. */
  grid-template-columns: minmax(0, 1fr) 340px;
  gap: 40px;
  padding: 32px;
  background: ${(props) => props.theme.colors.surface};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radii.lg};
  box-shadow: ${(props) => props.theme.shadows.card};
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: ${(props) => props.theme.colors.borderStrong};
    box-shadow: ${(props) => props.theme.shadows.cardHover};
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 24px 20px;
  }
`

export const PackageMain = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`

export const PackageHeader = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
`

export const PackageIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  flex: none;
  border-radius: ${(props) => props.theme.radii.md};
  background: rgba(19, 173, 199, 0.12);
  border: 1px solid ${(props) => props.theme.colors.border};
  color: ${(props) => props.theme.colors.cyan};
`

export const PackageName = styled.h3`
  min-width: 0;
  font-size: clamp(1.9rem, 2.4vw, 2.4rem);
  font-weight: 600;
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: ${(props) => props.theme.colors.text};
  /* The package name is long and has no spaces to break on. */
  overflow-wrap: anywhere;
`

export const VersionBadge = styled.span`
  flex: none;
  font-size: 1.3rem;
  font-weight: 600;
  line-height: 1;
  padding: 6px 12px;
  border-radius: ${(props) => props.theme.radii.pill};
  color: #0f1624;
  background: ${(props) => props.theme.gradients.brand};
`

export const PackageDescription = styled.p`
  max-width: 60ch;
  margin-top: 20px;
  font-size: 1.6rem;
  line-height: 1.7;
  color: ${(props) => props.theme.colors.textMuted};
`

export const MetaLabel = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.textSubtle};
  margin-bottom: 10px;
`

export const PlatformList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

export const Platform = styled.li`
  font-size: 1.3rem;
  line-height: 1;
  padding: 6px 12px;
  border-radius: ${(props) => props.theme.radii.pill};
  color: ${(props) => props.theme.colors.textMuted};
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid ${(props) => props.theme.colors.border};
`

export const InstallRow = styled.div`
  display: flex;
  align-items: stretch;
  gap: 8px;
  margin-top: 24px;
`

export const InstallSnippet = styled.code`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 1.4rem;
  padding: 12px 16px;
  border-radius: ${(props) => props.theme.radii.sm};
  background: rgba(0, 0, 0, 0.28);
  border: 1px solid ${(props) => props.theme.colors.border};
  color: ${(props) => props.theme.colors.text};
  overflow-x: auto;
  white-space: nowrap;

  /* The snippet scrolls rather than wrapping, so hide its scrollbar. */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const CopyButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex: none;
  min-width: 104px;
  padding: 0 16px;
  font-size: 1.4rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: ${(props) => props.theme.radii.sm};
  color: ${(props) => props.theme.colors.text};
  background: transparent;
  border: 1px solid ${(props) => props.theme.colors.borderStrong};
  transition: 0.25s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }

  ${(props) => props.copied && `
    color: ${props.theme.colors.cyan};
    border-color: ${props.theme.colors.cyan};
  `}
`

export const StatList = styled.dl`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 24px;
`

export const Stat = styled.div`
  flex: 1 1 auto;
  min-width: 84px;
  padding: 12px 16px;
  border-radius: ${(props) => props.theme.radii.md};
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid ${(props) => props.theme.colors.border};
`

export const StatValue = styled.dd`
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.2;
  color: ${(props) => props.theme.colors.text};
`

export const StatLabel = styled.dt`
  font-size: 1.2rem;
  line-height: 1.4;
  color: ${(props) => props.theme.colors.textSubtle};
  margin-bottom: 4px;
`

export const PackageAside = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`

export const LinkRow = styled.div`
  display: flex;
  gap: 12px;
  margin-top: auto;
  padding-top: 24px;

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
  }
`

export const PackageLink = styled.a`
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 12px 16px;
  white-space: nowrap;
  border-radius: ${(props) => props.theme.radii.pill};
  transition: 0.25s ease;

  color: ${(props) => props.primary ? '#0F1624' : props.theme.colors.text};
  background: ${(props) => props.primary ? props.theme.gradients.brand : 'transparent'};
  border: 1px solid ${(props) => props.primary ? 'transparent' : props.theme.colors.borderStrong};

  &:hover {
    ${(props) => props.primary
      ? 'filter: brightness(1.12);'
      : 'background: rgba(255, 255, 255, 0.08);'}
    transform: translateY(-1px);
  }
`
