'use client';

import { Navbar, Container, Nav } from 'react-bootstrap';
import { ThemeContext } from '@/context/ThemeProvider';
import { useContext } from 'react';
import Theme from './Theme';

const Navigation = () => {
  const themeCtx = useContext(ThemeContext);

  return (
    <Navbar bg={themeCtx?.theme} data-bs-theme={themeCtx?.theme}>
      <Container>
        <Navbar.Brand href="/">Joe Nevin</Navbar.Brand>
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
          <Theme />
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
