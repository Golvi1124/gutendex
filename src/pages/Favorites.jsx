import "../styles/Favorites.css";
import useBookContext from "../contexts/useBookContext.js";
import BookCard from "../components/BookCard.jsx";

export default function Favorites() {
  const { favorites } = useBookContext();

  if (favorites.length > 0) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="books-grid">
          {favorites.map((book) => (
            <BookCard book={book} key={book.id} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="favorites-empty">
        <h2>No Favorite Books Yet</h2>
        <p>Start adding books to your favorites and they will appear here</p>
      </div>
    );
  }
}
