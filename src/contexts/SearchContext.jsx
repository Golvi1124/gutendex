import BookCard from "../components/BookCard.jsx";
import { useState, useEffect } from "react";
import { getBooks, searchBooks } from "../services/api.js";

export default function SearchContext() {
  const [searchQuery, setSearchQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const books = await getBooks();
        setBooks(books);
      } catch (err) {
        console.log(err); // if will be need to debug
        setError("Failed to load books...");
      } finally {
        setLoading(false);
      }
    };
    loadBooks();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault(); // prevents default action = doesn't automatically refresh page after input
    if (!searchQuery.trim()) return; // checking if no white spaces before continuing
    if (loading) return; // doesn't allow new search if previous one still loading

    setLoading(true); // show that loading searched items
    try {
      const searchResults = await searchBooks(searchQuery);
      setBooks(searchResults);
      setError(null);
    } catch (err) {
      console.log(err); // if will be need to debug
      setError("Failed to search books...");
    } finally {
      setLoading(false);
    }

    setSearchQuery(""); // set serach box to empty when done
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for books..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="books-grid">
          {books.map(
            (book) =>
              book.title.toLowerCase().startsWith(searchQuery) && (
                <BookCard book={book} key={book.id} />
              )
          )}
        </div>
      )}
    </div>
  );
}
