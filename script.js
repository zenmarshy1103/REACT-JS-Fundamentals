// Working with Immutable Arrays (Techniques)
//  - Always create a new away using [...] spread operator for array or {...} object to not change the original data structure
//  - <Techniques>
//    - 1. Adding elements without changing the original array
//    - 2. Delete elements without changing the original array
//    - 3. Update elements without changing the original array
//  - <THEORY>
//    - In React, many operations need to be immutable (Where we do operation to not manipulate the underlying data structure )
//    - In React always good to leave original array, so make a copy of the original array first

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

const xArray = [1, 2, 3, 4].map((arrayElement) => arrayElement * 2); // Multiply each of the element by 2 and returns a new array
console.log(xArray);

const books = getBooks();
console.log(books);

// Return a new array with all the titles of the books array
const titles = books.map((book) => book.title);
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
const essentialData = books.map((book) => ({
  //returns an object
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
const longBooksWithMovie = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation); //Method Chaining
console.log(longBooksWithMovie);

// Return a new array with only the book title with genres that has adventure
const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title); //genres is an array type in the object so array method .includes can be used
console.log(adventureBooks);

// >> 3. The Array Reduce Method
//  - (Functional Array Method)
//    - Does not mutate the original array
//    - Returns a new array based on the original one
//  - <THEORY>
//    - Loop over an array, return a new array with one value
//  - <SYNTAX>
//    [arrElement].reduce(callbackfunction(accumulator, arrElement), startValueOfAccumulator )
//    the arrElement argument for the call back function is current element in the loop

// Perform mathematical operation with numbers in the array
const pagesAllBooks = books.reduce(
  (accumulator, book) => accumulator + book.pages,
  0
); // 1st iteration accumulator is 0 (the second argument of the reduce method) then after the 1st iteration the 2nd argument becomes the calculated value of the 1st iteration operation (0 + 1216)
console.log(pagesAllBooks); // 2nd iteration accumulator is 1216, after this iteration accumulator becomes ( 1216 + 295) ... and so on until all the array element are completed

// >> 4. The Array Sort Method
//  - (NOT Functional Array Method)
//    - Mutates the original array
//  - <THEORY>
//    - Loop over an array, return a new array with one value
//      - In React always good to leave original array, so make a copy of the original array first using .slice() then perform .sort()
//  - <SYNTAX>
//    [arrElement].sort(callbackfunction(currentElementValue, nextElementValue ) )
//  when the return value of the call back function is:
//    - negative the values will be sorted in ascending way (a - b)
//    - positive the values will be sorted in descending way (b - a)

const x = [3, 7, 1, 9, 6];
// Using .slice() to make a copy of the original array to the new array variable and work with it without mutating the original array
const sorted = x.slice().sort((a, b) => a - b); //a is the currentElementValue of array and b is the nextElementValue of the array
// when the return value of the call back function is:
//  - negative the values will be sorted in ascending way (a - b)
//  - positive the values will be sorted in descending way (b - a)
console.log(x);
console.log(sorted);

// Applying .sort() on object elements in the array (Use Case for React and Real World Scenario)
// Sorting the book array with object element from book with longest pages to shortest pages (Ascending Way)
const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages); // a and b gets the value of the array , since we are using book array's pages property in the array to arrange the object element in the array
console.log(sortedByPages);

// >> 5. Working with Immutable Arrays (Techniques)
//  - <Techniques>
//    - 1. Adding elements without changing the original array
//    - 2. Delete elements without changing the original array
//    - 3. Update elements without changing the original array
//  - <THEORY>
//    - In React, many operations need to be immutable (Where we do operation to not manipulate the underlying data structure )
//    - In React always good to leave original array, so make a copy of the original array first using .slice() then perform .sort()

// >> 1. Add Book Object to array
const newBook = {
  id: 6,
  title: "Harry Porter and the Chamber of Secrets",
  arthor: "J. K Rowling",
};

// Adding new object onto array
// - using spread operator [...originalArr]  (Creates a mew array )
const booksAfterAdd = [...books, newBook]; //Adding the object element at the end of the new array
console.log(books);
console.log(booksAfterAdd);

// >> 2. Delete Book Object from an array

// Delete book object with id 3 using filter() to filter it out of the array
//  - filter() creates a new array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3); //book ID 3 is filtered out of the array at it returns false for the condition only elements that return true will be put on (filtered in) the array
console.log(booksAfterDelete);

// >> 3. Update Book Object from an array

// Update / Change the book object that is id 1 using .map() and return value using ternary operation
// using spread operator on object, spreads all the properties of the object and just updating one property of the object element
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...books, pages: 1 } : book
); // true: update the page property, false: return current book object element
console.log(booksAfterUpdate);
