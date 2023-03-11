var c = new Array(1, 2, 3, 4);

var b = c.filter(function (a) {
  console.log((a % 2) - 1);
  return (a % 2) - 1;
});

// console.log(b);

// var d = 3;

// c = d;

// console.log(c);

let arr = [1, 2, 3, 4, 5, 6, 8];

let arr2 = arr.filter(function (a) {
  console.log(a * 2);
  return a * 2;
});

console.log(arr2);

const megadeth = [
  {
    name: "Dave Mustaine",
    role: "Frontman",
    hairColor: "Blonde",
    mass: 243,
  },
  {
    name: "Nick Manza",
    role: "Drummer",
    hairColor: "black",
    mass: 200,
  },
  {
    name: "Marty Friedman",
    role: "Guitarist",
    hairColor: "black",
    mass: 150,
  },
];

// function(){};
// const greeting = () => console.log("Hello");

// greeting();

// megadeth.filter((member) => console.log(member.hairColor));

// megadeth.filter((member) => {
//   if (member.hairColor == "black") {
//     // console.log(member.hairColor);
//     console.log("Yes, it is black");
//   } else {
//     console.log("only the most beautiful red hair");
//   }
// });
