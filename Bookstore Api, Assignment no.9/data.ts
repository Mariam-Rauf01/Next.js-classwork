export interface Book {
    id: number;
    title: string;
    author: string;
    imgUrl: string;
  }
  
  export const books: Book[] = [
    {
      id: 1,
        title: "The Road to React: Your journey to master plain yet pragmatic React.js",
        author: "Robin Wieruch",
        imgUrl: "https://m.media-amazon.com/images/I/51j1nrM7ETL._SY425_.jpg",
      },
      {
        id: 2,
        title: "Clean Code",
        author: "Robert C. Martin",
        imgUrl: "https://m.media-amazon.com/images/I/41xShlnTZTL._SX374_BO1,204,203,200_.jpg",
      },
    {
      id: 3,
      title: "The Pragmatic Programmer",
  author: "Andrew Hunt and David Thomas",
  imgUrl: "https://m.media-amazon.com/images/I/41as+WafrFL._SX415_BO1,204,203,200_.jpg",
    },
    {
      id: 4,
      title: "Code Complete",
      author: " Steve McConnell",
      imgUrl:
        "https://m.media-amazon.com/images/I/61GzazUmKyL._AC_UY218_.jpg",
    },
    {
      id: 5,
      title: "Refactoring: Improving the Design of Existing Code",
      author: "Martin Fowler",
      imgUrl: "https://m.media-amazon.com/images/I/71e6ndHEwqL._SY425_.jpg"
    
    },
    {
      id: 6,
      title: "Effective Java 3rd Edition",
      author: "Joshua Bloch",
      imgUrl:
        "https://m.media-amazon.com/images/I/7167aaVxs3L._SY425_.jpg",
    },
    {
      id: 7,
      title: "Full Stack Development with Spring Boot 3 and React - Fourth Edition: Build modern web applications using the power of Java, React, and TypeScript 4th ed. Edition",
      author: "Juha Hinkula ",
      imgUrl: "https://m.media-amazon.com/images/I/81Mj9WV2evL._SY425_.jpg",
    },
    {
      id: 8,
      title:
        "React Key Concepts: Consolidate your knowledge of React's core features",
      author: " Maximilian Schwarzmüller",
      imgUrl: "https://m.media-amazon.com/images/I/415aT+nMuIL._SX342_SY445_.jpg",
    },
  ];