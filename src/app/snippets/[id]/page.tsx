import { db } from "@/db";
import { notFound } from "next/navigation";

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

  return (
    <section>
      <div className="flex justify-between items-center">
        <h3>{snippet?.snippetTitle}</h3>
        <div className="flex gap-2 ">
          <button className="p-2 rounded border capitalize ">edit</button>
          <button className="p-2 rounded border capitalize ">delete</button>
        </div>
      </div>
      <p className="mt-4 border p-4">{snippet?.snippetCode}</p>
    </section>
  );
}

export default SnippetViewPage;
