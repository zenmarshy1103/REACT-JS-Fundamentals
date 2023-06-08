// Short Circuiting and Logical Operators (&&, ||, ??)
// - && AND Short Circuiting - When the value is false, return the false value (Falsy Value: 0 , '', null, undefined )
// - || OR Short Circuiting - When the value is true, return the true value  (Falsy Value: 0 , '', null, undefined )
// - ?? Nullish Coalescing Short Circuiting - When the value is true, return the true value (0 is now a true value) (Falsy Value: '', null, undefined )
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

// >> 1. Object Destructuring
//  - Relies on the property of the Object
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

// >> 2. Array Destructuring
//  - Relies on the order of the Array

// >> 3. Rest Operator (...)
// - Must be at the end of the destructuring operation
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
console.log(primaryGenre, secondaryGenre);
console.log(otherGenres);


// >> 4. Spread Operator (...)
// - Getting all the values in the array and all the properties of the array 


//  - Arrays
const newGenres1 = [genres, 'epic fantasy']; // This puts the genres array onto the newGenres array  , making it a nested array

// We want all the values and the new value in one array
const newGenres = [...genres, 'epic fantasy'];  // Creates a new array with all the existing genre plus epic fantasy.
console.log(newGenres);

//  - Objects
const updatedBook1 = {book, moviePublicationDate: '2001'}; // This puts the moviePublicationDate as a separate propery and the book object is nested inside it
console.log(updatedBook1);

// We want to just add a new property to a new array with existing properties
const updatedBook ={...book, moviePublicationDate: '2001'};
console.log(updatedBook);

//  - Changing a value in a property using Spread Operator
//    - the value needs to be after the spread operator or the spread operator will overwrite it 
const updatedBook2 ={
  // Unpacking all existing properties
  ...book, 
  // Adding new Property
  moviePublicationDate: '2001', 
  //Overwriting an existing Property
  author: 'Jason Liu'
 };
console.log(updatedBook2);



// >> 5. Ternary Operator
//  - Can be added into string literal where an IF/ELSE Statement cannot be used as it does not return a value
//  - <SYNTAX> condition ? true-Operation: false-operation;

const pagesRange = pages > 1000 ? `Over a thousand pages`: `Less than one thousand pages`
console.log(`The book has ${pagesRange}`);


// >> 6. Arrow Functions
//  - Function Express where the traditional way of Function constructions is Functional Declaration

//  - Method 1 (without { } and return keyword)
//    - For one line function
const dateToYear = (str) => str.split("-")[0];
console.log(dateToYear(publicationDate)) ;

//  - Method 2 ( with { } and return keyword)
//    - For function with multiple lines
const getYear = (str) => {
  const year = str.split("-")[0];
  return year;   // This way Return Keyword is a must or it will return UNDEFINED
}
console.log(getYear(publicationDate));

const summary = `${title}, a ${pages} pages long book, was written by ${author} and published in ${dateToYear(publicationDate)}.
The book has ${hasMovieAdaptation ? '' : 'not '}been adapted as a movie }`;

console.log(summary);

// >> 7. Short Circuiting and Logical Operations
//  - Falsy Value: 0 , '', null, undefined
//  - Mainly used as a IF statement without the ELSE (id if true or if false )
// AND Short Circuiting - &&
// OR Short Circuiting - ||
// Nullish Coalescing Short Circuiting - ??

// AND Short Circuiting
// - Falsy Value: 0 , '', null, undefined
// - when the value is false, return the false value 
console.log(true && "some string") // will return the value that is false in this case it is "some string"
console.log(false && "Some String") // return false instead
console.log(hasMovieAdaptation && 'this book has a movie');  

console.log(0 && "some string") // 0 is a falsy value so immediately it is returned 

// OR Short Circuiting
// - Falsy Value: 0 , '', null, undefined
// - when the value is true, return the value
console.log(true || `some string`);
console.log(false || `some string`);

console.log(book.translations.spanish) // This returns undefined which is a falsy value
console.log(book.translations.chinese || 'does not have Chinese Translation'); // here the there is chinese translation so it is true so the value is returned

console.log(book.reviews.librarything.reviewsCount);
console.log(book.reviews.librarything.reviewsCount || 'No Data'); // 0 is falsy so 'No Data' is returned

// Nullish Coalescing Short Circuiting
// - When the value is true, return the true value
// - treats 0 as truthy value
// - Falsy Value: '', null, undefined

console.log(book.reviews.librarything.reviewsCount ?? 'No Data'); // Returns 0


