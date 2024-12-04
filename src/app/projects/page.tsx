'use client';

import Link from 'next/link';

const Projects = () => {
  return (
    <main>
      <section>
        <h1>Projects</h1>
        <ul>
          <li>
            <Link href="/projects/personal-site-react">Personal Site: React</Link>
          </li>
          <li>
            <Link href="/projects/personal-site-vue">Personal Site: Vue</Link>
          </li>
          <li>
            <Link href="/projects/simple-chatbot">Simple Chatbot</Link>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Projects;
