//DATA TYPE / Primitivni i referentin tipovi
//Primitivni tipovi

//Number
//1 2 6 10 -3 -7 2.5 -2.5

//String
// "Hello World"   'Daris'

//Boolean
//true false

// vrednosnost = 10;

// console.log(vrednosnost);
// console.log(vrednosnost);

// vrednosnost = 2;

// console.log(vrednosnost);
// console.log(vrednosnost);

// console.log(3 + 2);
// console.log(3 - 2);
// console.log(3 * 2);
// console.log(3 / 2);
// console.log(3 ** 2);
// console.log(3 % 2);

// a = 5;

// b = 3;

// c = a + b;

// console.log(c);

// a = "Hello";

// b = "World";

// console.log(a + b);

// a = 3;

// b = 5;

// console.log(b == a);

//Logicke operacije
//< > == === <= >= != !==

// //falsy values
// 0;
// ("");
// null;
// undefined;
// NaN;
// false;

// console.log("PRE IFA");

// if (0) {
//   console.log("Daris");
// }

// console.log("POSLE IFA");

// unos1 = Number(prompt("Unesi broj"));
// unos2 = Number(prompt("Unesi broj"));

// if (unos1 === unos2) {
//   console.log("BROJEVI SU JEDNAKI");
// } else {
//   console.log("BROJEVI NISU JEDNAKI");
// }

// unos1 = Number(prompt("Unesi broj 1."));
// unos2 = Number(prompt("Unesi broj 2."));

// if (unos1 > unos2) {
//   prvi = unos1;
//   drugi = unos2;
// } else {
//   prvi = unos2;
//   drugi = unos1;
// }

// unos3 = Number(prompt("Unesi broj 3."));

// if (unos3 > prvi) {
//   treci = drugi;
//   drugi = prvi;
//   prvi = unos3;
// } else if (unos3 < drugi) {
//   treci = unos3;
// } else {
//   treci = drugi;
//   drugi = unos3;
// }

// console.log("1. broj je " + prvi);
// console.log("2. broj je " + drugi);
// console.log("3. broj je " + treci);

// console.log("PRE FORA");

// for (i = 5; i <= 1000; i++) {
//   console.log(i);
// }

// console.log("POSLE FORA");

// sum = 0;
// end = Number(prompt("Unesi broj"));

// for (i = 1; i <= end; i++) {
//   sum += i;
// }

// console.log(sum);

// sum = 0;
// avr = 0;

// for (i = 1; i <= 10; i++) {
//   unos = Number(prompt("Unesi broj"));
//   sum += unos;
// }

// console.log("zbir je " + sum);
// console.log("prosek je " + sum / 10);

// end = Number(prompt("Unesi broj"));

// for (i = 1; i <= end; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

end = Number(prompt("Unesi broj"));

for (i = 1; i <= end; i++) {
  console.log("Cube of " + i + " is " + i ** 3);
}

for (i = 0; i < 5; i++) {
  console.log(i);
  for (j = 0; j < 5; j++) {
    console.log(j);
  }
}
