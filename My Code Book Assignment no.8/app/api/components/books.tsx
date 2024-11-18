"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

type Book = {
  id: number;
  title: string;
  author: string;
  image: string;
  available: boolean;
};

export default function Books() {
  const [books, setBooks] = useState<Book[]>([]);
  const [newBook, setNewBook] = useState<{
    title: string;
    author: string;
    image: string | File;
    available: boolean;
  }>({
    title: "",
    author: "",
    image: "",
    available: true,
  });
  const [editBook, setEditBook] = useState<Book | null>(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const res = await fetch("/api/books");
      const data = await res.json();
      setBooks(data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const addBook = async () => {
    try {
      const formData = new FormData();
      formData.append("title", newBook.title);
      formData.append("author", newBook.author);
      formData.append("image", newBook.image as string);
      formData.append("available", newBook.available.toString());

      await fetch("/api/books", {
        method: "POST",
        body: formData,
      });
      setNewBook({ title: "", author: "", image: "", available: true });
      fetchBooks();
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  const updateBook = async () => {
    if (editBook) {
      try {
        await fetch("/api/books", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editBook),
        });
        setEditBook(null);
        fetchBooks();
      } catch (error) {
        console.error("Error updating book:", error);
      }
    }
  };

  const deleteBook = async (id: number) => {
    try {
      await fetch("/api/books", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      fetchBooks();
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    setState: React.Dispatch<React.SetStateAction<any>>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (editBook) {
          setState({
            ...editBook,
            image: reader.result as string,
          });
        } else {
          setState({
            ...newBook,
            image: reader.result as string,
          });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-[20px] bg-gray-400 text-white">
      <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.length > 0 ? (
          books.map((book) => (
            <li
              key={book.id}
              className="flex flex-col items-center p-[10px] border border-gray-700 rounded-md transition-all hover:scale-105 hover:shadow-xl"
            >
              <div className="w-full h-[350px] flex justify-center items-center bg-gray-900 rounded-md overflow-hidden">
                <Image
                  src={book.image}
                  alt={book.title}
                  width={200}
                  height={350}
                  className="object-contain max-h-full max-w-full"
                />
              </div>
              <h1 className="mt-4 text-center bg-gray-700 p-3 rounded-md text-lg md:text-xl text-white hover:bg-indigo-500 transition-all">
                {book.title}
              </h1>
              <p className="text-center text-lg my-2">{book.author}</p>
              <p className="text-center font-bold text-sm">
                Status: {book.available ? "Available" : "Not Available"}
              </p>
              <div className="flex justify-center items-center mt-3 space-x-4">
                <button
                  className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg transition-all transform hover:scale-105 hover:bg-blue-600"
                  onClick={() => setEditBook(book)}
                >
                  <CiEdit size={24} />
                </button>
                <button
                  className="bg-red-500 text-white px-6 py-3 rounded-md text-lg transition-all transform hover:scale-105 hover:bg-red-600"
                  onClick={() => deleteBook(book.id)}
                >
                  <MdDeleteOutline size={24} />
                </button>
              </div>
            </li>
          ))
        ) : (
          <p>No books available.</p>
        )}
      </ul>

      {editBook && (
        <div className="my-[20px] flex flex-col justify-center items-center w-full bg-gray-700 p-4 rounded-lg">
          <h2 className="text-2xl mb-4 text-indigo-400">Edit Book</h2>
          <input
            type="text"
            placeholder="Title"
            value={editBook.title}
            onChange={(e) => setEditBook({ ...editBook, title: e.target.value })}
            className="w-[80%] p-3 my-2 text-2xl bg-gray-800 text-white border border-gray-600 rounded-md outline-none"
          />
          <input
            type="text"
            placeholder="Author"
            value={editBook.author}
            onChange={(e) => setEditBook({ ...editBook, author: e.target.value })}
            className="w-[80%] p-3 my-2 text-2xl bg-gray-800 text-white border border-gray-600 rounded-md outline-none"
          />
          <input
            type="file"
            onChange={(e) => handleImageUpload(e, setEditBook)}
            className="w-[80%] p-3 my-2 bg-white"
          />
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md w-[40%] transition-all hover:bg-green-600"
            onClick={updateBook}
          >
            Save Changes
          </button>
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded-md w-[40%] mt-2 transition-all hover:bg-gray-600"
            onClick={() => setEditBook(null)}
          >
            Cancel
          </button>
        </div>
      )}

      <div className="my-[20px] flex flex-col justify-center items-center w-full bg-gray-700 p-4 rounded-lg">
        <h2 className="text-2xl my-3 text-white">Add a new book</h2>
        <input
          type="text"
          placeholder="Title"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
          className="w-[80%] p-3 my-2 text-2xl bg-gray-800 text-white border border-gray-600 rounded-md outline-none"
        />
        <input
          type="text"
          placeholder="Author"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
          className="w-[80%] p-3 my-2 text-2xl bg-gray-800 text-white border border-gray-600 rounded-md outline-none"
        />
        <input
          type="file"
          onChange={(e) => handleImageUpload(e, setNewBook)}
          className="w-[80%] p-3 my-2 bg-white"
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md w-[40%] mt-4 transition-all hover:bg-blue-600"
          onClick={addBook}
        >
          Add Book
        </button>
      </div>
    </div>
  );
}
