"use server";

import { db } from "@/db";
import { redirect } from "next/navigation";

export async function createSnippet(
  formState: { message: string },
  formData: FormData
) {
  try {
    const snippetTitle = formData.get("snippetTitle");
    const snippetCode = formData.get("snippetCode");

    if (typeof snippetTitle !== "string" || snippetTitle.length < 3) {
      return {
        message: "title must be longer!"
      };
    }
    if (typeof snippetCode !== "string" || snippetCode.length < 10) {
      return {
        message: "Code must be longer!"
      };
    }

    await db.snippet.create({
      data: {
        snippetTitle,
        snippetCode
      }
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        message: err.message
      };
    } else {
      return {
        message: "somthing went wrong..."
      };
    }
  }
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
