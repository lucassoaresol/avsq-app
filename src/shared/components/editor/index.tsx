/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export const Editor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: `<div className="max-w-[700px] mx-auto pt-16 prose prose-violet">
    <h1>Meu Notion</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
      consequuntur consectetur qui dolores unde? Dolor cumque error
      repudiandae excepturi sed eligendi voluptatum dignissimos dolore,
      quod tempora maxime saepe minima a!
    </p>
  </div>`,
    editorProps: { attributes: { class: "outline-none" } },
  });

  return (
    <>
      <EditorContent editor={editor} />
      {editor && (
        <BubbleMenu
          className="bg-white shadow-xl border border-zinc-600 shadow-black/20 rounded-lg overflow-hidden flex divide-x divide-zinc-600"
          editor={editor}
        >
          <button className="p-2 text-zinc-600 text-sm flex items-center gap-1.5 font-medium leading-none hover: text-zinc-50 hover: bg-zinc-600">
            Negrito
          </button>
        </BubbleMenu>
      )}
    </>
  );
};
