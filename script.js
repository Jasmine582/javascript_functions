//Write a Function
const startMyDay = function () {
  return "Time to Mediate";
};
console.log(startMyDay());

//Function with 1 parameter
const favoriteCookie = function (cookie) {
  return `My favorite cookie is ${cookie}`;
};
console.log(favoriteCookie("chocolate chip"));

//Function with 2 paramerters
const introduce = function (name, occupation) {
  return `My name is ${name} and my occupation is ${occupation} nice to meet ya!`;
};
console.log(introduce("Jasmine", "Frontend Developer"));
//Function to Capture Input and adding a conditional block
const hydrationFeedback = function () {
  const numGlasses = Number(
    prompt("How many glasses of water did you have today?")
  );
  if (numGlasses >= 8) {
    console.log("You're a Water Rockstar!!");
  } else {
    console.log("Not bad, not bad. Let's try for a bit more tomorrow!");
  }
};
hydrationFeedback();
