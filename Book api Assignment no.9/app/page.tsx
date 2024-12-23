"use client";

import { useState } from "react";
import BookForm from "../components/book-form";
import { Book } from "../data";
import BookCard from "../components/book-card";

export default function Home() {
  const [books, setBooks] = useState<Book[]>([]);

  const handleAddBook = async (newBook: Omit<Book, "id">) => {
    try {
      // Generate the id (assuming it's based on the length of the current books array)
      const bookWithId: Book = { id: books.length + 1, ...newBook };
      
      const response = await fetch("/api/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookWithId),
      });

      const data = await response.json();
      if (response.ok) {
        setBooks((prevBooks) => [...prevBooks, data.newBook]);
      } else {
        console.error("Failed to add book:", data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container mx-auto">
      <BookForm onAddBook={handleAddBook} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
        {books.map((book) => (
          <BookCard
            key={book.id}
            id={book.id}
            author={book.author}
            title={book.title}
            imgUrl={book.imgUrl}
          />
        ))}
      </div>
    </div>
  );
}
