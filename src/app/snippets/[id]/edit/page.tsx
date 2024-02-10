import SnippetEditForm from "@/components/snippetEditForm";
import { db } from "@/db";
import { notFound } from "next/navigation";

interface SnippetEditProps {
  params: {
    id: string;
  };
}

async function SnippetEditPage(props: SnippetEditProps) {
  const id = parseInt(props.params.id);

  const snippet = await db.snippet.findFirst({
    where: { id }
  });

  if (!snippet) {
    return notFound();
  }

  return <SnippetEditForm snippet={snippet} />;
}

export default SnippetEditPage;
