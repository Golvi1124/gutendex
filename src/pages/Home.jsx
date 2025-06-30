import BookCard from "../components/BookCard.jsx";
import { useState } from "react";
import "../styles/Home.css";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const books = [
    { id: 1, title: "bookey king", authors: "kinkeyyy king" },
    { id: 2, title: "ddras rfga", authors: "agdrf ferd" },
    { id: 3, title: "3 stars", authors: "cosmoss explorer" },
  ];

  const handleSearch = (e) => {
    e.preventDefault(); // prevents default action = doesn't automatically refresh page after input
    alert(searchQuery);
    setSearchQuery("");
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

      <div className="books-grid">
        {books.map(
          (book) =>
            book.title.toLowerCase().startsWith(searchQuery) && (
              <BookCard book={book} key={book.id} />
            )
        )}
      </div>
    </div>
  );
}
