// stores/counterStore.ts

import { NotePost } from "@/types/note";
import { create } from "zustand";

type NoteDraft = {
  draft: NotePost;
  setDraft: (note: NotePost) => void;
  clearDraft: () => void;
};

const initialDraft: NotePost = {
  title: "",
  content: "",
  tag: "Todo",
};

export const useNoteDraftStore = create<NoteDraft>()((set) => ({
  draft: initialDraft,
  setDraft: (note) => set(() => ({ draft: note })),
  clearDraft: () => set(() => ({ draft: initialDraft })),
}));
