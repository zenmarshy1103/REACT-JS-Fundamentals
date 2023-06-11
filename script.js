// Array - Filter Method
//  - (Functional Array Method)
//    - Does not mutate the original array
//    - Returns a new array based on the original one
//  - <THEORY>
//    - Loop over an array, return a new array only with the elements that turns true for the call back function that returns true 
//    - element that returns false is filtered out
//  - <SYNTAX>
//    [arrElement].filter(callbackfunction(arrElement))   
//    the arrElement argument for the call back function is current element in the loop
//    the call back function only can return true or false   
'use strict';
const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// >> 1. The Array Map Method
//  - (Functional Array Method)
//    - Does not mutate the original array
//    - Returns a new array based on the original one
//  - <THEORY>
//    - Loop over an array, return a new array with the same length with some operation applied to each of the elements of the original array
//  - <SYNTAX>
//    [arrElement].map(callbackfunction(arrElement))   
//    the arrElement argument for the call back function is current element in the loop

const xArray = [1,2,3,4].map((arrayElement) => arrayElement * 2 ); // Multiply each of the element by 2 and returns a new array
console.log(xArray);

const books = getBooks();
console.log(books);

// Return a new array with all the titles of the books array
const titles = books.map((book) => book.title );
console.log(titles);

// Return only the title and author of the books array in an object
// const essentialData = books.map(book => {
  
// //returns an object
//   return {
//     title: book.title,
//     author: book.author,
//   }
// })

// Clean up the code use () to wrap around the object and take away the return statement
const essentialData = books.map(book => ({  //returns an object   
  title: book.title,
  author: book.author,
}));

console.log(essentialData);


// >> 2. The Array Filter Method
//  - (Functional Array Method)
//    - Does not mutate the original array
//    - Returns a new array based on the original one
//  - <THEORY>
//    - Loop over an array, return a new array only with the elements that turns true for the call back function that returns true 
//    - element that returns false is filtered out
//  - <SYNTAX>
//    [arrElement].filter(callbackfunction(arrElement))   
//    the arrElement argument for the call back function is current element in the loop
//    the call back function only can return true or false

// Returns a new array with book elements of the books array that has pages more than 500 pages
const longBooks = books.filter((book) => book.pages > 500); // Returns a new array with book elements of the books array that has pages more than 500 pages

// Returns a new array with book elements of the books array that has pages more than 500 pages and hasMovieAdaptation is true
const longBooksWithMovie = books.filter((book) => book.pages > 500).filter((book) => book.hasMovieAdaptation);  //Method Chaining
console.log(longBooksWithMovie);

// Return a new array with only the book title with genres that has adventure 
const adventureBooks = books.filter((book) => book.genres.includes("adventure")).map((book) => book.title); //genres is an array type in the object so array method .includes can be used 
console.log(adventureBooks);
