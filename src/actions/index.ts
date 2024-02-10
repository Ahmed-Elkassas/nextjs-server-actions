"use server";

import { db } from "@/db";
import { redirect } from "next/navigation";

export async function createSnippet(formData: FormData) {
  const snippetTitle = formData.get("snippetTitle") as string;
  const snippetCode = formData.get("snippetCode") as string;

  const snippet = await db.snippet.create({
    data: {
      snippetTitle,
      snippetCode
    }
  });

  redirect("/");
}

export async function editSnippet(id: number, code: string) {
  await db.snippet.update({
    where: { id },
    data: { snippetCode: code }
  });
  redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
  await db.snippet.delete({
    where: { id }
  });
  redirect("/");
}
