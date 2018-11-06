import React from 'react';
// import * as assets from '../../assets'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';



class Navigation extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src="https://s3.amazonaws.com/rugbyscout-two/rslogoonline.svg" width="100" alt="" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

          <div className="navbar-nav">
            <Navbar>
              <Nav>
                <LinkContainer to="/welcome/signup">
                  <NavItem>Signup</NavItem>
                </LinkContainer>
                <LinkContainer to="/welcome/login">
                  <NavItem>Login</NavItem>
                </LinkContainer>
                <LinkContainer to="/profiles">
                  <NavItem>Profile</NavItem>
                </LinkContainer>
                <LinkContainer to="/todo">
                  <NavItem>Dashboard</NavItem>
                </LinkContainer>
              </Nav>
            </Navbar>

          </div>

        </div>
      </nav >
    )
  }
}

export default Navigation;
