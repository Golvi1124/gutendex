import "../styles/BookCard.css";

export default function BookCard({ book }) {
  function onFavoriteClick() {
    alert("clicked");
  }

  // image link + fallback image if imageUrl is missing.
  const imageUrl =
    book.formats["image/jpeg"] || "https://via.placeholder.com/150";
  const authorNames = book.authors.map((a) => a.name).join(", ");

  return (
    <div className="book-card">
      <div className="book-cover">
        <img src={imageUrl} alt={book.title} />
        <div className="book-overlay">
          <button className="favorite-btn" onClick={onFavoriteClick}>
            ❤️
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
