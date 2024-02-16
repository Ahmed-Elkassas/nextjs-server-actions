"use client";
import * as actions from "@/actions";
import { useFormState } from "react-dom";

function SnippetCreatePage() {
  const [formState, action] = useFormState(actions.createSnippet, {
    message: ""
  });

  return (
    <div>
      <h3 className="font-bold mb-3 ml-0">Create a Sinppet</h3>
      <form action={action} className="w-3/5 mx-auto">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <label htmlFor="snippetTitle" className="w-12 capitalize">
              title
            </label>
            <input
              name="snippetTitle"
              className="border rounded p-2 w-full"
              id="snippetTitle"
            />
          </div>
          <div className="flex gap-4">
            <label htmlFor="snippetCode" className="w-12 capitalize">
              code
            </label>
            <textarea
              name="snippetCode"
              className="border rounded p-2 w-full text-black"
              id="snippetCode"
            />
          </div>
          {formState.message ? (
            <div className="rounded bg-red-400 border-red-600 p-3">
              {formState.message}
            </div>
          ) : null}
          <div className="flex justify-end items-center">
            <button className="rounded p-2 bg-blue-300 capitalize w-40">
              create
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SnippetCreatePage;
