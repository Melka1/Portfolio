import React from 'react'
import RootLayout from '@/app/layout'
import Home from '@/app/pages'
import Theme from './styles/theme'

function Pages() {
  return (
    <Theme>
      <RootLayout>
        <Home/>
      </RootLayout>
    </Theme>
  )
}

export default Pages