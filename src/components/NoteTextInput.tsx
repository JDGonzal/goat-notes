"use client";

type Props = {
  noteId: string;
  startingNoteText: string;
};

function NoteTextInput({ noteId, startingNoteText }: Props) {
  console.log("NoteTextInput", noteId, startingNoteText);
  return <div>NoteTextInput</div>;
}

export default NoteTextInput;
