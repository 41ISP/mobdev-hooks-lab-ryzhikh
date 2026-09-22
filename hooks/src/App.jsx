import { useState } from "react";
import ShelfScreen from "./pages/ShelfScreen/ShelfScreen";
import "./App.css";

function App() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Клара и Солнце",
      author: "Кадзуо Исигуро",
      read: true,
    },
  ]);

  const [showOnlyUnread, setShowOnlyUnread] = useState(false);

  function handleAdd(title) {
    const newBook = {
      id: Date.now(),
      title,
      author: "",
      read: false,
    };

    setBooks((prev) => [...prev, newBook]);
  }

  function handleToggleRead(id) {
    setBooks((prev) =>
      prev.map((book) =>
        book.id === id ? { ...book, read: !book.read } : book
      )
    );
  }

  function handleDelete(id) {
    setBooks((prev) => prev.filter((book) => book.id !== id));
  }

  return (
    <ShelfScreen
      books={books}
      showOnlyUnread={showOnlyUnread}
      onAdd={handleAdd}
      onToggleRead={handleToggleRead}
      onDelete={handleDelete}
      onToggleFilter={() => setShowOnlyUnread((prev) => !prev)}
    />
  );
}

export default App;