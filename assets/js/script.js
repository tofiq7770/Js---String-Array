"use strict";

console.log("TASK1.0");
console.log("-------");
function getText(text) {
  let word = text.split("");

  for (let i = 0; i < word.length; i++) {
    return word.reverse().join("");
  }
}
console.log(getText("Ali"));

console.log("TASK2.0");
console.log("-------");

function getYear(age) {
  let year = new Date().getFullYear();
  let now = year - age;
  console.log(now);
}
getYear(30);

console.log("TASK3.1");
console.log("-------");

let person1 = {
  id: 1,
  name: "Ali",
  fullName: "Ali Huseynov",
  age: 42,
  salary: 2400,
};
let person2 = {
  id: 2,
  name: "Ali",
  fullName: "Ali Shukurlu",
  age: 19,
  salary: 1300,
};
let person3 = {
  id: 3,
  name: "Tural",
  fullName: "Tural Aliyev",
  age: 18,
  salary: 3300,
};

const people = [person1, person2, person3];

function peopleCount(people) {
  let count = 0;
  for (let i = 0; i < people.length; i++) {
    count++;
  }
  return count;
}
console.log(peopleCount(people));

console.log("TASK3.2");
console.log("-------");
function avarageOfSalary(people) {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < people.length; i++) {
    count++;
    sum += people[i].salary;
  }
  let avg = sum / count;
  return avg;
}

console.log(avarageOfSalary(people));


console.log("TASK3.3");
console.log("-------");

function searchByFullName(people, searchText) {
  for (let i = 0; i < people.length; i++) {
    if (
      people[i].fullName
        .trim()
        .toLowerCase()
        .includes(searchText.trim().toLowerCase())
    ) {
      let result = people[i];
      return result;
    }
  }
}

console.log(searchByFullName(people, "aLi"));

// let word = "Azerbaycan,salam";

// console.log(word.length);
// for (let i = 0; i < word.length; i++) {
//   console.log(word[i]);
// }
// console.log(word.toLowerCase());

// console.log(word.toUpperCase());

// console.log(word.trim());

// console.log(word.charCodeAt(5));

// let res = word.concat(" salam");
// console.log(res);

// console.log(word.slice(0, 4));

// console.log(word.substring(1, 4));

// let text = "salam asdfghgfdsa";

// console.log(text.substring(0, 11) + "...");

// let res = word.replace("A", "a");
// console.log(res);

// let res = word.indexOf("z");
// console.log(res);

// console.log(word.lastIndexOf("a"));
// console.log(word.replaceAll("a", "b"));

// console.log(word.replace("a", "b"));
// let text = "5";
// text = text.padStart(4, "0");

// console.log(text);
// console.log(word.split(","));

// console.log(word.startsWith("A"));
// console.log(word.endsWith("m"));

// let ages = [22, 44, 50, 16];
// // console.log(ages.length);

// let res = ages.toString();
// console.log(res);

// console.log(ages.at(2));
// let fruits = ["Banana", "Orange", "Apple", "Mango"];

// console.log(fruits.join(" "));
// fruits.pop();

// fruits.push("test");
// fruits.shift();

// fruits.unshift("test");
// console.log(fruits);

// let res = fruits.filter((m) => m.includes("Orange"));

// fruits = fruits.filter((m) => !m.includes("Orange"));
// // console.log(res);

// console.log(fruits);
// fruits.splice(0, 1, "lemon");

// console.log(fruits);
// console.log(fruits.includes("Banana"));

// let res = fruits.find((m) => m.startsWith("B"));

// console.log(res);
// fruits.forEach((fruit, i) => {

//   fruits[i] = fruit + " " + "P418";

// });
// console.log(fruits);

// let res = fruits.map((m) => {

//   return m + " " + 418;

// });
// console.log(fruits);
// console.log(res);
