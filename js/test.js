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

function slugify(title) {
    return title.toLowerCase();
}

console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"