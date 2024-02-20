// var cityName  = "arachi";

// var extract  =  cityName.slice(0,1).toUpperCase()
// console.log(extract);


// var userName = prompt('enter your name ')
// console.log(userName);

// var firstChar = userName.slice(0,1).toUpperCase();

// var lastChar = userName.slice(1).toLowerCase();
//  console.log(firstChar + lastChar);


var text  = "The New Yorker magazine doesn't allow the phrase World War II. They say it should be World War II"

// console.log(text);
// var copy  = text.slice(49,61)
// // console.log(copy);
var repChar = "the Second World War"

// for(var i = 0; i <= text.length ; i++){
//     if(text.slice(i,i+12) === "World War II" ){
//     text = text.slice(0,i) + repChar + text.slice(i+12)
//     // text = "The New Yorker magazine doesn't allow the phrase " + "the Second World War" + ". They say it should be"
//     }
// }

text = text.replace("World War II", "the Second World War");
var num = 1.1
// console.log(Math.round(num));
// console.log(Math.ceil(num));
// console.log(Math.floor(num));
var rem = Math.random() * 6
var round = Math.round(rem)
console.log(round);