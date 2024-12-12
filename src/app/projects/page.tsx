import Link from 'next/link';
import * as fs from 'node:fs';
import path from 'node:path';
import { ListGroup } from 'react-bootstrap';
import ListGroupItem from '@/components/ListGroupItem';

function humanize(str: string) {
  return str
    .replace(/[_-]+/g, ' ')
    .replace(/(?:^|\s)\w/g, (match) => match.toUpperCase())
    .replace(/\s+/g, ' ')
    .trim();
}

const Projects = () => {
  const directoryPath = path.join(process.cwd(), 'src', 'content', 'projects');
  const fileNames = fs.readdirSync(directoryPath);

  return (
    <main>
      <section>
        <h1>Projects</h1>
        <ListGroup>
          {fileNames.map((fileName) => {
            const slug = fileName.replace(/\.md$/, '');
            const filePath = path.join(directoryPath, fileName);
            const fileStats = fs.statSync(filePath);
            return (
              <ListGroupItem key={slug}>
                <span>
                  {`[${fileStats.birthtime.toLocaleDateString()}] `}
                </span>
                <Link href={`/projects/${slug}`}>
                  {humanize(slug)}
                </Link>
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </section>
    </main>
  );
};

export default Projects;
