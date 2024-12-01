"use client";

import { useState } from "react";
import { Book } from "@/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function BookCard({ author, id, imgUrl, title }: Book) {
  const [isUpdateDialogOpen, setIsUpdateDialogOpen] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedAuthor, setUpdatedAuthor] = useState(author);
  const [loading, setLoading] = useState(false); // State for loading indicator
  const [error, setError] = useState<string | null>(null); // State for error message
  const router = useRouter();

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Reset any previous errors
    const updatedBook = {
      id,
      title: updatedTitle,
      author: updatedAuthor,
      imgUrl,
    };

    try {
      const response = await fetch(`/api/books`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedBook),
      });

      if (response.ok) {
        router.refresh();
        setIsUpdateDialogOpen(false);
      } else {
        throw new Error("Failed to update book");
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : "Error updating book");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/books`, {
        method: "DELETE",
        body: JSON.stringify({ id }),
      });
      if (response.ok) {
        router.refresh();
        console.log("Book deleted successfully");
      } else {
        console.error("Failed to delete book");
      }
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <Card className="h-full w-full max-w-sm bg-gray-900 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 overflow-hidden">
      <CardHeader className="p-0">
        {/* Added aspect ratio for proper image display */}
        <div className="relative aspect-[3/4] overflow-hidden rounded-t-lg flex justify-center items-center">
          <Image
            src={imgUrl} // Ensure imgUrl is correct and accessible
            alt={title}
            width={300} // Specify width
            height={400} // Specify height
            className="object-cover" // Added basic object-cover for image resizing
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 text-white space-y-2">
        <CardTitle className="text-2xl font-semibold line-clamp-1">{title}</CardTitle>
        <CardDescription className="mt-2 text-gray-400">{author}</CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-between space-x-4">
        <Dialog open={isUpdateDialogOpen} onOpenChange={setIsUpdateDialogOpen}>
          <DialogTrigger asChild>
            <Button className="w-1/2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300">
              Update
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-white rounded-lg shadow-lg p-6 sm:p-8 md:w-96 transition-transform duration-300">
            <DialogHeader className="text-center">
              <DialogTitle className="text-xl font-bold text-gray-800">Update Book</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleUpdate} className="space-y-6">
              <div>
                <Label htmlFor="title" className="font-medium text-gray-700">
                  Title
                </Label>
                <Input
                  id="title"
                  value={updatedTitle}
                  onChange={(e) => setUpdatedTitle(e.target.value)}
                  className="border border-gray-300 rounded-lg mt-1"
                />
              </div>
              <div>
                <Label htmlFor="author" className="font-medium text-gray-700">
                  Author
                </Label>
                <Input
                  id="author"
                  value={updatedAuthor}
                  onChange={(e) => setUpdatedAuthor(e.target.value)}
                  className="border border-gray-300 rounded-lg mt-1"
                />
              </div>
              <Button
                type="submit"
                disabled={loading || !updatedTitle || !updatedAuthor} // Disable while loading or fields are empty
                className="w-full bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-700"
              >
                {loading ? "Saving..." : "Save Changes"}
              </Button>
            </form>
            {error && <p className="text-red-500 text-center mt-2">{error}</p>}
          </DialogContent>
        </Dialog>
        <Button
          onClick={handleDelete}
          className="w-1/2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300"
        >
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}