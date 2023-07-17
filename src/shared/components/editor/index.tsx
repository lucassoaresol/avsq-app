import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

interface iEditorProps {
  content: string;
}

export const Editor = ({ content }: iEditorProps) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content,
    editorProps: { attributes: { class: "outline-none" } },
    onUpdate: (value) => {
      console.log(value.editor.getHTML());
    },
  });

  return <EditorContent editor={editor} />;
};
