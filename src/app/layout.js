import './globals.css'

export const metadata = {
  title: 'My Portfolio',
  description: 'Created using Next JS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
