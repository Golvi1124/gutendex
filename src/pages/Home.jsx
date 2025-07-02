import { useState, useEffect, useContext } from "react";
import BookCard from "../components/BookCard.jsx";
import { getBooks, searchBooks } from "../services/api.js";
import SearchContext from "../contexts/SearchContext.jsx";
import "../styles/Home.css";

export default function Home() {
  const { query } = useContext(SearchContext);
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const results = query.trim()
          ? await searchBooks(query)
          : await getBooks();
        setBooks(results);
        setError(null);
      } catch (err) {
        console.log(err);
        setError("Failed to load books...");
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [query]);
return (
    <div className="home">
      {error && <div className="error-message">{error}</div>}
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="books-grid">
          {books.map((book) => (
            <BookCard book={book} key={book.id} />
          ))}
        </div>
      )}
    </div>
  );
}