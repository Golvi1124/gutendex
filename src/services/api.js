const BASE_URL = "https://gutendex.com/books";

// Get all books
export const getBooks = async () => {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  return data.results;
};

// Search books by query (e.g., author or title)
export const searchBooks = async (query) => {
  const response = await fetch(`${BASE_URL}?search=${encodeURIComponent(query)}`);
  const data = await response.json();
  return data.results;
};

// Search by category for later
export const searchBooksByCategory = async (category) => {
  const response = await fetch(`${BASE_URL}?search=${encodeURIComponent(category)}`);
  const data = await response.json();
  return data.results;
};