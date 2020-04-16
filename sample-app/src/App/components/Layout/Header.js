import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'
import { Link } from 'react-router-dom'

import Path from '../Layout/menu';

const HeaderModule = () => {
  const renderMenuItems = Path.map((menu) => (
    <NavItem key={menu.menuName}>
      <Link component={NavLink} to={menu.Url}>
        {menu.menuName}
      </Link>
    </NavItem>
  ))

  return (
    <div className="fixed-top">
      <Nav style={{ backgroundColor: 'lightblue' }}>{renderMenuItems}</Nav>
    </div>
  )
}

export default HeaderModule