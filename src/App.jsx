import "./styles/App.css";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <SearchProvider>
      <Header />
      <Outlet />
      <Footer />
    </SearchProvider>
  );
}
