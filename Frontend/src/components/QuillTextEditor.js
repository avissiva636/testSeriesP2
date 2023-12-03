import Quill from "quill";
import "quill/dist/quill.snow.css";

const QuillTextEditor = (props) => {
  const TOOLBAR_OPTIONS = [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["bold", "italic", "underline"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    [{ align: [] }],
    ["image", "blockquote", "code-block"],
    ["clean"],
  ];
  const edit = document.createElement("div");
  const editor = document.createElement("div");
  edit.append(editor);
  const q = new Quill(editor, {
    theme: "snow",
    modules: {
      toolbar: TOOLBAR_OPTIONS,
    },
  });
  q.setContents(props.description);
  const a = q.root.innerHTML;
  return <div dangerouslySetInnerHTML={{ __html: a }}></div>;
};

export default QuillTextEditor;
