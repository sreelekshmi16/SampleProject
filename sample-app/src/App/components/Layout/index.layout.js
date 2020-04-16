import React, { Component, Fragment } from 'react';

import HeaderModule from './Header'
import FooterModule from './Footer'

const Layout = ({ children }) => {
  return (
    <Fragment>
      <div>
        <HeaderModule />
        {children}
        <FooterModule />
      </div>
    </Fragment>
  )
}

export default Layout