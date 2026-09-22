import "./BookItem.css";

function BookItem({ book, onToggleRead, onDelete }) {
  const colors = ["#4f6b52", "#6b4f5a", "#4f5f6b", "#6b604f"];
  const coverColor = colors[book.id % colors.length];

  return (
    <div className="book-row">
      <div className="book-cover" style={{ background: coverColor }}>
        {book.title.charAt(0)}
      </div>

      <div className="book-info">
        <p className={`book-title ${book.read ? "done" : ""}`}>{book.title}</p>
        <div className="book-author">{book.author}</div>
      </div>

      <div className={`read-check ${book.read ? "checked" : ""}`} onClick={() => onToggleRead(book.id)}>
        <span className="check-circle">✓</span>
        <span className="read-label">Прочитано</span>
      </div>

      <button className="delete-btn" onClick={() => onDelete(book.id)} title="Убрать с полки">
        ✕
      </button>
    </div>
  );
}

export default BookItem;