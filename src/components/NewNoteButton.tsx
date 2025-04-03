"use client";

import { User } from "@supabase/supabase-js";

type Props = { user: User | null} ; // "@supabase/supabase-js"

function NewNoteButton({user}: Props) {
  console.log("NewNoteButton", user?.email);
  return <div>NewNoteButton</div>;
}

export default NewNoteButton;
