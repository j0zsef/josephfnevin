'use client';

import {
  Linkedin, Github, TwitterX, EnvelopeFill,
} from 'react-bootstrap-icons';
import { ListGroup } from 'react-bootstrap';
import ListGroupItem from '@/components/ListGroupItem';

const Contact = () => {
  return (
    <main>
      <section>
        <h1>Contact</h1>
        <p>
          Please feel free to reach out to me on any of these platforms. Email being best.
        </p>
        <ListGroup>
          <ListGroupItem>
            <a href="mailto:josephfnevin@gmail.com">
              <EnvelopeFill />
              <span>Email</span>
            </a>
          </ListGroupItem>
          <ListGroupItem>
            <a href="https://www.linkedin.com/in/joseph-nevin-2a0b56113/">
              <Linkedin />
              <span>LinkedIn</span>
            </a>
          </ListGroupItem>
          <ListGroupItem>
            <a href="https://github.com/j0zsef">
              <Github />
              <span>GitHub</span>
            </a>
          </ListGroupItem>
          <ListGroupItem>
            <a href="https://x.com/JozsefNevin">
              <TwitterX />
              <span>Twitter</span>
            </a>
          </ListGroupItem>
        </ListGroup>
      </section>
    </main>
  );
};

export default Contact;
