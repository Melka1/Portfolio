'use client'

import styled from "styled-components"

/* Was width: calc(100vw - 96px) with box-sizing: content-box, which
   overflows once a scrollbar is present. */
export const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1300px;
  padding: 2rem 40px 48px;
  margin: 40px auto 0;

  @media ${props => props.theme.breakpoints.md} {
    padding: 2rem 32px 40px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    padding: 1rem 20px 40px;
  }
`

export const LinkItem = styled.a`
	display: inline-block;
	font-size: 1.7rem;
	line-height: 1.6;
	color: ${props => props.theme.colors.textMuted};
	margin-bottom: 8px;
	transition: .3s ease;

	&:hover {
		color: #fff;
		transform: translateX(4px);
	}

	/* Used to drop to 8px here, which was effectively unreadable. */
	@media ${props => props.theme.breakpoints.sm} {
		font-size: 1.5rem;
	}
`

export const SocialIconsContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 16px;
	width: 100%;
	padding-top: 20px;
	border-top: 1px solid ${props => props.theme.colors.border};

	@media ${props => props.theme.breakpoints.sm}{
		flex-direction: column;
		align-items: center;
		gap: 8px;
	}
`

export const CompanyContainer = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	margin-right: auto;

	@media ${props => props.theme.breakpoints.sm}{
		margin: 0;
		justify-content: center;
	}
`


export const Slogan = styled.p`
	color: ${props => props.theme.colors.textSubtle};
	letter-spacing: 0.02em;
	font-size: 1.6rem;
	line-height: 1.6;

	@media ${props => props.theme.breakpoints.sm}{
		font-size: 1.4rem;
		text-align: center;
	}
`

export const SocialContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 4px;

	@media ${props => props.theme.breakpoints.md}{
		justify-content: center;
		flex-wrap: wrap;
	}
`


export const LinkList = styled.ul`
	border-top: 1px solid ${props => props.theme.colors.border};
	display: grid;
	/* Was a hard 3 columns for 2 items, which left the pair hugging the
	   left edge with a phantom third column. */
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	gap: 32px;
	padding: 40px 0 28px;

	@media ${props => props.theme.breakpoints.sm} {
		grid-template-columns: 1fr;
		padding: 28px 0 20px;
		gap: 20px;
	}
`

export const LinkColumn = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 220px;
	width: 100%;
`
export const LinkTitle = styled.h4`
	font-weight: 600;
	font-size: 1.2rem;
	line-height: 1.6;
	letter-spacing: 0.14em;
	text-transform: uppercase;
	color: ${props => props.theme.colors.textSubtle};
	margin-bottom: 8px;
`
