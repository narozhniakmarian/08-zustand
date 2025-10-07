//app>notes>filter/[...slug]/page.tsx

import noteFetch from "@/lib/api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import NotesClient from "./Notes.client";

interface NotesProps {
  params: { slug: string[] };
}
export async function generateMetadata({ params }: NotesProps) {
  const { slug } = await params;
  const filterName = slug.join(" / ");

  return {
    title: `Filter: ${filterName}`,
    description: `Переглянь нотатки за фільтром: ${filterName}`,
    openGraph: {
      title: `Filter: ${filterName}`,
      description: `Переглянь нотатки за фільтром: ${filterName}`,
      url: `https://notehub.com/notes/filter/${slug.join("/")}`,
      images: [
        {
          url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
          width: 1200,
          height: 630,
          alt: `Фільтр: ${filterName}`,
        },
      ],
    },
  };
}

async function Notes({ params }: NotesProps) {
  const { slug } = await params;
  const queryClient = new QueryClient();

  const tag = slug[0] === "All" ? undefined : slug[0];

  const search = "";
  const page = 1;

  await queryClient.prefetchQuery({
    queryKey: ["noteHubKey", search, page, tag],
    queryFn: () => noteFetch(search, page, undefined, tag),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient tag={tag} />
    </HydrationBoundary>
  );
}

export default Notes;
