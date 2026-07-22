import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Main } from './LayoutStyles'

export const Layout = ({ children }) => {
  return (
    <>
      {/* Header sits outside the width-capped Main so its sticky
          translucent bar spans the full viewport. */}
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}
