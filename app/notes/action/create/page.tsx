import CreateNoteClient from "@/components/CreateNoteClient/CreateNoteClient";

export const metadata = {
  title: "Create Note",
  description: "Create a new note",
  openGraph: {
    title: "Create note",
    description: "Create a new note",
    url: "https://08-zustand-livid-omega.vercel.app/notes/action/create",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "Note Hub",
      },
    ],
  },
};

export default function CreateNotePage() {
  return <CreateNoteClient />;
}
