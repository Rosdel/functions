'use strict';
// //----------------DEFAULT PARAMETERS------------------///
// //
// const bookings = [];
// const createBokking = function (
//   numPasenger = 1,
//   ticket = 1,
//   prices = 198 * numPasenger
// ) {
// //   //     //ES5
// //   //   numPasenger = numPasenger || 1;
// //   //   ticket = ticket || 1;
// //   //   prices = prices || 199;
// //   const booking = {
// //     numPasenger,
// //     ticket,
// //     prices,
// //   };
// //   console.log(booking);
// //   bookings.push(booking);
// // };
// // console.log(createBokking(4, 'hell'));
// // console.log(createBokking(undefined, 'hell')); //this helps to save the defaults parameters;

// /////////////////////----how to pass agurments works-----//

// const flight = '187364';
// const rosdell = {
//   name: 'OUMA rosdell',
//   passport: 782738474,
// };
// const checkin = function (flightNum, passenger) {
//   flightNum = 'PLK7272';
//   passenger.name = 'Mr.' + passenger.name;

//   if (passenger.passport === 782738474) {
//     alert('Checkedin');
//   } else {
//     alert('Wrong Passport');
//   }
// };

// console.log(checkin(flight, rosdell));
// console.log(rosdell);
// console.log(flight);

// //----ITS THE SAME AS DOING-----//
// const flightNum = flight;
// const passenger = rosdell;
//////-------------FUNCTIONS ACCEPTING CALLBACKS--------//////////////
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// //----------HIGHER OEDER FUNCTIONS--------------///
// const transformer = function (str, fn) {
//   console.log(`javascript is the best`);
//   console.log(`transformed string:${fn(str)}`);
//   console.log(`function name:${fn.name}`);
// };

// console.log(transformer('javascript is the best', upperFirstWord));
// console.log(transformer('javascript is the best', oneWord));
// console.log(transformer('javascript is the best', upperFirstWord));
// console.log(transformer('javascript is the best', oneWord));

///////////-------------FUNCTIONS RETURNING  FUNCTIONS--------------

// const greet = function (greetings) {
//   return function (name) {
//     console.log(`${greetings},you ${name}`);
//   };
// };
// const greeter = greet('hey');
// greeter('rosdell');
// greet('hello')('rosdell');

// //-------------arrow function challenge------------

// const greetArr = greetings => name => console.log(`${greetings},you ${name}`);
// greet('hi')('rosdell');

//////////----------THE CALL AND APPLY METHODS------------
const lufthansa = {
  airline: 'lufthansa',
  iataCode: 'LH',
  bookings: [],
  //   book: function(){}
  book(flightNum, name) {
    console.log(
      `${name} booked  a flight on ${this.airline} and this is the code ${this.iataCode}${flightNum}`
    );
  },
};
lufthansa.book(239, 'Rosdell Ouma');

const eurowing = {
  airline: 'eurowing',
  iataCode: 'EW',
  bookings: [],
};
