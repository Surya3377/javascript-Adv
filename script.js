const restaurant = {
  name: 'classico italiano',
  location: 'via angelo tavanti 23, firenze,india',
  categories: ['red', 'blue', 'yellow', 'pink'],
  starterMenu: ['pot', 'top', 'run', 'out'],
  mainMenu: ['suryam', 'madhav', 'sudhra', 'mount'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1},${ing2},${ing3}`);
  },
 };

 const newmenu=[...restaurant.mainMenu,...restaurant.starterMenu];
 console.log(newmenu);
  console.log(...newmenu);

  const rest=new Map();
  rest.set("name",'classic italian');
  rest.set(1,'firenze italy');
  rest.set(2,"lisbon","portugal");
  console.log(rest.get(1))

  rest.set('categories',['italian','pizzeria','vegetarian','organic'])
       .set('open',11)
       .set('close',23)
       .set(true,'we are open:D')
       .set(false,'we are closed')

       console.log(rest.get(true))

  const time=8;
  console.log(rest.get(time >rest.get('open')&& time<rest.get('close')));

  console.log(rest.has('categories'));
  rest.delete(2);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);
copy Array
const mainMenuCopy = [...restaurant.mainMenu];

Join 2 Array
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

Iterables : Array,Strings,maps,sets,Not objects
const str = 'jonas';
const letters = [...str, '', 's'];
console.log(letters);
console.log(...str);

Real-World Problems
const ingrediants = [
  prompt("let's make pasta! Ingrediant 1?"),
  prompt('Ingrediant2?'),
  prompt('Ingrediant3?'),
];
console.log(ingrediants);

restaurant.orderPasta(ingrediants[0], ingrediants[1], ingrediants[2]);
restaurant.orderPasta(...ingrediants);

Objects
const newRestaurant = {founderIn:1988,...restaurant,founder : 'Guisipe'};
console.log(newRestaurant)

const restaurantCopy = {...restaurant};
restaurantCopy.name = "Rsesjh roma";
console.log(restaurantCopy.name);
console.log(restaurant.name)

const{name,openingHours,categories} = restaurant;
console.log(name,openingHours,categories);

const{
  name:restaurantName,
  openingHours:hours,
  categories:tags,
}= restaurant;

console.log(restaurantName,hours,tags);

const{menu = [], starterMenu : starters = []} = restaurant;
console.log(menu,starters);

let a = 23;
let b = 44;
const obj = {a:555,b:666};

Mutating Variables
({a,b} = obj);
console.log(a,b)

Nested

const{fri:{open:O,close:C}} = openingHours;
console.log(O,C)

 const rest = new Map();
 rest.set("name",'classico italiano');
 rest.set(1,'firenze Italy');
 rest.set(2,"Lisbon",'portugal');
 console.log(rest.get(1))

 rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

  console.log(rest.get('name'));
  console.log(rest.get(true));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);

const question = new Map([
  ['question','what is the best programming language in the world ?'],
  [1,'C'],
  [2,'Java'],
  [3,'Javascript'],
  ['correct',3],
  [true,'correct 🥂'],
  [false,'Try Again!'],
]);

console.log(question)

Convert object to Map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));

console.log(hoursMap);

for (const [key,value] of question) {
   if (typeof key === 'number')
   console.log ( `Answer ${key} : ${value}`)
}

const answer = Number(prompt ('your answer'));
console.log(answer);

console.log(question.get(question.get('correct') === answer))

How Passing Arguments Works: Values vs. Reference

const person={
  firstname:'john',
  lastname:'jin',
  fullname:function(){
    return this.firstname +""+ this.lastname;

  }
}

const number={
  firstname:'jam',
  lastname:'top',
  fullname:function(){
    return this.firstname +""+ this.lastname;

  }
}

let you=number.fullname.bind(person);
document.getElementById("demo").innerHTML=you();

checkIn(flight,Arjun);
console.log(flight);
console.log(Arjun);

const checkIn = function (flightNum,passenger) {
  flightNum = 'LH999',
  passenger = "Mr." + passenger.name;

  if(jonas.passport === 24739479284) {
    alert("checked In ")
  }
  else{
    alert("wrong passport")
  }
}
checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

Is the same as doing...
const flightNum = flight;

const newPassport = function (person) {
  person.passport =   Math.trunc(Math.random() * 10000000)
}

newPassport(jonas);
checkIn(flight,jonas);

JS uses callbacks all the time
const high5 = function () {
  console.log("👋");
};

document.body.addEventListener("click",high5);
["jonas","Michel","peter"].forEach(high5);

Function returning Function:

const greet = function (greeting) {
  return function(name) {
    console.log(`${greeting} ${name}`)
  }
}

const greeterHey = greet("hey");
greeterHey("jonas");
greeterHey("michel");

/forEach

let movements = [
  20, 40, 10, 70, 50, 30, 770, 440, 220, 443, -342, -45, -560, -342,
];
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`movement ${i + 1} : you deposited ${mov}`);
  } else {
    console.log(`movement ${i + 1} : you withdrawen ${Math.abs(mov)}`);
  }
});

MAP

let movements = [ 20, 40, 10, 70, 50, 30, 770, 440, 220, 443, -342, -45, -560, -342];

const movementdesk = movements.map((mov,i) => {
  if ( mov > 0 ) {
    console.log(`movements ${ i +1 } you : deposited ${mov}`)
  } else {
    console.log(`movements ${ i +1 } you : withdrawn ${Math.abs(mov)}`)
  }
});
console.log(movementdesk);

FILTER

 let movements = [ 20, 40, 10, 70, 50, 30, 770, 440, 220, 443, -342, -45, -560, -342];

 const movementsFilter = movements.filter ((mov) => {
     return mov > 0
 });

 console.log(movementsFilter);

 const movementsFilter5 = movements.filter ((mov) => {
  return mov < 0
});










console.log(movementsFilter5)

REDUCE

 let movements = [ 20, 40, 10, 70, 50, 30, 770, 440, 220, 443, -342, -45, -560, -342];

const sum = movements.reduce((accumilator,currentValue) => {
  return accumilator+currentValue
});

console.log(`reduce takes two arguments ${sum}`);
SORT
let movements = [ 20, 40, 10, 70, 50, 30, 770, 440, 220, 443, -342, -45, -560, -342];

const sorting = movements.sort((a,b) => a - b);
console.log(sorting);


FIND
let numbers= [20,21,23,34,54,6,666,33,5,5454,-2332,-434,-34343];

const map = numbers.find((mov) => {
  return  mov > 0
})

console.log(map);








