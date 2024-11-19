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
      formData.append("image", newBook.image);
      formData.append("available", newBook.available.toString());

      await fetch("/api/books", {
        method: "POST",
        body: JSON.stringify(newBook),
        headers: { "Content-Type": "application/json" },
      });
      setNewBook({ title: "", author: "", image: "", available: true });
      fetchBooks();
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  const updateBook = async () => {
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
    setState: React.Dispatch<
      React.SetStateAction<{
        title: string;
        author: string;
        image: string | File;
        available: boolean;
      }>
    >
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setState((prev) => ({ ...prev, image: reader.result as string }));
      };
      reader.readAsDataURL(file); // Convert the file to a base64 string
    }
  };

  return (
    <div className="min-h-screen bg-yellow-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-800">
        Welcome to the My Code Book Libary! 📖
      </h1>

      {/* Book List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.length > 0 ? (
          books.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col items-center"
            >
              <div className="relative w-full h-56">
                <Image
                  src={book.image}
                  alt={book.title}
                  layout="fill"
                  objectFit="contain"
                  className="p-4"
                />
              </div>
              <div className="p-4 w-full text-center">
                <h2 className="text-lg font-bold text-gray-800">{book.title}</h2>
                <p className="text-gray-600">Author: {book.author}</p>
                <p
                  className={`mt-2 font-semibold ${
                    book.available ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {book.available ? "Available" : "Not Available"}
                </p>
                <div className="flex justify-center mt-4 gap-4">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={() => setEditBook(book)}
                  >
                    <CiEdit size={20} />
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    onClick={() => deleteBook(book.id)}
                  >
                    <MdDeleteOutline size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center col-span-full">
            No books available.
          </p>
        )}
      </div>

      {/* Edit Book Modal */}
      {editBook && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-1/2">
            <h2 className="text-xl font-bold mb-4">Edit Book</h2>
            <input
              type="text"
              placeholder="Title"
              value={editBook.title}
              onChange={(e) =>
                setEditBook({ ...editBook, title: e.target.value })
              }
              className="w-full p-3 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Author"
              value={editBook.author}
              onChange={(e) =>
                setEditBook({ ...editBook, author: e.target.value })
              }
              className="w-full p-3 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="file"
              onChange={(e) =>
                setEditBook((prev) =>
                  prev ? { ...prev, title: e.target.value } : null
                )
              }
              className="w-full p-3 mb-4"
            />
            <div className="flex justify-end gap-4">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                onClick={() => setEditBook(null)}
              >
                Cancel
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                onClick={updateBook}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add New Book */}
      <div className="bg-white p-6 rounded-lg shadow-lg mt-10 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Add a New Book</h2>
        <input
          type="text"
          placeholder="Title"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
          className="w-full p-3 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Author"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
          className="w-full p-3 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="file"
          onChange={(e) => handleImageUpload(e, setNewBook)}
          className="w-full p-3 mb-4"
        />
        <button
          className="bg-blue-500 text-white w-full py-3 rounded hover:bg-blue-600"
          onClick={addBook}
        >
          Add Book
        </button>
      </div>
    </div>
  );
}
