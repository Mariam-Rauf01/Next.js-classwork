import { NextRequest } from "next/server";
import { books } from "../../../data";

// Handle GET requests - Returns the list of books
export const GET = async () => {
  const data = JSON.stringify(books);
  return new Response(data, { status: 200 });
};

// Handle POST requests - Adds a new book
export const POST = async (request: NextRequest): Promise<Response> => {
  try {
    const newBook = await request.json(); // Parse incoming JSON data

    // Check if all necessary fields are present
    if (!newBook.title || !newBook.author || !newBook.imgUrl) {
      return new Response(
        JSON.stringify({ message: "Missing required fields" }),
        { status: 400 }
      );
    }

    // Assign a new unique ID for the book
    newBook.id = books.length ? books[books.length - 1].id + 1 : 1;

    // Add the new book to the books array
    books.push(newBook);

    // Return the added book in the response
    return new Response(JSON.stringify({ newBook }), { status: 200 });
  } catch (error) {
    // Handle unexpected errors
    console.error(error);
    return new Response(
      JSON.stringify({ message: "Invalid data or error occurred" }),
      { status: 400 }
    );
  }
};
