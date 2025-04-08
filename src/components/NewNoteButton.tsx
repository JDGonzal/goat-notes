"use client";

import { useState } from "react";
import { User } from "@supabase/supabase-js";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { useToast } from "@/hooks/use-toast";
import { debounceTimeout } from "@/lib/constants";
import { createNoteAction } from "@/actions/notes";

type Props = { user: User | null }; // "@supabase/supabase-js"

function NewNoteButton({ user }: Props) {
  const router = useRouter(); // "next/navigation"
  const { toast } = useToast(); // "@/hooks/useToast"
  const [loading, setLoading] = useState(false);

  async function handleClickNewNoteButton() {
    if (!user) {
      router.push("/login");
    } else {
      setLoading(true);
      const savingTotast = toast({
        title: "Saving Current Note",
        description: "Saving your current note before creating a new one.",
        variant: "default",
      });

      await new Promise((resolve) =>
        setTimeout(resolve, debounceTimeout + 2000),
      ); // Simulate saving time

      const uuid = uuidv4();
      await createNoteAction(uuid);
      router.push(`/?noteId=${uuid}`);

      savingTotast.dismiss();
      toast({
        title: "New Note created",
        description: "Your note has been created successfully.",
        variant: "success",
      });

      setLoading(false);
    }
  }

  return (
    <Button
      onClick={handleClickNewNoteButton}
      variant="secondary"
      className="w-24"
      disabled={loading}
    >
      {loading ? <Loader2 className="animate-spin" /> : "New Note"}
    </Button>
  );
}

export default NewNoteButton;
