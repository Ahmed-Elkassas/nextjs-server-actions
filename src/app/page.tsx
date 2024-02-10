import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map((snippet) => {
    return (
      <li key={snippet.id} className="cursor-pointer border rounded p-2 ">
        <Link
          href={`/snippets/${snippet.id}`}
          className="flex justify-between items-center"
        >
          <span>{snippet.snippetTitle}</span>
          <span>view</span>
        </Link>
      </li>
    );
  });

  return (
    <section className="">
      <div>
        <h1>Snippets List</h1>
        <ul className="flex flex-col gap-2 mt-2">{renderedSnippets}</ul>
      </div>
    </section>
  );
}
