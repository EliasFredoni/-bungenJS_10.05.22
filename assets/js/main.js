

function left() {
    headline.classList.add("left");
    headline.className = "";
}


function center() {
    headline.className = "";
    headline.classList.add("center");
}



function right() {
    headline.classList.add("right");
}


console.log(typeof ("John"));
console.log(typeof (3.14));
console.log(typeof (NaN));
console.log(typeof (false));
console.log(typeof ([1, 2, 3, 4]));
console.log(typeof ({ name: 'John', age: 34 }));
console.log(typeof (new Date()));
console.log(typeof (function () { }));
console.log(typeof (null));
console.log(typeof (""));
console.log(typeof (3 + 2 == 5));
console.log(typeof (3 + "3"));

let i = 1;
let lastName = "Johnson";
let j = "2";
let status = true;
let hello = "hello";
let helloWorld = "hello";

console.log(typeof (i));
console.log(typeof (lastName));
console.log(typeof (j));
console.log(typeof (status));
console.log(typeof (hello));
console.log(typeof (helloWorld));

let x = 20;
let y = 30;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);

let z = 10;

console.log(x * y / z);

let resultOne = (x * y / z);

let a = 15;
let b = 9;

console.log(a / b);
console.log(a % b);

let c = 20;

console.log(a + b * c);

let resultTwo = (a + b * c);

console.log(a++);
console.log(b--);
console.log(b - a);

let resultThree = (b - a);

console.log(resultOne / resultTwo);
console.log(resultOne % resultTwo);

