// Exercise 1 - стрелочная функция
let double = value => value * 2;
console.log(double(10));

// Exercise 2 - опциональный параметр
let greet = (name = 'Alex') => console.log("Hello, " + name);
greet();
greet("Anna");

// Exercise 3 - spread
let numbers = [-3, 33, 38, 5];
console.log(Math.min(...numbers));

// Exercise 4 - spread
let newArray = [55, 20];
newArray.push(...numbers);
console.log(newArray);

// Exercise 5 - деструктуризация
let [result1, result2, result3] = [3.89, 2.99, 1.38];
console.log(result1, result2, result3);

// Exercise 6 - деструктуризация
let {firstName, experience} = {firstName: "Will", experience: 12};
console.log(firstName, experience);
