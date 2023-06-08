// Ternaries instead of If/Else Statement
// - Can be added into string literal where an IF/ELSE Statement cannot be used as it does not return a value
// - <SYNTAX> condition ? true-Operation: false-operation;
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

const books = getBooks();
console.log(typeof books);

const book = getBook(2);

// Object Destructuring
// - Relies on the property of the Object
const {
  title,
  author,
  pages,
  publicationDate,
  genres,
  translations,
  hasMovieAdaptation,
} = book; // the {var1, var2} has to be the exact same as the property name in the object, to get the correct info out of the object
console.log(
  title,
  author,
  pages,
  publicationDate,
  genres,
  translations,
  hasMovieAdaptation
);

// Array Destructuring
// - Relies on the order of the Array

// >> Rest Operator (...)
// - Must be at the end of the destructuring operation
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
console.log(primaryGenre, secondaryGenre);
console.log(otherGenres);


// >> Spread Operator (...)
// - Getting all the values in the array and all the properties of the array 


// Arrays
const newGenres1 = [genres, 'epic fantasy']; // This puts the genres array onto the newGenres array  , making it a nested array

// We want all the values and the new value in one array
const newGenres = [...genres, 'epic fantasy'];  // Creates a new array with all the existing genre plus epic fantasy.
console.log(newGenres);

// Objects
const updatedBook1 = {book, moviePublicationDate: '2001'}; // This puts the moviePublicationDate as a separate propery and the book object is nested inside it
console.log(updatedBook1);

// We want to just add a new property to a new array with existing properties
const updatedBook ={...book, moviePublicationDate: '2001'};
console.log(updatedBook);

// Changing a value in a property using Spread Operator
//- the value needs to be after the spread operator or the spread operator will overwrite it 
const updatedBook2 ={
  // Unpacking all existing properties
  ...book, 
  // Adding new Property
  moviePublicationDate: '2001', 
  //Overwriting an existing Property
  author: 'Jason Liu'
 };
console.log(updatedBook2);



// >> Ternary Operator
// - Can be added into string literal where an IF/ELSE Statement cannot be used as it does not return a value
// - <SYNTAX> condition ? true-Operation: false-operation;

const pagesRange = pages > 1000 ? `Over a thousand pages`: `Less than one thousand pages`
console.log(`The book has ${pagesRange}`);

const summary = `${title}, a ${pages} pages long book, was written by ${author} and published in ${publicationDate.split("-")[0]}.
The book has ${hasMovieAdaptation ? '' : 'not '}been adapted as a movie }`;

console.log(summary);