"use server";

import { getUser } from "@/auth/server";
import { prisma } from "@/db/prisma";
import { handleError } from "@/lib/utils";

export async function createNoteAction(noteId: string) {
  try {
    const user = await getUser(); // "@/auth/server"
    if (!user) throw new Error("You must be logged in to update a note");

    await prisma.note.create({
      // "@/db/prisma"
      data: {
        id: noteId,
        authorId: user.id,
        text: "", // Assuming text is an empty string initially
      },
    });

    return { errorMessage: null };
  } catch (error) {
    return handleError(error); // "@/lib/utils"
  }
}

export async function updateNoteAction(noteId: string, text: string) {
  try {
    const user = await getUser(); // "@/auth/server"
    if (!user) throw new Error("You must be logged in to update a note");

    await prisma.note.update({
      // "@/db/prisma"
      where: { id: noteId },
      data: { text },
    });

    return { errorMessage: null };
  } catch (error) {
    return handleError(error); // "@/lib/utils"
  }
}

export async function deleteNoteAction(noteId: string) {
  try {
    const user = await getUser();
    if (!user) throw new Error("You must be logged in to delete a note");

    await prisma.note.delete({
      where: { id: noteId, authorId: user.id },
    });

    return { errorMessage: null };
  } catch (error) {
    return handleError(error);
  }
}
