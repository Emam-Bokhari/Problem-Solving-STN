// array filtering and mapping
const people = [
  { name: "Abdullah Al Mamun", age: 25, gender: "male" },
  { name: "Sharmin Akter", age: 22, gender: "female" },
  { name: "Md. Saifullah", age: 30, gender: "male" },
  { name: "Nusrat Jahan", age: 24, gender: "female" },
];

const getMaleNames = (arr) => {
  return arr
    .filter((person) => person.gender !== "female")
    .map((person) => person.name);
};

console.log(getMaleNames(people));

// object manipulation
const books = [
  { title: "Lal Shalu", author: "Syed Waliullah", year: 1948 },
  { title: "Padma Nadir Majhi", author: "Manik Bandopadhyay", year: 1936 },
  { title: "Ekattorer Dinguli", author: "Jahanara Imam", year: 1986 },
];

const getBookTitles = (arr) => arr.map((book) => book.title);

console.log(getBookTitles(books));
