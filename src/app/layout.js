import { Space_Grotesk } from 'next/font/google'

import './globals.css'
import StyledComponentsRegistry from './lib/registry'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

export const metadata = {
  title: 'Melka Tolessa — Full Stack Developer',
  description:
    'Portfolio of Melka Tolessa, a full stack developer building web and mobile products with React, Next.js, Node and Flutter.',
}

export const viewport = {
  themeColor: '#0F1624',
  colorScheme: 'dark',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
