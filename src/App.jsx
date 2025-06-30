import "./styles/App.css";
import Home from "./pages/Home.jsx";
import Favorites from "./pages/Favorites.jsx";
import { Routes, Route } from "react-router-dom";
import { BookProvider } from "./contexts/BookContext.jsx";
import NavBar from "./components/NavBar.jsx";


function App() {
  return (
    <BookProvider>
      <NavBar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </BookProvider>
  );
}

export default App;
