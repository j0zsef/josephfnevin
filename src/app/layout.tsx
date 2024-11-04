import './globals.css';

import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import { Container, Row } from 'react-bootstrap';

export const metadata: Metadata = {
  title: 'Joseph Nevin',
  description: "Joseph Nevin's personal website",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body>
        <Container className="root-container">
          <Row>
            <Navigation />
          </Row>
          <Row>
            {children}
          </Row>
        </Container>
      </body>
    </html>
  );
};

export default RootLayout;
