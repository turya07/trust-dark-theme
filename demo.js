// const btn = document.getElementById("btn-submit");
// btn.addEventListener("click", myFunc);
// // function design
// async function myFunc(e) {
//   e.preventDefault();

//   await fetch("http://demolink.json").then((res) => {
//     return {
//       data: res.body,
//     };
//   });
// }

class Animal {
  #name;
  constructor(name) {
    this.#name = name;
  }

  setName(name) {
    this.#name = name;
  }
  getName() {
    return this.#name;
  }

  makeSound() {
    return "make noise";
  }
}

class Dog extends Animal {
  super(name) {
    this.setName(name);
  }
  makeSound() {
    return "bark!";
  }
}

// array+ object design
const myObjArr = [
  {
    name: "user1",
    age: 19,
    foods: ["apple", "mangoe", "lichi"],
  },
  {
    name: "user1",
    age: 19,
    foods: ["apple", "mangoe", "lichi"],
  },
  {
    name: "user1",
    age: 19,
    foods: ["apple", "mangoe", "lichi"],
  },
];

const dog = new Dog("Tommy");
console.log(myObjArr);
console.log("dog", dog.getName(), dog.makeSound());
dog.setName("tony stark!");
console.log("dog", dog.getName(), dog.makeSound());
