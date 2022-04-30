/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as React from 'react'

import TopHeader from '../../components/layoutComponents/topHeader/TopHeader'

// @ts-ignore
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function Layout({ children }) {
  return (
    <>
      <TopHeader />
      <main className='main'>{children}</main>
    </>
  )
}

export default Layout
