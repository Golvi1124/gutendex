import { useContext } from "react";
import BookContext from "./BookContext.jsx";

export default function useBookContext() {
  return useContext(BookContext);
}
