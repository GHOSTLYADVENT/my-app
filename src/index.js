import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// Note: In ES6, var keywords are accessible from the function they are defined in (var -> function) while let && const keyword is accessible from the block they are defined in

// function sayHello(){
//   for(let i=0; i<5; i++){
//     console.log(i)
//   }
// }

// sayHello()

const person = {
  name: 'Joe',
  walk: function(){
    console.log(this);
  }
}

person.walk()

const walks = person.walk.bind(person) //Binds the person object

walks()

// var i;
// var y = 6;
// var x = 'oooo';
// for (i =0; i<x.length; i++){
//   y += i;
//   console.log(y)
// }
// console.log(y)

// DESTRUCTURING OBJECTS
const personalInfo = {
  firstName: 'Joel',
  lastName: 'Offiong',
  email: 'offiongjoel@gmail.com',
  city: 'Jos',
  State: 'Plateau',
  zipcode: '222345'
}
// const {firstName, lastName, email} = personalInfo  
//    OR

const {firstName: fn, lastName: ln, email: em} = personalInfo

console.log(`my name is ${fn} ${ln}, you can reach me on ${em}`)

// DESTRUCTURING ARRAYS
let [firstname, nickname, lastname] = ['Joel', 'the GHOSTLYADVENT', 'Offiong']

console.log(`${firstname} ${lastname} ${nickname}`)

console.log(firstname)

// OBJECT LITERALS
// function addressMaker(city, state){
//   const newAddress = {city, state};
//   console.log(newAddress);
// };

// addressMaker('Houston', 'Texas');

// OBJECT LITERAL CHALLENGE
function addressMaker(address){
  const {city, state} = address

  const newAddress = {
    city, 
    state,
    country: 'United States'
  };
  console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`);
};

addressMaker({city: 'Houston', state: 'Texas'});

// FOR OF LOOP 
// let incomes = [62000, 67000, 75000];
// let total = 0;

// for (const income of incomes){
//   total += income;
// }

// console.log(total)

// FOR OF LOOP CHALLENGE 
let incomes = [62000, 67000, 75000]

for (let income of incomes){
  income += 5000
  console.log(income)
}

console.log(incomes);


// SPREAD OPERATOR - helps to spread the values of one data to another data by creating a new array of the instance
let example1 = [1, 2, 3, 4, 5, 6];
let example2 = [...example1];

console.log(example2)

// REST OPERATOR - gives us the ability to get arguments out of our function, and It's used in a case where we don't know the amount of inputs(parameters) to be used. It returns an array
// function numbers (...nums){
//   console.log(nums)
// }

// numbers(4, 5, 6, 7, 8, 10);

// ARROW FUNCTIONS with the reduce function


function numbers (...nums){
  let total = nums.reduce(
    (x, y)=>{
      return x+y;
    }
  )
  console.log(total)
}
// OUTPUT
// x = 4, y = 5 => 9
// x = 9, y = 6 => 15
// x = 15, y = 7 => 22
// x = 22, y = 8 => 30
// x = 30, y = 10 => 40
numbers(4, 5, 6, 7, 8, 10);


function sum (...numbs){
  let total = numbs.reduce(
    (x, y, z)=>{
      return (x+y)+z;
    }
  )
  console.log(total)
}
// OUTPUT
// a = x + y, c = z
// a = 3, c = 4 => 7
// a = 
sum(1, 2, 4, 6, 8, 10);


// MAPS, FILTER & FOREACH
let infos = [
  {
    id: 1,
    name: 'John',
    age: 30,
    address: {
      city: 'Jos',
      state: 'Plateau',
      country: 'Nigeria'
    }
  },
  {
    id: 2,
    name: 'Doe',
    age: 36,
    address: {
      city: 'Port-Harcourt',
      state: 'Rivers',
      country: 'Nigeria'
    }
  },
  {
    id: 3,
    name: 'Suzie',
    age: 23,
    address: {
      city: 'Lagos',
      state: 'Ikeja',
      country: 'Nigeria'
    }
  }
]

// MAPS - creates an array from another array 
const newInfo = infos.map((info)=>{
  return info.address.city;
})
console.log(newInfo)

// FOR OF LOOP
for (let info of infos){
  console.log(info.address.city)
}

// Checks to confirm if its an array
console.log(Array.isArray(infos))
console.log(Array.isArray(newInfo))

let [first, sec, third] = infos   //DESTRUCTURING THE ARRAY Infos
console.log(first.address.city, sec.address.city, third.address.city) 

const {id, name, age, address: {city}} = first //DESTRUCTURING THE OBJECT first
console.log(id, name, age, city)

// SPREADING info on the first object in infos
let example0 = {...first}

console.log(example0)

// REST OPERATOR
const myFunc = (...nums)=>{
  const total = nums.reduce((a, c)=>{
    return a+c
  })
  console.log(total)
}
// OUTPUT
// a = 1, c = 2 => 3
// a = 3, c = 3 => 6
// a = 6, c = 4 => 10
// a = 10, c = 5 => 15
// a = 15, c = 6 => 21
// a = 21, c = 7 => 28
// a = 28, c = 8 => 36
// a = 36, c = 9 => 45
// a = 45, c = 10 => 55
myFunc(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// More on Array method
const todos = [
  {
    id: 1,
    text: 'Take out trash',
    isComplete: true
  },
  {
    id: 2,
    text: 'Do some coding exercise',
    isComplete: true
  },
  {
    id: 3,
    text: 'Workouts',
    isComplete: false
  }
]

// FOREACH
todos.forEach((todo)=>{
  console.log(todo.id);
})

// MAPS
const todoText = todos.map((todo)=>{
  return todo.text;
})

console.log(todoText)

// FILTER - creates a new array based on a condition
const todoIsComplete = todos.filter((todo)=>{
  return todo.isComplete === true
}).map((todo)=>{
  return todo.text
})

console.log(todoIsComplete)

// looping through todoIsComplete to get each value
todoIsComplete.forEach((todo)=>{
  console.log(todo.valueOf(todo))
})


// LEARINING REACT