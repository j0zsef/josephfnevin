const Project = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  return (
    <main>
      <h1>
        Project:
        {slug}
      </h1>
    </main>
  );
};

export default Project;
