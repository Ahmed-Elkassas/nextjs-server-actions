"use client";

import { useState } from "react";
import type { Snippet } from "@prisma/client";
import Editor from "@monaco-editor/react";

import * as actions from "@/actions";

interface SnippetFormProps {
  snippet: Snippet;
}

function SnippetEditForm({ snippet }: SnippetFormProps) {
  const [code, setCode] = useState(snippet.snippetCode);

  const handleCodeSnippetChange = (value: string = "") => {
    setCode(value);
  };

  const updateSnippetCode = actions.editSnippet.bind(null, snippet.id, code);

  return (
    <>
      <Editor
        theme="vs-dark"
        height="40vh"
        language="javascript"
        defaultValue={snippet.snippetCode}
        onChange={handleCodeSnippetChange}
      />
      <form action={updateSnippetCode} className="mt-3">
        <button
          type="submit"
          className="px-2 py-1 rounded border  bg-blue-300 font-semibold capitalize w-24"
        >
          Save
        </button>
      </form>
    </>
  );
}

export default SnippetEditForm;
