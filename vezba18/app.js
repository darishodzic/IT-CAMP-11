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

// for (i = 5; i <= 1000; i++npm install @mui/material @emotion/react @emotion/styled
// ) {
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

// end = Number(prompt("Unesi broj"));

// for (i = 1; i <= end; i++) {
//   console.log("Cube of " + i + " is " + i ** 3);
// }

// for (i = 0; i < 5; i++) {
//   console.log(i);
//   for (j = 0; j < 5; j++) {
//     console.log(j);
//   }
// }

// *
// **
// ***
// ****

// str = "";
// kolicina = Number(prompt("Unesi broj"));

// for (i = 1; i <= kolicina; i++) {
//   str += i;
//   console.log(str);
// }

// 1
// 22
// 333
// 4444

// for (i = 1; i <= 4; i++) {
//   str = "";
//   for (j = 1; j <= i; j++) {
//     str += i;
//   }
//   console.log(str);
// }

// console.log("   *   ");
// console.log("  * *  ");
// console.log(" * * * ");
// console.log("* * * *");

// unos = Number(prompt("Unesi broj"));
// zvezdice = "";

// for (i = 1; i <= unos; i++) {
//   space = "";
//   for (j = 1; j <= unos - i; j++) {
//     space += " ";
//   }
//   zvezdice += "* ";
//   console.log(space + zvezdice);
// }

// ["Hello world", 40, 30, 20, 10];
//  0    1  2    3    4

// "Hello world"
//  012345678910

// a = "Hello world";

// console.log(a[15]);

// var1 = "Hello world I am Daris nesto asd";

// var2 = "Daris";
// console.log("dArIs".toUpperCase());
// console.log("dArIs".toLowerCase());
// console.log("dArIs".concat(var1, "dd"));

// var3 = var1.concat("NESTO", var2);
// console.log("            daris          ");

// console.log("            dar  is          ".trim());
// console.log("Hello world".slice(2, 8));
// console.log("Hello world".substring(2, 8));

// console.log("Hello world".substr(2, 8));

// console.log(
//   "Microsoft Please visit Microsoft!".replace("Microsoft", "Centar NIT")
// );

// console.log(var2[1]);
// console.log(var2.charAt(1));
// console.log(var2.indexOf("ri"));

// console.log(var1.includes("asd"));

// console.log(var1.split(" "));

// arr = ["Hello world", 40, 30, 20, 10];

// console.log(arr.join(" "));

// console.log(arr.slice(1, 3));
// console.log(arr);
// console.log(arr.splice(1, 3, "DARIS", "NESTO", "ADSAS"));
// console.log(arr);

// arr = [10, 15, 24];

// arr.push(3, 4, 1);
// arr.unshift(3);
// console.log("PRE", arr);
// b = arr.pop();
// b = arr.shift();

// console.log("POSLE", arr);

// function mojaF() {
//   console.log("fizzzzzzzzzzzzz");
// }

// function print(a) {
//   console.log(a);
// }

// print("Daris");

// print("Nesto");

// function sum(a, b) {
//   console.log("zbir je", a + b);
// }

// sum(2, 3);

// sum(9, 10);

// function sayHelloNTimes(times) {
//   for (i = 0; i < times; i++) {
//     console.log("HELLO", i);
//   }
// }

// sayHelloNTimes(2);
// console.log("+++++++++++++++++");

// sayHelloNTimes(10);

// function sum() {
//   console.log("ZBIR JE ", a + b);
// }

// a = 3;
// b = 5;
// sum();

// a = 1;

// sum();

// function sum(a, b) {
//   console.log(a + b);
// }

// unos1 = Number(prompt());
// unos2 = Number(prompt());

// sum(unos1, unos2);

// function square(num) {
//   console.log(num ** 2);
// }

// square(3);
// square(20);

// function checkIsPrime(num) {
//   isPrime = false;
//   for (i = 2; i < num; i++) {
//     if (num % i === 0) {
//       isPrime = true;
//       break;
//     }
//   }

//   if (!isPrime) {
//     console.log("BROJ JE PROST");
//   } else {
//     console.log("BROJ NIJE PROST");
//   }
// }

// checkIsPrime(5);

// function checkIsNumberEven(num) {
//   if (num % 2 === 0) {
//     console.log("broj je paran");
//   } else {
//     console.log("broj je neparan");
//   }
// }

// checkIsNumberEven(10);

// console.log("HILJDAU LINIJA KODAAAAA");
// checkIsNumberEven(7);

// function a(nesto) {
//   console.log(nesto);
// }
// name = "Daris";

// function sayHello() {
//   console.log("HELLO TO MY FRIEND " + name);
// }

// sayHello();

// name = "Adnan";
// sayHello();

// arr = [1, 2, 3, 4];

// c = arr.push();

// console.log(arr);
// console.log("Vracena vrednost je  ", c);

// function sum(a, b) {
//   console.log("Pocetak funkc");
//   return a + b;
//   console.log("Nesto");
// }

// a = sum(2, 5);

// console.log(a);

// function whatday(num) {
//   days = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];

//   if (num > 7 || num < 1) {
//     return "Wrong, please enter a number between 1 and 7";
//   }

//   return days[num - 1];
// }

// a = "Daris";

// b = a;

// a += "NESTO";

// console.log("A:", a);
// console.log("b:", b);

// a = [1, 2, 3];

// b = a;

// a.push(10);

// console.log("A:", a);
// console.log("b:", b);
// arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// for (i = 0; i < arr.length; i++) {
//   console.log(arr[i][i]);
// }

// console.log(arr[0][0]);
// console.log(arr[1][1]);
// console.log(arr[2][2]);

// arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// // console.log(arr[0][2]);
// // console.log(arr[1][1]);
// // console.log(arr[2][0]);

// for (i = 0; i < arr.length; i++) {
//   console.log(arr[i][arr.length - 1 - i]);
// }

// console.log("*");
// console.log("**");
// console.log("***");
// console.log("****");

// unos = Number(prompt("unesi broj"));
// str = "";
// for (i = 1; i <= unos; i++) {
//   str += i;
//   console.log(str);
// }

// unos = Number(prompt("unesi broj"));

// for (i = 1; i <= unos; i++) {
//   str = "";
//   for (j = 0; j < i; j++) {
//     str += i;
//   }
//   console.log(str);
// }

// unos = Number(prompt("unesi broj"));

// lastN = 0;

// for (i = 1; i <= unos; i++) {
//   str = "";
//   for (j = 0; j < i; j++) {
//     lastN++;
//     str += lastN;
//   }
//   console.log(str);
// }

// console.log("   *   ");
// console.log("  * *  ");
// console.log(" * * * ");
// console.log("* * * *");

// unos = 4;

// zvezdice = "*";
// for (i = 0; i < unos; i++) {
//   razmak = "";

//   for (j = i; j < unos - 1; j++) {
//     razmak += " ";
//   }

//   console.log(razmak + zvezdice);
//   zvezdice += " *";
// }

// "Hello World";
//  012345678910

// rec = "Hello World";

// console.log(rec.toUpperCase());
// console.log(rec.toLowerCase());
// console.log(rec.split(""));
// console.log(rec.includes("orld"));
// console.log(rec.startsWith("He"));
// console.log(rec.slice(2, 9));

// console.log(rec.indexOf("l"));

// console.log(rec.concat("Daris", "Nesto"));
// console.log(rec.trim());
// a = rec.replace("World", "DARIS");
// console.log(a);

// arr = [1, 2, 3, 4, 5, 6];

// for (i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// arr.forEach((el, i, array) => {
//   console.log(array);
// });

// function nasForEach(fun) {
//   for (i = 0; i < arr.length; i++) {
//     fun(arr[i], i, arr);
//   }
// }

// nasForEach((item) => {
//   console.log("Ove je el", item);
// });

// arr = [1, 2, 3, 4, 5, 6];

// c = [];

// for (i = 0; i < arr.length; i++) {
//   c.push(arr[i] * 10);
// }

// c = arr.map((el) => {
//   return el * 10;
// });

// function nasMap(fun) {
//   b = [];
//   for (i = 0; i < arr.length; i++) {
//     b.push(fun(arr[i], i, arr));
//   }
//   return b;
// }

// c = nasMap((el) => el * 10);

// console.log(c);

// arr = [1, 2, 3, 4, 5, 6];

// c = [];

// for (i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     c.push(arr[i]);
//   }
// }

// c = arr.filter((el) => {
//   return el % 2 === 0;
// });

// console.log(c);

// arr = [1, 2, 3, 4, 5, 6];

// // total = 0;
// // for (i = 0; i < arr.length; i++) {
// //   total += arr[i];
// // }

// total = arr.reduce((el, sum) => {
//   return el + sum;
// }, 0);

// console.log(total);

// function doubleNumbers(arr) {
//   return arr.map((el) => el * 2);
// }

// console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

// function capitalizeNames(arr) {
//   return arr.map((el) => el[0].toUpperCase() + el.slice(1).toLowerCase());
// }

// console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

// function fiveAndGreaterOnly(arr) {
//   return arr.filter((el) => el > 5);
// }
// // test
// console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]

// function fiveCharactersOrFewerOnly(arr) {
//   // your code here
//   return arr.filter((el) => el.length <= 5);
// }
// // test
// console.log(
//   fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])
// ); // ["by", "dog", "wolf", "eaten"]

// function stringConcat(arr) {
//   return arr.reduce((el, val) => {
//     return String(el) + val;
//   }, "");
// }

// console.log(stringConcat([1, 2, 3])); // "123"

numbers = [10, 20, 10, 40, 50, 60, 70];
target = 50;

for (i = 0; i < numbers.length; i++) {
  rest = target - numbers[i];

  const indexOfRest = numbers.indexOf(rest);

  if (indexOfRest > -1) {
    console.log(indexOfRest, i);
    break;
  }
}
