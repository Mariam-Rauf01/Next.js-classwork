import { useState } from "react";

// Define the Book type here
interface Book {
  id: number;
  title: string;
  author: string;
  imgUrl: string;
}

interface BookFormProps {
  onAddBook: (newBook: Omit<Book, "id">) => void; // Exclude "id" here
}

const BookForm = ({ onAddBook }: BookFormProps) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newBook = { title, author, imgUrl };
    onAddBook(newBook); // Call the function passed as a prop
    setTitle(""); // Reset form fields
    setAuthor("");
    setImgUrl("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Book Title"
        required
      />
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author"
        required
      />
      <input
        type="url"
        value={imgUrl}
        onChange={(e) => setImgUrl(e.target.value)}
        placeholder="Image URL"
        required
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;
