import { useEffect, useState } from "react";
import type {Book} from '../common/modules';

export function useBooks() {
    const [books, setBooks] = useState<Book[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);

    useEffect(() => {
        fetch("/bookverse_data.json")
            .then((res) => res.json())
            .then((data) => {
                setBooks(data);
                setFilteredBooks(data);
            });
    }, []);

    useEffect(() => {
        const lowerQuery = searchQuery.toLowerCase();
        const filtered = books.filter(
            (book) =>
                book.title.toLowerCase().includes(lowerQuery) ||
                book.author.toLowerCase().includes(lowerQuery)
        );
        setFilteredBooks(filtered);
    }, [searchQuery, books]);

    return {
        books: filteredBooks,
        setSearchQuery,
        originalBooks: books,
    };
}
