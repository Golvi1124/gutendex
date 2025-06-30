// "state manager" for favorite books

import { createContext, useState,useContext, useEffect } from "react";

const BookContext = createContext()

export const useBookContext = () => useContext(BookContext)

//provide state to any of the components that are wrapped around it. giving specific functions or whatever when needed
export const BookProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])

    //local storage part.
    // first look inside to check if something is already there
    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites")

        if (storedFavs) setFavorites(JSON.parse(storedFavs))
    }, [])

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])


    // add to storage:
    const addToFavorites = (book) => {
        setFavorites(prev => [...prev, book])
    }

    //remove from favorites
    const removeFromFavorites = (bookId) => {
        setFavorites(prev => prev.filter(book => book.id !==bookId))
    }

    //check if one of conditions are true => shows that it is in favs
    const isFavorite = (bookId) => {
        return favorites.some(book => book.id === bookId)
    }

    //specifying all the values we want to provide to children
    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }


    return <BookContext.Provider value={value}>
        {children}
    </BookContext.Provider>
}