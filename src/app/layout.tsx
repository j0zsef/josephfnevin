import './globals.css';

import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import { ThemeProvider } from '@/context/ThemeProvider';
import { Container, Row } from 'react-bootstrap';
import React from 'react';

export const metadata: Metadata = {
  title: 'Joseph Nevin',
  description: "Joseph Nevin's personal website",
};

type RootLayoutProps = {
  children: React.ReactNode
};
const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Container className="root-container">
            <Row>
              <Navigation />
            </Row>
            <Row>
              {children}
            </Row>
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
