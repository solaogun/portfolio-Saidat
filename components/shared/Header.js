
import React, { useState } from 'react';
import { isAuthorized } from '@/utils/auth0'
import ReactResizeDetector from 'react-resize-detector';
import ActiveLink from 'components/shared/ActiveLink'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Dropdown,
  // NavLink,
  // UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  // NavbarText
} from 'reactstrap';
import Link from 'next/link'



const BsNavLink = (props) => {
  const { title, href, className = '' } = props
  return (
    <ActiveLink activeClassName="active" href={href}>
      <a className={`nav-link port-navbar-link ${className}`}>
        {title}
      </a>
    </ActiveLink>
  )
}

const BsNavBrand = () =>
  <Link href="/">
    <a className="navbar-brand port-navbar-brand" >Saidat Adebule</a>
  </Link>

const LoginLink = () => <a className="nav-link port-navbar-link" href="/api/v1/login">Login</a>
{/* <BsNavLink  href="/api/v1/login"  title="Login"/> */ }
const LogoutLink = () => <a className="nav-link port-navbar-link" href="/api/v1/logout">Logout</a>
{/* <BsNavLink  href="/api/v1/logout"  title="Logout"/> */ }



const AdminMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Dropdown
      className="port-navbar-link port-dropdown-menu"
      nav
      isOpen={isOpen}
      toggle={() => setIsOpen(!isOpen)}>

      <DropdownToggle className="port-dropdown-toggle" nav caret>
        Admin
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem>
          <BsNavLink
            className="port-dropdown-item"
            href="/portfolios/new"
            title="Create Portfolio"
          />
        </DropdownItem>
        <DropdownItem>
          <BsNavLink
            className="port-dropdown-item"
            href="/blogs/editors"
            title="Blog Editor"
          />
        </DropdownItem>
        <DropdownItem>
          <BsNavLink
            className="port-dropdown-item"
            href="/dashboard"
            title="Dashboard"
          />
        </DropdownItem>
      </DropdownMenu>

    </Dropdown>
  )
}


// export default 
const Header = ({ user, loading, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <ReactResizeDetector handleWidth>
      {({ width }) =>
        <Navbar
          className={`port-navbar port-default absolute ${className} ${width < 768 && isOpen ? 'is-open' : 'is-close'}`}
          dark
          expand="md">
          <BsNavBrand />
          {/* <NavbarBrand> 
                <Link href="/">
                 <a className="port-navbar-brand" >Saidat Adebule</a>
                </Link>
                </NavbarBrand> */}
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem className="port-navbar-item">
                {/* <Link href="/">
                    <a className="nav-link">
                        Home
                    </a>
                    </Link> or */}
                <BsNavLink href="/" title="Home" />
              </NavItem>
              <NavItem className="port-navbar-item">
                {/* <Link href="/about">
                    <a>
                        About
                    </a>
                    </Link> */}

                <BsNavLink href="/about" title="About" />
              </NavItem>
              <NavItem className="port-navbar-item">
                {/* <NavLink href="/components/">Portfolios</NavLink> */}

                <BsNavLink href="/portfolios" title="Portfolios" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavLink href="/blogs" title="Blogs" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavLink href="/cv" title="Cv" />
              </NavItem>
              {/* <NavItem className="port-navbar-item">
              <BsNavLink href="/secret" title="SECRET" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/secretssr" title="SECRETSSR" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/onlyadmin" title="ADMIN" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/onlyadminssr" title="ADMINSSR" />
            </NavItem> */}
            </Nav>
            <Nav navbar>
              {/* {!loading &&
                  <> */}
              {!user &&
                <NavItem className="port-navbar-item">
                  <LoginLink />
                </NavItem>}
              {user &&
                <>
                  {isAuthorized(user, 'admin') && < AdminMenu />}
                  <NavItem className="port-navbar-item">
                    <LogoutLink />
                  </NavItem>
                </>
              }
              {/* </>
                } */}
            </Nav>
            {/* <NavbarText>Simple Text</NavbarText> */}
          </Collapse>
        </Navbar>
      }

    </ReactResizeDetector>

  )

}

export default Header