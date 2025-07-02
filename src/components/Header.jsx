import { Link } from "react-router-dom";
import { useContext } from "react";
import SearchContext from "../contexts/SearchContext.jsx";
import "../styles/Header.css";

export default function Header() {
  const { query, setQuery } = useContext(SearchContext);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <header>
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/">Book App</Link>
        </div>
        <div className="navbar-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/favorites" className="nav-link">
            Favorites
          </Link>
          <Link to="/category" className="nav-link">
            Categories
          </Link>
        </div>
        <form onSubmit={handleSubmit} className="search-form">
          <input
            type="text"
            placeholder="Search for books..."
            className="search-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </nav>
    </header>
  );
}
