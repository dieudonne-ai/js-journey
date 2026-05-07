# Start my JavaScript journey

## Type of values in js:

### Pimitive/Value Types

- String('dido', 'hi, how are you?')
- Nummber(1,23, 0.4, 0.44)
- Boolean(True or false)
- Undefined
- null

```js
let a = 10;
let name = "Dido";
let isActive = true;
let firstName = null;
let lastName = undefined;
```

### Reference Tupe

- Object

  exemple:
  code

```js
let person = {
  name: "Dido",
  age: 10,
  city: "New York",
};
console.log(person.city);

//dot notation to set value of name property
person.name = "Dido Smith";
console.log(person.name);
```

- Arrays

Exemple:

code

```js
let selectedColors = ["red", "blue", "green"];

console.log("Selected Colors:", selectedColors);
// Adding a new color to the array
selectedColors[3] = "yellow";
console.log(selectedColors.length);
```

- Function

```js
>> Performing task fuction.

//perfoming a task multiple times
function greet(name, lastName) {
    console.log("Hello, " + name + " " + lastName + "!");
}

greet("Dido", "Smith");
greet("John", "Doe");
greet("Janes", "Smithson");
```

```js
>> Calculating fuction.

//calculating a value multiple times
function square(number) {
    return number * number;
}
let number = 5;
console.log(square(number));

```

## Object Oriented Programing(OOP) in JavaScript

This is the CORE concept in programming, it help to organise code avoid patern in the program make the program easy to understand and to fix.
It use Object as main CORE of operation.

### 4 Popular concept in OOP

- Encapsulation (Reduce complexity + Increase reusability)
  "The best function are those with no parameters!!"

Exemple:
code

```js
// Simple function

let baseSalary = 30000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
  return baseSalary + overtime * rate;
}

// Encapsulation with Object

let employee = {
  baseSalary: 30000,
  overtime: 10,
  rate: 20,
  getWage: function () {
    return this.baseSalary + this.overtime * this.rate;
  },
};

console.log(getWage(baseSalary, overtime, rate)); // 32000
console.log(employee.getWage()); // 32000
```

- Abstraction (Reduce complexity + Isolate impact of changes)
  With this we reduce impact of change

Exemple:
code

```js
// Abstraction layer for the different implementations of the API
// This allows us to switch between different implementations without changing the code that uses the API

const { getConfig } = require("./config");

const config = getConfig();
```

- Inheritance (Eliminate redundant code)
  Help to eliminate a redundant code

```js

```

- Polymorphism (Refactor ugly switch/case statements)
  Many Form
