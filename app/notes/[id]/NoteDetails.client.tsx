//app>notes>[id]>NoteDetailis.client.tsx

"use client";

import { useParams, useRouter } from "next/navigation";
import css from "./NoteDetails.module.css";
import { useQuery } from "@tanstack/react-query";
import { noteFetchID } from "@/lib/api";
import Loader from "@/app/loading";
import ErrorMessage from "@/app/notes/filter/[...slug]/error";

export default function NoteDetailsClient() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const {
    data: note,
    isLoading,
    isError,
    isSuccess,
  } = useQuery({
    queryKey: ["note", id],
    queryFn: () => noteFetchID(id),
    refetchOnMount: false,
  });

  return (
    <>
      {isLoading && <Loader />}

      {isError && <ErrorMessage />}

      {isSuccess && note?.id && (
        <div className={css.container}>
          <div className={css.item}>
            <div className={css.header}>
              <button onClick={() => router.back()} className={css.backBtn}>
                Back
              </button>
              <h2>{note?.title}</h2>
            </div>
            <p className={css.content}>{note?.content}</p>
            <p className={css.date}>{note?.createdAt}</p>
          </div>
        </div>
      )}
    </>
  );
}
