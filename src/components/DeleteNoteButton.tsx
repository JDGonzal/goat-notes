"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "./ui/button";
import { Loader2, Trash2 } from "lucide-react";
import { useTransition } from "react";
import { deleteNoteAction } from "@/actions/notes";

import { useToast } from "@/hooks/use-toast";
import { useRouter, useSearchParams } from "next/navigation";

type Props = {
  noteId: string;
  deleteNoteLocally: (noteId: string) => void;
};

function DeleteNoteButton({ noteId, deleteNoteLocally }: Props) {
  const router = useRouter(); // "next/navigation"
  const { toast } = useToast(); // "@/hooks/use-toast"
  const noteIdParam = useSearchParams().get("noteId") || ""; // "next/navigation"

  const [isPending, startTransition] = useTransition();

  function handleDeleteNote() {
    startTransition(async () => {
      const { errorMessage } = await deleteNoteAction(noteId);
      if (!errorMessage) {
        toast({
          title: "Note Deleted",
          description: "You have successfully deleted the note",
          variant: "success",
        });

        // Eliminar la nota localmente **`SidebarGroupContent.tsx`**
        deleteNoteLocally(noteId);

        // Si la nota eliminada es la que está seleccionada, redirigir a la página principal
        if (noteId === noteIdParam) router.replace("/");
      }
    });
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          className="absolute top-1/2 right-2 size-7 -translate-y-1/2 p-0 opacity-0 group-hover/item:opacity-100 [&_svg]:size-3"
          variant="ghost"
        >
          {" "}
          <Trash2 />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure you want to delete this note?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your note
            from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDeleteNote}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90 w-24"
          >
            {isPending ? <Loader2 className="animate-spin" /> : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default DeleteNoteButton;
