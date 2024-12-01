import BookCard from "@/components/book-card";
import CreateBookForm from "@/components/book-form";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Book } from "@/data";

// Server-side fetching directly in the component
export default async function Home() {
  let books: Book[] = [];
  let error: string | null = null;

  try {
    // API URL for local development or production
    const apiUrl =
      process.env.NODE_ENV === "production"
        ? "https://your-production-api-url.com/api/books" // Replace with your production API URL
        : "http://localhost:3000/api/books"; // Local development API URL

    const res = await fetch(apiUrl);
    if (!res.ok) {
      throw new Error("Failed to fetch books");
    }
    books = await res.json();
  } catch (err: unknown) {
    // Type guard to check if the error is an instance of Error
    if (err instanceof Error) {
      error = err.message;
    } else {
      error = "An unknown error occurred";
    }
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="bg-gray-400 min-h-screen">
      <div className="container mx-auto px-4 gap-4 py-8 bg-gray-200 rounded-xl">
        <Navbar />
        <CreateBookForm />
        <div className="grid grid-cols-1 gap-6 mt-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {books.length > 0 ? (
            books.map((book) => (
              <BookCard
                key={book.id}
                author={book.author}
                imgUrl={book.imgUrl}
                title={book.title}
                id={book.id}
              />
            ))
          ) : (
            <div>No books available</div>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
}
