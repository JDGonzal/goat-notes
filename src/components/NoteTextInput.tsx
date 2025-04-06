"use client";

import { useSearchParams } from "next/navigation";
import { Textarea } from "./ui/textarea";
import { ChangeEvent, useEffect } from "react";
import { debounceTimeout } from "@/lib/constants";

type Props = {
  noteId: string;
  startingNoteText: string;
};

//Temporal, para subir al repositorio sin errores
/*🗑️  ->🗑️<-  ->🗑️<-  ->🗑️<-  ->🗑️<- ->🗑️<-  ->🗑️<-  ->🗑️<-  ->🗑️*/
/*🗑️*/function useNote() {
/*🗑️*/  return {
/*🗑️*/    noteText: "",
/*🗑️*/    setNoteText: (text: string) => {},
/*🗑️*/  };
/*🗑️*/}
/*🗑️*/function updateNoteAction(noteId: string, noteText: string) {
/*🗑️*/  console.log("Updating note ", noteId, noteText);
/*🗑️*/}
/*🗑️  ->🗑️<-  ->🗑️<-  ->🗑️<-  ->🗑️<- ->🗑️<-  ->🗑️<-  ->🗑️<-  ->🗑️*/ 

let updateTimeout: NodeJS.Timeout;

function NoteTextInput({ noteId, startingNoteText }: Props) {
  const noteIdParam = useSearchParams().get("noteIp") || "";
  const { noteText, setNoteText } = useNote();

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
      updateNoteAction(noteId, updatedNoteText);
    }, debounceTimeout);
  }

  return <Textarea
    value={noteText}
    onChange={handleUpdateNote}
    placeholder="Write your note here..."
    className="custom-scrollbar mb-4 h-full max-w-4xl resize-none border p-4 placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
  />;
}

export default NoteTextInput;
