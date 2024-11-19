import { NextResponse } from "next/server";

interface Book {
  id: number;
  title: string;
  author: string;
  image: string;
  available: boolean;
}

let books: Book[] = [
  // Your book data
];

// GET Method
export async function GET() {
  return NextResponse.json(books, { status: 200 });
}

// POST Method
export async function POST(req: Request) {
  try {
    const newBook: Book = await req.json();

    // Ensure that a valid book is added
    if (!newBook.title || !newBook.author || !newBook.image) {
      return NextResponse.json(
        { message: "Missing required fields (title, author, image)" },
        { status: 400 }
      );
    }

    // Adding a new book with unique id
    const newBookWithId = { ...newBook, id: Date.now() };  // Use Date.now() for unique ids
    books.push(newBookWithId);
    return NextResponse.json({ message: "Book added successfully!" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error adding book!", error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}

// PUT Method
export async function PUT(req: Request) {
  try {
    const updatedBook: Book = await req.json();

    if (!updatedBook.id || isNaN(updatedBook.id) || updatedBook.id <= 0) {
      return NextResponse.json(
        { message: "Invalid or missing book id" },
        { status: 400 }
      );
    }

    const bookIndex = books.findIndex((book) => book.id === updatedBook.id);

    if (bookIndex === -1) {
      return NextResponse.json(
        { message: "Book not found!" },
        { status: 404 }
      );
    }

    books[bookIndex] = { ...books[bookIndex], ...updatedBook };
    return NextResponse.json({ message: "Book updated successfully!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error updating book!", error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}

// DELETE Method
export async function DELETE(req: Request) {
  try {
    const { id }: { id: number } = await req.json();

    if (!id || isNaN(id) || id <= 0) {
      return NextResponse.json(
        { message: "Invalid or missing book id" },
        { status: 400 }
      );
    }

    const bookIndex = books.findIndex((book) => book.id === id);

    if (bookIndex === -1) {
      return NextResponse.json(
        { message: "Book not found!" },
        { status: 404 }
      );
    }

    books = books.filter((book) => book.id !== id);
    return NextResponse.json({ message: "Book deleted successfully!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error deleting book!", error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
