import MarkdownRenderer from '@/components/MarkdownRenderer';
import * as fs from 'node:fs';
import path from 'node:path';

export async function generateStaticParams() {
  const directoryPath = path.join(process.cwd(), 'src', 'content', 'projects');
  const fileNames = fs.readdirSync(directoryPath);
  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    return { slug };
  });
}

const Project = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'src', 'content', 'projects', `${slug}.md`);
  const content = fs.readFileSync(filePath, 'utf8');

  return (
    <main>
      <article>
        <MarkdownRenderer content={content} />
      </article>
    </main>
  );
};

export default Project;
