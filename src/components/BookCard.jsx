import "../styles/BookCard.css";

export default function BookCard({ book }) {
  function onFavoriteClick() {
    alert("clicked");
  }

  return (
    <div className="book-card">
      <div className="book-cover">
        <img src={book.url} alt={book.title} />
        <div className="book-overlay">
          <button className="favorite-btn" onClick={onFavoriteClick}>❤️</button>
        </div>
      </div>
      <div className="book-info">
        <h3>{book.title}</h3>
        <h4>By {book.authors}</h4>
      </div>
    </div>
  );
}

/*
Book
{
  "id": <number of Project Gutenberg ID>,
  "title": <string>,
  "subjects": <array of strings>,
  "authors": <array of Persons>,
  "summaries": <array of strings>,
  "translators": <array of Persons>,
  "bookshelves": <array of strings>,
  "languages": <array of strings>,
  "copyright": <boolean or null>,
  "media_type": <string>,
  "formats": <Format>,
  "download_count": <number>
}
*/ 