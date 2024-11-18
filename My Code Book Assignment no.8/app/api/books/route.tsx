import { NextResponse } from "next/server";

interface Book {
  id: number;
  title: string;
  author: string;
  image: string;
  available: boolean;
}

let books: Book[] = [
  {
    id: 1,
    title: "Learn JavaScript Quickly",
    author: "Code Quickly",
    image: "/pic1.jpg",
    available: true,
  },
  {
    id: 2,
    title: "Automate the Boring Stuff with Python",
    author: "Al Sweigart",
    image: "/pic2.jpg",
    available: true,
  },
  {
    id: 3,
    title: "Eloquent JavaScript",
    author: "Allama Iqbal",
    image: "/pic3.jpg",
    available: true,
  },
  {
    id: 4,
    title: "Programming Rust",
    author: "Jim Blandy and Jason Orendorff",
    image: "/pic4.jpg",
    available: true,
  },
  {
    id: 5,
    title: "Soft Skills: The Software Developer's Life Manual",
    author: "John Sonmez",
    image: "/pic5.jpg",
    available: true,
  },
  {
    id: 6,
    title: "Clean Code: A Handbook of Agile Software Craftsmanship",
    author: "Robert C. Martin",
    image: "/pic6.jpg",
    available: true,
  },
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
    books.push({ ...newBook, id: books.length + 1 });
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
