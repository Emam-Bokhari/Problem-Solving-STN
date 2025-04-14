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

//
