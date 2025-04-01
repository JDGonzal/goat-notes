"use server";

import { createClient } from "@/auth/server";
import { handleError } from "@/lib/utils";

export async function loginAction(email: string, password: string) {
  try {
    const { auth } = await createClient();
    const { error } = await auth.signInWithPassword({ email, password });
    if (error) throw error;

    return { errorMessage: null };
  } catch (error) {
    return handleError(error);
  }
}

export async function signUpAction(email: string, password: string) {
  try {
    const { auth } = await createClient();
    const { data, error } = await auth.signUp({ email, password });
    if (error) throw error;

    const userId = data.user?.id;
    // Acá estamos usando los usuarios de Supabase
    if (!userId) throw new Error("Error signing up");

    // Add user to database

    return { errorMessage: null };
  } catch (error) {
    return handleError(error);
  }
}

export async function logOutAction() {
  try {
    const { auth } = await createClient();
    const { error } = await auth.signOut();
    if (error) throw error;

    return { errorMessage: null };
  } catch (error) {
    return handleError(error);
  }
}
