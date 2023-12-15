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


