"use server";

import { getUser } from "@/auth/server";
import { prisma } from "@/db/prisma";
import { handleError } from "@/lib/utils";

export async function updateNoteAction(noteId: string, text: string) {
  try {
    const user = await getUser(); // "@/auth/server"
    if (!user) throw new Error("You must be logged in to update a note");

    await prisma.note.update({ // "@/db/prisma"
      where: { id: noteId },
      data: { text },
    });

    return { errorMessage: null };
  } catch (error) {
    return handleError(error); // "@/lib/utils"
  }
}
