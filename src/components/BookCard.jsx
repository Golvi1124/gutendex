import "../styles/BookCard.css";
import { useBookContext } from "../contexts/BookContext.jsx";

export default function BookCard({ book }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useBookContext();

  const favorite = isFavorite(book.id); //checking if book is favorited

  function onFavoriteClick(e) {
    e.preventDefault();
    if (favorite) removeFromFavorites(book.id);
    else addToFavorites(book);
  }

  // image link + fallback image if imageUrl is missing.
  const imageUrl =
    book.formats["image/jpeg"] || "https://via.placeholder.com/150";
  const authorNames = book.authors.map((a) => a.name).join(", ");

  return (
    <div className="book-card">
      <div className="book-poster">
        <img src={imageUrl} alt={book.title} />
        <div className="book-overlay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={onFavoriteClick}
          >
            ♥
          </button>
        </div>
      </div>
      <div className="book-info">
        <h3>{book.title}</h3>
        <h4>By {authorNames}</h4>
      </div>
    </div>
  );
}
