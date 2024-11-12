'use client';

import Link from 'next/link';

const Projects = () => {
  return (
    <main>
      <ul>
        <li>
          <Link href="/projects/1">Project 1</Link>
        </li>
        <li>
          <Link href="/projects/2">Project 2</Link>
        </li>
      </ul>
    </main>
  );
};

export default Projects;
