import { db } from "@/db";
import Link from "next/link";
import { notFound } from "next/navigation";

import * as actions from "@/actions";

interface SnippetViewProps {
  params: {
    id: string;
  };
}

async function SnippetViewPage(props: SnippetViewProps) {
  await new Promise((res) => setTimeout(res, 2000));
  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(props.params.id) }
  });

  if (!snippet) {
    return notFound();
  }

  const deleteSnippet = actions.deleteSnippet.bind(null, snippet.id);

  return (
    <section>
      <div className="flex justify-between items-center">
        <h3>{snippet?.snippetTitle}</h3>
        <div className="flex gap-2 ">
          <Link
            href={`/snippets/${snippet.id}/edit`}
            className="p-2 rounded border capitalize "
          >
            edit
          </Link>
          <form action={deleteSnippet}>
            <button className="p-2 rounded border capitalize ">delete</button>
          </form>
        </div>
      </div>
      <p className="mt-4 border p-4">{snippet?.snippetCode}</p>
    </section>
  );
}

export default SnippetViewPage;
