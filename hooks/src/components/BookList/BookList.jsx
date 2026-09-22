import BookItem from "../BookItem/BookItem";
import "./BookList.css";

function BookList({ books, onToggleRead, onDelete }) {
  if (books.length === 0) {
    return <div className="empty-note">На полке пока нет книг</div>;
  }

  return (
    <div className="book-list">
      {books.map((book) => (
        <BookItem key={book.id} book={book} onToggleRead={onToggleRead} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default BookList;