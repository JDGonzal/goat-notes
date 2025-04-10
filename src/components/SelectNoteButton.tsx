"use client";

import useNote from "@/hooks/useNote";
import { Note } from "@prisma/client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { SidebarMenuButton } from "./ui/sidebar";

type Props = {
  note: Note; // "@prisma/client"
};

function SelectNoteButton({ note }: Props) {
  const noteId = useSearchParams().get("noteId") || ""; // "next/navigation"

  const { noteText: selectedNoteText } = useNote(); // "@/hooks/useNote"

  const [localNoteText, setLocalNoteText] = useState(note.text);
  const [shouldUseGlobalNoteText, setShouldUseGlobalNoteText] = useState(false);
  useEffect(() => {
    if (noteId === note.id) {
      setShouldUseGlobalNoteText(true);
    } else {
      setShouldUseGlobalNoteText(false);
    }
  }, [noteId, note.id]);
  useEffect(() => {
    if (shouldUseGlobalNoteText) {
      setLocalNoteText(selectedNoteText);
    }
  }, [selectedNoteText, shouldUseGlobalNoteText]);

  const blankNoteText = "EMPTY NOTE";
  let noteText = localNoteText || blankNoteText;
  if (shouldUseGlobalNoteText) {
    noteText = selectedNoteText || blankNoteText;
  }

  return <SidebarMenuButton>SelectNoteButton</SidebarMenuButton>;
}

export default SelectNoteButton;
