"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"

export default function CreateBookForm() {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [imgUrl, setImgUrl] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null) // Error state
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null) // Reset error state before each submission

    try {
      const response = await fetch("/api/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, author, imgUrl }),
      })

      if (response.ok) {
        setTitle("")
        setAuthor("")
        setImgUrl("")
        router.refresh()
      } else {
        const errorData = await response.json()
        setError(errorData.message || "Failed to create book") // Display error message
      }
    } catch (error) {
      console.error("Error creating book:", error)
      setError("An unexpected error occurred. Please try again later.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto mb-10">
      <CardHeader>
        <CardTitle className="flex justify-center items-center">Create New Book</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="author">Author</Label>
            <Input
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="imgUrl">Image URL</Label>
            <Input
              id="imgUrl"
              value={imgUrl}
              onChange={(e) => setImgUrl(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-500">{error}</p>} {/* Display error message */}
        </CardContent>
        <CardFooter className="flex justify-center items-center">
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Creating..." : "Create Book"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
