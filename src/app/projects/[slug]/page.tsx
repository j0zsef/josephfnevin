import ReactMarkdown from 'react-markdown';
import * as fs from 'node:fs';
import path from 'node:path';

const Project = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'src', 'content', 'projects', `${slug}.md`);
  const content = fs.readFileSync(filePath, 'utf8');

  return (
    <main>
      <article>
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>
    </main>
  );
};

export default Project;
