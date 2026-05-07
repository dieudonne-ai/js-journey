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
