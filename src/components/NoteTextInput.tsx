"use client";

import { useSearchParams } from "next/navigation";
import { Textarea } from "./ui/textarea";
import { ChangeEvent, useEffect } from "react";
import { debounceTimeout } from "@/lib/constants";
import useNote from "@/hooks/useNote";
import { updateNoteAction } from "@/actions/notes";

type Props = {
  noteId: string;
  startingNoteText: string;
};

let updateTimeout: NodeJS.Timeout;

function NoteTextInput({ noteId, startingNoteText }: Props) {
  const noteIdParam = useSearchParams().get("noteId") || "";
  const { noteText, setNoteText } = useNote(); //"@/hooks/useNote"

  useEffect(() => {
    if (noteIdParam === noteId) {
      setNoteText(startingNoteText);
    }
  }, [startingNoteText, noteIdParam, noteId, setNoteText]);
  
  function handleUpdateNote(e: ChangeEvent<HTMLTextAreaElement>) {
    const updatedNoteText = e.target.value;
    setNoteText(updatedNoteText);

    clearTimeout(updateTimeout);
    updateTimeout = setTimeout(() => {
      updateNoteAction(noteId, updatedNoteText); // "@/actions/notes"
    }, debounceTimeout); // "@/lib/constants"
  }

  return <Textarea
    value={noteText}
    onChange={handleUpdateNote}
    placeholder="Write your note here..."
    className="custom-scrollbar mb-4 h-full max-w-4xl resize-none border p-4 placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
  />;
}

export default NoteTextInput;
