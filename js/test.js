// function chekAge(age) {
//     if (age >= 18) {
//         return "You are an abult";
//     }
// }

// console.log (chekAge(17));

// function checkAge(age) {
//   if (age >= 18) {
//     return "You are an adult";
//   }
// }

// // Приклади викликів функції з різними значеннями age
// console.log(checkAge(20)); // Повертає "You are an adult"
// console.log(checkAge(17)); // Повертає undefined
// console.log(checkAge(10)); // Повертає undefined
// console.log(checkAge(30)); // Повертає "You are an adult"

// function checkStorage(available, ordered) {
//     if (ordered > available) {
//         return "Not enough goods in stock!";
//     } else {
//         return "Ordered is processed, our manager will contact you";
//     }
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));

// function checkStorage(available, ordered) {
//     if (ordered === 0) {
//         return "There are no products in the order!";
//     } else if (ordered > available) {
//         return "Your order is too large, there are not enough items in stock!";
//     } else {
//         return "The order is accepted, our manager will contact you";
//     }
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));

// function checkPassword(password) {
//     const correctPassword = "jqueryismyjam";

//     if (password === correctPassword) {
//       return "Acces granted!";
//     } else {
//       return "Access denied, wrong password!";
//     }
// }

// console.log(checkPassword("jqueryismyjam"));
// console.log(checkPassword("angul4r1sl1f3"));

// function checkPassword(password) {
//   const correctPassword = "jqueryismyjam";

//   if (password === correctPassword) {
//     return "Access granted";
//   } else {
//     return "Access denied, wrong password!";
//   }
// }

// // Приклади викликів функції з різними паролями
// console.log(checkPassword("jqueryismyjam"));  // Повертає "Access granted"
// console.log(checkPassword("angul4r1sl1f3"));  // Повертає "Access denied, wrong password!"
// console.log(checkPassword("r3actsux"));        // Повертає "Access denied, wrong password!"

// function getSubscriptionPrice(type) {
//   switch (type) {
//     case "starter":
//       return 0;
//     case "professional":
//       return 20;
//     case "organization":
//       return 50;
//     default:
//       return "Invalid subcrition type!";
//   }
// }

// console.log(getSubscriptionPrice("professional")); // повертає число 20
// console.log(getSubscriptionPrice("organization")); // повертає число 50
// console.log(getSubscriptionPrice("starter"));      // повертає число 0
// console.log(getSubscriptionPrice("random"));       // повертає рядок "Invalid subscription type!"
// console.log(getSubscriptionPrice("premium"));      // повертає рядок "Invalid subscription type!"

// TASK-1 //

// function makeTransaction(quantity, pricePerDroid, customerCredits) {
//     const totalPrice = quantity * pricePerDroid;
//     if (totalPrice > customerCredits) {
//         return "Insufficient funds!";
//     } else {
//         return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
//     }
// }

// console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
// console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
// console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"

// function makeTransaction(quantity, pricePerDroid, customerCredits) {
//     // Розрахунок загальної суми замовлення
//     const totalPrice = quantity * pricePerDroid;

//     // Перевірка на достатність коштів
//     if (totalPrice > customerCredits) {
//         return "Insufficient funds!";
//     } else {
//         return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
//     }
// }

// // Перевірка функції
// console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
// console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
// console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"

// TASK-2 //

// function formatMessage(message, maxLenght) {
//     if (message >= maxLenght) {
//         return message;
//     } else {
        
//     }
// }

// function isNumberInRange(start, end, number) {
//     return number >= start && end >= number;
// }
// console.log(isNumberInRange(10, 30, 17));
// console.log(isNumberInRange(23, 25, 25));

// function checkAcces(subType) {
//     return subType === "pro" || subType === "vip";
// }
// console.log(checkAcces("pro"));
// console.log(checkAcces("user"));
// console.log(checkAcces("vip"));

// function toggleModalVisbility(isVisible) {
//     return !isVisible;
// }

// console.log(toggleModalVisbility(true));
// console.log(toggleModalVisbility(false));

// function getSubstring(string, lenght) {
//     return string.slice(0, lenght);
// }

// console.log(getSubstring("Hello World!", 3));
// console.log(getSubstring("Hello World!", 8));

// function normalizeInput(input, to) {
//     if (to === "upper") {
//         return input.toUpperCase();
//     } else if (to === "lower") {
//         return input.toLowerCase();
//     }
// }
   
// console.log(normalizeInput("This ISN'T SpaM", "lower"));
// console.log(normalizeInput("This ISN'T SpaM", "upper"));

// const username = "Anton Skoromnyi"
// console.log(username.includes("Anton"));
// console.log(username.includes("Skoromnyi"));
// console.log(username.includes("Alena"));
// console.log(username.includes("Tymchuk"));

// function checkForName(fullName, firstName) {
//     return fullName.includes(firstName);
// }

// console.log(checkForName("Anton Skoromnyi", "Anton"));

// const str = "Hello World!";
// console.log(str.startsWith("Hello World!", "hello"));
// console.log(str.endsWith("Hello World!", "world"));

// function checkFileExtension(fileName, ext) {
//     if (fileName.endsWith(ext)) {
//         return "File extension matches";
//     } else {
//         return "File extension do not matches";
//     }
// }

// console.log(checkFileExtension("styles.css", "css"));
// console.log(checkFileExtension("hello.js!", "js"));

// TASK-2 //

// function formatMessage(message, maxLenght) {
//     if (message.lenght <= maxLenght) {
//         return message;
//     } else {
//         return message.slice(0, maxLenght) + "...";
//     }
// }
 
// console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
// console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
// console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
// console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"

// function toCamelCase(str) {
//     return str.split(/[-_]/).map((word, index) => {
//         // Перетворення першого слова у верблюжу нотацію
//         if (index === 0) {
//             return word.toLowerCase();
//         } else {
//             // Перетворення наступних слів, якщо вони не порожні
//             return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//         }
//     }).join('');
// }

// // Перевірка функції
// console.log(toCamelCase("the-stealth-warrior")); // "theStealthWarrior"
// console.log(toCamelCase("The_Stealth_Warrior")); // "TheStealthWarrior"
// console.log(toCamelCase("The_Stealth-Warrior")); // "TheStealthWarrior"

// function zbruchPalaceHotel(number) {
//     let price;
//     let time;
//     switch (number) {
//         case 'люкс':
//             price = 30;
//             time = 24;
//             return `Ночівля у номері ${number} на ${time} години буде коштувати ${price}$ `;
//         case 'президентський':
//             price = 45;
//             time = 24;
//             return `Ночівля у номері ${number} на ${time} години буде коштувати ${price}$ `;
//         case 'стандарт':
//             price = 5;
//             time = 12;
//             return `Ночівля у номері ${number} на ${time} годин буде коштувати ${price}$ `;
//         default:
//             return "Такого номеру немає в наявності";
// }
// }

// console.log(zbruchPalaceHotel('люкс'));
// console.log(zbruchPalaceHotel('президентський'));
// console.log(zbruchPalaceHotel('стандарт'));
// console.log(zbruchPalaceHotel('luxury'));

// function calculateTotal(number) {
//     while (number < 6) {
//         let number = 3;
//         number += 1+2+3;
//     }
// }
// console.log(calculateTotal(3));


// let anton = 0;

// while (anton < 10) {
//     console.log(Anton )
// }

// function calculateTotal(number) {
//     let total = 0;
//     let i = 1;
//     while (number >= i) {
//         total += i;
//         i += 1;
//     }
//     return total;
// }
//  console.log(calculateTotal(3));

// function calculateTotal(number) {
//   let total = 0;
//   for (let i = 1; number >= i;  i ++ ) {
//     total += i;
//   }
//   return total;
// }

// console.log(calculateTotal(21));

// function calculateTotal(number) {
//     let total = 0;
//     for (let i = 4; number >= i; i ++) {
//         total += i;
//     }
//     return total;
// }

// console.log(calculateTotal(24));

// function calculateEvenTotal(number) {
//     let total = 0;
//     for (let i = 1; number >= i; ++i) {
//         if (i % 2 == 0) {
//             total += i;
//         }
//     }
//     return total;
// }

// console.log(calculateEvenTotal(7));
// console.log(calculateEvenTotal(3));
// console.log(calculateEvenTotal(18));
// console.log(calculateEvenTotal(27));

// function findNumber(start, end, divisor) {
//   let total = 0;
//   for (let i = start; end => i; i++ ) {
//     if (i % divisor == 0) {
//       return i;
//     }
//   }
// }
// console.log(findNumber(2, 6, 5));
// console.log(findNumber(11, 13, 12));
// console.log(findNumber(8, 17, 3));

// const fruits = ["apple", "pineapple", "banana"];
// fruits[0] = "peach"
// fruits[1] = "orange"
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// function getOrderQuantity(order) {
//     return order.length;
// }
 
// console.log(["apple", "banana", "pear"]);

// function getLastElementMeta(array) {
//     const lastIndex = array.length - 1;
//     const lasElement = array[lastIndex];
//     return [lastIndex, lasElement];
// }
 
// console.log(getLastElementMeta(["apple", "pear", "peach", "banana"]));

// function getExtremeElements(array) {
//     return [array[0], array[array.length - 1]];
// }

// console.log(getExtremeElements(["apple", "pear", "peach", "banana"]));

// function slugify(title) {
//     return title.toLowerCase();
    
// }

// console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
// console.log(slugify("English for developer")); // "english-for-developer"
// console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

// function getLength(array) {
//     const string = array.join('')
//     return string.length
// }

// console.log(getLength(["Mango", "hurries", "to", "the", "train"]));
// console.log(getLength(["Anton", "Skoromnyi"]));

// function calculatePrice(message, pricePerWord) {
//     const words = message.split(' ');
//     const totalPrice = words.length * pricePerWord;
//     return totalPrice;
// }

// console.log(calculatePrice("JavaScript is in my blood", 10));
// console.log(calculatePrice("Anton end Alena it`s love forever", 20));


// function calculateEngravingPrice(message, pricePerWord) {
//   // Розділити рядок на слова
//   const words = message.split(' ');
  
//   // Знайти кількість слів у рядку та обчислити вартість гравірування
//   const totalPrice = words.length * pricePerWord;
  
//   return totalPrice;
// }

// // Приклади використання функції
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10)); // повертає 50
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20)); // повертає 100
// console.log(calculateEngravingPrice("Web-development is creative work", 40)); // повертає 160
// console.log(calculateEngravingPrice("Web-development is creative work", 20)); // повертає 80

// console.log(calculatePrice("JavaScript is in my blood", 10));

// function getIndexElement(array, value) {
//     const elem = array.indexOf(value)
//     return elem
// }
// console.log(getIndexElement(["Mango", "Poly", "Ajax"], "Poly"));

// function slugify(title) {
//     const toLowerCasedTitle = title.toLowerCase()
//     const words = toLowerCasedTitle.split(' ')
//     const slug = words.join('-')
//     return slug
// }

// console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
// console.log(slugify("English for developer")); // "english-for-developer"
// console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

// function makeArray(firstArray, secondArray, maxLength) {
//     const allArray = firstArray.concat(secondArray)
//     if (allArray > maxLength) {
//         return allArray.slice(0, maxLength)
//     } else {
//         return allArray
//     }
// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []


// const elements = ['rusvelt', 'iosif', 'cherchel']
// elements.push('adolf')
// console.log(elements)

// function createArrayForNumbers(min, max) {
//     const numbers = [];
//     for (let i = min; i <= max; i ++) {
//         numbers.push(i);
//     }
//     return numbers;
// }

// console.log(createArrayForNumbers(1, 3));
// console.log(createArrayForNumbers(14, 17));
// console.log(createArrayForNumbers(20, 30));

// const elements = ['rusvelt', 'iosif', 'cherchel']
// for (let i = 0; elements.length > i; i ++) {
//     console.log(elements[i]);
// }

// function calculateTotalPrice(order) {
//     let total = 0;
//     for (let i = 0; i < order.length; i ++) {
//         total += order[i];
//     }
//     return total
// }
// console.log(calculateTotalPrice([164, 188, 121]));

// function getEvenNumber(start, end) {
//     let numbers = []
//     for (let i = start; i <= end; i++) {
//         if (i % 2 === 0) {
//             numbers.push(i)
//         }
//     }
//     return numbers
// }
 
// console.log(getEvenNumber(5, 8));

// function filterArray(numbers, value) {
//     let newArray = []
//     for (let i = 0; i < numbers.length; i ++) {
//         if (numbers[i] > value) {
//             newArray.push(numbers[i])
//         }
//     }
//     return newArray
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

// function checkStorage(storage, item) {
//     const lowerCaseItem = item.toLowerCase();
//     for (let i = 0; i < storage.length; i ++) {
//         const lowerCaseItemStorage = storage[i].toLowerCase();
//         if (lowerCaseItemStorage === lowerCaseItem) {
//             return `${item} is available to order!`;
//         }
//     }
//     return "Sorry! We are out of stock!";
// }

// console.log(checkStorage(["apple", "plum", "pear"], "orange"));
// console.log(checkStorage(["apple", "plum", "pear"], "apple"));
// console.log(checkStorage(["apple", "plum", "pear"], "plum"));
// console.log(checkStorage(["apple", "plum", "pear"], "pear"));
// console.log(checkStorage(["apple", "plum", "pear"], "banana"));

// function foo() {
//     const args = Array.from(arguments)
//     return args.join("-")
// }

// console.log (foo(1,2,3))

// const fcBarcelona = {
//     coach: "Xavi Hernandez",
//     captain: "Sergi Roberto",
//     stadium: "Spotify Camp Nou",

//     trofyes: {
//         championsLeage: 5,
//         laLiga: 26,
//         superCopa: 14,
//         copdDelRey: 31,
//         superCupUefa: 5,
//     },

//     history: {
//         bestPlayerHistory: "Lionel Messi",
//         bestStrikerHistory: "Lionel Messi",
//     },

//     sponsors: {
//         title: "spotify",
//         general: "nike",
//     },

//     bestPlayersNow: {
//         bestPlayerNow: "Frenkie de Jong",
//         bestStrikerLastSeason: "Robert Lewandowski",
//     },

//     derby:  ["Real Madrid", "Atletico Madrid", "Athletic", "Girona", "Espanyol"]

// };

// const keys = Object.keys(fcBarcelona);

// for (const key of keys) {
//   console.log(key + ": " + fcBarcelona[key]);



// const keys = ["coach", "captain", "stadium"]
// const values = ["Xavi Hernandez", "Sergi Roberto", "Spotify Camp Nou"]

// for (const keys in fcBarcelona) {
//   console.log(keys)
//   console.log(fcBarcelona[values])
// }



// const trofyes = fcBarcelona.trofyes;
// const history = fcBarcelona.history;
// const sponsors = fcBarcelona.sponsors;
// const bestPlayersNow = fcBarcelona.bestPlayersNow;
// const derby = fcBarcelona.derby;

// console.log(fcBarcelona);
// console.log(trofyes);
// console.log(history);
// console.log(sponsors);
// console.log(bestPlayersNow);
// console.log(derby);


// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
  
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// apartment.are = 60;
// apartment.room = 3;
// apartment.location = {
//   counrty: "Jamaica",
//   city: "Kingston",
// };



// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = ["descr", "rating", "price"];
// const values = ["Spacious apartment in the city center", 4, 2153];

// for (const keys in apartment) {
//   console.log(keys)
//   console.log(apartment[values])
// }


// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'genres', 'rating']

// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }

//   return null;
// }

// console.log(getProductPrice("Radar"));

// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 1 },
//     { name: "Grip", price: 1200, quantity: 2 },
//     { name: "Scanner", price: 2700, quantity: 1 },
//     { name: "Droid", price: 400, quantity: 4 },
//   ];

//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }

//   // Якщо продукт з такою назвою не знайдений
//   return null;
// }

// // Приклади викликів функції:
// console.log(getProductPrice("Radar"));    // Виведе 1300
// console.log(getProductPrice("Grip"));     // Виведе 1200
// console.log(getProductPrice("Scanner"));  // Виведе 2700
// console.log(getProductPrice("Droid"));    // Виведе 400
// console.log(getProductPrice("Engine"));   // Виведе null


// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 1 },
//     { name: "Grip", price: 1200, quantity: 2 },
//     { name: "Scanner", price: 2700, quantity: 1 },
//     { name: "Droid", price: 400, quantity: 4 },
//   ];

//   for (const product of products) {
//     if (product.name === productName) {
//        return product.price
//     }
//   }
//     return null
// }

// console.log(getProductPrice("Radar"));    // Виведе 1300
// console.log(getProductPrice("Grip"));     // Виведе 1200
// console.log(getProductPrice("Scanner"));  // Виведе 2700
// console.log(getProductPrice("Droid"));    // Виведе 400
// console.log(getProductPrice("Engine"));   // Виведе null

// const gadgetsShelf = {
//     gadgets: [
//         { brend: "apple", type: "smartphone" },
//         { brend: "apple", type: "headphone" },
//     ],

//     changeModel(newName, newType) {
        
//         for (const gadget of this.gadgets) {
//             if (gadget.brend === newName) {
//                 gadget.model = newType
//             }
//         }
//     }
// };

// gadgetsShelf.changeModel("Samsung", "smart watch");

// console.log(gadgetsShelf.gadgets);

// function multiply(...args) {
//     console.log(args)
// }
 
// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// const getUserName = (users) => {
//   return users.map(user => user.name);
// }

// task-1 //

// console.log(
//   getUserNames([
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       balance: 2811
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       balance: 3821
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       balance: 3793
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       balance: 2278
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       balance: 3951
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       balance: 1498
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       balance: 2764
//     },
//   ])
// ); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]

// function registerGuest(name, callback) {
//   console.log(`Registering ${name}`)
//   callback(name)
// }

// registerGuest("Anton", function heet(name) {
//   console.log(`Welcome, ${name}`)
// })

// registerGuest("Alena", function notify(name) {
//   console.log(`Dear ${name}, your room will be ready in 30 minutes!`)
// })

// function registerHotel(name, type, nameHotel, callback) {
//   console.log(`${name}, ваш номер ${type} у готелі ${nameHotel} заброньовано`)
//   callback(name, type, nameHotel)
// }

// registerHotel("Антон", "люкс", "Zbruch Palace", function heet(name, type, nameHotel) {
//   console.log(`Пане ${name}, ласкаво просимо у готель ${nameHotel}!`)
// })


// function calculateTotalPrice(orderedItems) {
//   let total = 0

//   orderedItems.forEach(function(item) {
//    total += item
//   });

//   return total

// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// function filterArray (numbers, value) {

//   let array = []

//   numbers.forEach( function(number) {
//     if (number > value) {
//       array.push(number)
//     }
//   });
//   return array
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));

// const calculateTotalPrice = (quantity, pricePerDroid) => quantity * pricePerDroid;


// console.log(calculateTotalPrice(10, 10));

// const numbers = [1, 2, 3, 4, 5, 6]

// numbers.forEach((number, name) => {
//   console.log(`Name${name}, value ${number}`)
// });

// const calculateTotalPrice = orderedItems => {
//   let total = 0

//   orderedItems.forEach(item => {
//     total += item
//   });
//   return total
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));


// const dirtyMultiply = (array, value) => {

//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value

//   }

// };

// const numbers = [1, 2, 3, 4, 5, 6]
// dirtyMultiply(numbers, 4)

// console.log(numbers)

// const dirtyMultiply = (array, value) => {

//   let newArray = []

//   array.forEach(element => {
//     newArray.push(element * value)
//   });
//   return newArray
// }


// const numbers = [1, 2, 3, 4, 5, 6]
// const doubleNumbers = dirtyMultiply(numbers, 4)

// console.log(doubleNumbers)

// const changeEven = (numbers, value) => {
//   let newArray = []

//   numbers.forEach(even => {
//     if (even % 2 === 0) {
//       newArray.push(even + value)
//     } else {
//       newArray.push(even)
//     }
//   });
// return newArray
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10))

// const planets = ["Земля", "Венера", "Сатурн", "Нептун"]

// const planetsInUpperCase = planets.map(planet => planet.toUpperCase())
// console.log(planetsInUpperCase)

// const planetsinLowerCase = planets.map(planet => planet.toLowerCase())
// console.log(planetsinLowerCase)

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsLengths = planets.map(planet => planet.length);
// console.log(planetsLengths)

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// const best = students.filter(student => student.score >= HIGH_SCORE)
// const worst = students.filter(student => student.score <= LOW_SCORE)

// const avarage = students.filter(({ score }) => score >= LOW_SCORE && score <= HIGH_SCORE);

// console.log(best)
// console.log(worst)
// console.log(avarage)

// const getUsersWithAge = (users, minAge, maxAge) => users.filter(user => user.age >= minAge && user.age <= maxAge);
// console.log(
// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
//   ]);



// const getUserNames = (users) => users.flatMap(user => user.name)
  
//   console.log(
//   getUserNames([
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     balance: 2811
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     balance: 3821
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     balance: 3793
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     balance: 2278
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     balance: 3951
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     balance: 1498
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     balance: 2764
//   },
// ])
// ); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]

//

// const isEveryUserActive = (users) => users.every(user => user.isActive)
// console.log ([
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]);


// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce((total, player) => {
//   return total + player.playtime / player.gamesPlayed
// }, 0);

// console.log(totalAveragePlaytimePerGame);

// const calculateTotalBalance = (users) => users.reduce((total, curr) => {
//   return total + curr.balance;
// }, 0);
// console.log(
// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]);

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

// const ascendingReleaseDates = releaseDates.toSorted((a, b) => a - b);
// console.log(ascendingReleaseDates)

// const descendingReleaseDates = releaseDates.toSorted((a, b) => b - a);
// console.log(descendingReleaseDates)


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = books.filter(book => book.rating > MIN_BOOK_RATING)
//   .map(book => book.author)
//   .toSorted((firstName, secondName) => firstName.author.localeCompare(secondName));

// console.log(names);


// function greet(str) {
//   console.log(`${str}, ${this.username}, your room is ${this.room}!`);
// }

// const mango = {
//   username: "Mango",
// 	room: 27
// };

// const poly = {
//   username: "Poly",
// 	room: 191
// };

// greet.call("Welcome", this.mango)

// function sayHello(greeting) {
//   console.log(`${greeting}, ${this.name}!`);
// }

// const user = {
//   name: "Alice"
// };

// const greet = sayHello.bind(user);

// greet("Hello");

// const customer = {
//   firstName: "Anton",
//   lastName: "Skoromnyi",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// function makeMessage(callback) {

//   const username = callback()
//   console.log(`My name is ${username}`)
// }

// makeMessage(customer.getFullName.bind(customer))

// const library = {
// 	books: 1923,
// 	logBookCount() {
// 		console.log(this.books);
// 	}
// };

// const showBooks = library.logBookCount.bind({ books: 724 });

// showBooks();

"use strict";

// const library = {
// 	books: 1923,
// 	logBookCount() {
// 		console.log(this.books);
// 	}
// };

// function showBooks(callback) {
// 	callback()
// }

// showBooks(library.logBookCount.bind(library))

// const hotel = {
// 	username: "Zbruch Palace",
// 	showThis() {
// 		const foo = () => {
// 			console.log("this in foo:", this)
// 		}

// 		foo()
// 		console.log("this in showThis:", this)
// 	},
// }

// hotel.showThis()

// const animal = {
// 	legs: 4
// }

// const dog = Object.create(animal)
// dog.name = "Mango"

// console.log(dog)
// console.log(dog.name)


// class User {
// 	name;
// 	#email;

// 	constructor({ name, email }) {
// 		this.name = name
// 		this.#email = email
// 	}

// 	getEmail() {
// 		return this.#email
// 	}

// 	changeEmail() {
// 		this.#email = newEmail
// 	}
// }

// const mango = new User({
// 	name: "Mango",
// 	email: "mangoemail@1.com",
// })

// console.log(mango.getEmail())
// mango.changeEmail("mangoemail@2.com")
// console.log(mango.getEmail())

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  static role = {
    BASIC: "basic",
    SUPERUSER: "superuser",
	};
	
 acces

constructor ({email, access}) {
  super(email); 
  this.access = access;
	}
}


const mango = new Admin({
  email: "mango@mail.com",
  access: Admin.role.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.access); // "superuser"
