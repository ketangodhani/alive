interface Props {
  params: {
    slug: string;
  };
}

export default function ArticlePage({ params }: Props) {
  return (
    <main className="container-main py-10">
      <h1 className="editorial-title text-5xl">
        Article: {params.slug}
      </h1>
    </main>
  );
}