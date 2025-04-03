"use client";

import { User } from "@supabase/supabase-js";

type Props = { user: User | null} ; // "@supabase/supabase-js"

function AskAIButton({user}: Props) {
  console.log("AskAIButton", user?.email);
  return <div>AskAIButton</div>;
}

export default AskAIButton;
