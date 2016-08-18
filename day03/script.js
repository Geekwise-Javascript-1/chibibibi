//string object
// var str = '     Charlie      ';
// var newStr = str;
// console.log(str.trim());
// console.log(newStr)

//math object
// var randNum = Math.floor( Math.random() * 100 ); /*rounding a number (Think PEMDAS) */
// console.log(randNum);

//date object
// var today = new Date;
// console.log(today.toLocaleString()

/*locale = 'en-us';
var toDay = new Date;
console.log(toDay);
console.log(toDay.toLocaleString(locale,{month:"long"})+' '+toDay.getDate()+', '+toDay.getFullYear());*/

//simple function
// var firstName = prompt("What is your first name?");
// var lastName = prompt("What is your last name?");
// var userColor = prompt("What is your favorite color?");
//
//       /*Parameter goes in the () next to the function name*/
// function setBirthday(first, last, color){ //Parameters
//   // var birthday = new Date(1989, 10, 3);
//   alert(first
//     + " "
//     + last
//     + "s"
//     // + " "
//     // + "birthday is "
//     // + birthday
//     + " favorite color is "
//     + color )
// }
// setBirthday('userColor, firstName, lastName'); //Arguments
// console.log(firstName, lastName, userColor)




//user prompt
var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");
var userBday = prompt("birthday");
var userColor = prompt("What is your favorite color?");

function setBday(uF, uL, uB, uC) {
  console.log(uB);
  var bDayArr = uB.split(' ');

  // console.log(uF + " " + uL + " " + uB + " " + ". Your color is " + uC);
}
setBday(firstName, lastName, userBday, userColor);
