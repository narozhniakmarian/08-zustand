//app>notes>[id]>page.tsx

import { noteFetchID } from "@/lib/api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import NoteDetailsClient from "./NoteDetails.client";
import { Metadata } from "next";

type IdProps = {
  params: { id: string };
};

export async function generateMetadata({ params }: IdProps) {
  const { id } = params;
  const note = await noteFetchID(id);

  return {
    title: `Note: ${note.title}`,
    description: note.content.slice(0, 30),
    openGraph: {
      title: `Note: ${note.title}`,
      description: note.content.slice(0, 100),
      url: `https://notehub.com/notes/${id}`,
      siteName: "NoteHub",
      images: [
        {
          url: "https://ac.goit.global/fullstack/react/og-meta.jpg",
          width: 1200,
          height: 630,
          alt: note.title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${note.title}`,
      description: note.content.slice(0, 100),
      images: ["https://ac.goit.global/fullstack/react/og-meta.jpg"],
    },
  };
}

async function NoteDetailis({ params }: IdProps) {
  const queryClient = new QueryClient();
  const { id } = params;

  await queryClient.prefetchQuery({
    queryKey: ["noteId", id],
    queryFn: () => noteFetchID(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NoteDetailsClient />
    </HydrationBoundary>
  );
}

export default NoteDetailis;
