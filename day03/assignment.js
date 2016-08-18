var name = prompt("What is your name?");
name = capitalize(name);
function capitalize(x) {
  return x.charAt(0).toUpperCase() + x.substr(1, x.length);
}
console.log(name)
alert("Your name is " + capitalize(name));
