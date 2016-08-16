// var userFav = prompt('How old are you?');
// alert(userFav);

// var firstName = prompt('What is your first name?');
// var lastName = prompt('What is your last name?');
// var goodJob = "Good Job";
// console.log(firstName);
// alert(lastName);
// confirm('Have you entered your correct name?' + firstName + ' ' + lastName);
// alert(goodJob);
//
// var a = 'test' + 'string';
// var b = 5;
// var c = '5';
// var d = 10 / 2 + 3 * 90 / 6 + 3;
// d++;
//
// var e = b === c;
//
// var constant = 15;
// var x = '10';
// var userQ = prompt('Choose a number');
// userQ = parseInt(userQ);
// console.log(userQ);
//
// // if (false)( isNaN(userQ) ){
// //   alert('Was that a number?');
// // }
// //
// // }else{
// //   alert('Your number is ' + userQ);
// // }
// // userQ = parseInt(userQ);
//
// // console.log( isNaN('NaN') );
//
// var userPrompt = prompt('What is your age');
// var userGen = prompt('What is your gender');
//
// if(userPrompt >= 21 && gender =='male') {
//   alert ('drink up');
// }else{
//   alert ('no no no no');
// }
//
// var male = 'male';
// var female = 'female';
//
// if(userGen === male) {
//   alert('go dude');
// }

// var firstName = prompt('What is your first name?');
// var lastName = prompt('What is your last name?');
// console.log(lastName);
// alert('Your last name is ' + lastName + '!');
// confirm('Please confirm your full name is ' + firstName + ' ' + lastName + '!')

//
// //Number enter
// var x = prompt('Please enter the number 10!');
// x = parseInt(x);
// if(x === 10){
//   alert('good job!');
// }else{
//   alert('You suck');
// }
// var y = prompt('Please enter the number 10!');
// y = parseInt(y);
//
// if(y===10){
//   alert('good job again!');
// }else{
//   alert('seriously?');
// }
// alert('Your total is ' + (x + y));
//
// if(x + y != 20){
//   alert('Please refresh the page and enter the numbers properly.');
// }
//
// if(NaN){
//   alert('Please refresh the page and try to enter numbers, ya doofus.');
// }
//
// if(x + y === 20){
//   alert('great job, you can follow instructions!');
// }


//AGE VERIFICATION
// var age = prompt('What is your age?');
//
//
// if(age < 18){
//   var gender = prompt("Are you male or female?")
//   console.log('a is less than 18');
//   if(gender == "male" || gender == "m"){
//     alert("Go outside and play with your guy friends");
//   }else if(gender == "female" || gender == "f"){
//     alert("Go outside and play with your lady friends");
//   }else{
//     alert("You seem gender confused.")
//   }
// }
//
//
// if(age >= 21){
//   alert("Have a smoke and a beer!");
//   console.log('age is greater than or equal to 21')
// }
// if(age >= 18 && age < 21){
//   alert("Have a smoke but not a drink!");
// }

//ASSIGNMENT
var question = prompt("What is something you like to do?")
console.log('The user likes to ' + question);
if (question === "" || question === null) {
  prompt("Let's try that again. What is something you like to do?");
} else {
  alert("So you like to " + question + "? " + "Wow, you're so neat!");
}
