import { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "./BookForm.css";

function BookForm({ onAdd }) {
  const [title, setTitle] = useState("");

  function handleAdd() {
    const trimmedTitle = title.trim();

    if (trimmedTitle === "") {
      return;
    }

    onAdd(trimmedTitle);
    setTitle("");
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleAdd();
    }
  }

  return (
    <div className="add-book-row">
      <Input value={title} onChange={setTitle} onKeyDown={handleKeyDown} />
      <Button onClick={handleAdd}>Добавить на полку</Button>
    </div>
  );
}

export default BookForm;