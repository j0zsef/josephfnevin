'use client';

import {
  Linkedin, Github, TwitterX, EnvelopeFill,
} from 'react-bootstrap-icons';

const Contact = () => {
  return (
    <main>
      <section>
        <h1>Contact</h1>
        <p>
          Please feel free to reach out to me on any of these platforms. Email being best.
        </p>
        <ul>
          <li>
            <a href="mailto:josephfnevin@gmail.com">
              <EnvelopeFill style={{ height: '1rem', width: '1rem' }} />
              <span style={{ marginLeft: '0.25rem' }}>Email</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/joseph-nevin-2a0b56113/">
              <Linkedin style={{ height: '1rem', width: '1rem' }} />
              <span style={{ marginLeft: '0.25rem' }}>LinkedIn</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/j0zsef">
              <Github style={{ height: '1rem', width: '1rem' }} />
              <span style={{ marginLeft: '0.25rem' }}>GitHub</span>
            </a>
          </li>
          <li>
            <a href="https://x.com/JozsefNevin">
              <TwitterX style={{ height: '1rem', width: '1rem' }} />
              <span style={{ marginLeft: '0.25rem' }}>Twitter</span>
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Contact;
