// var students = {
//     name:"Ahsan",
//     fatherName:"Mushtaq",
//     class:'Web Developement',
// }

// students.months = [1,2,3]

// console.log(students.months[0]);

// var deal = {};

// deal.name = "premium"
// deal.cost = 79
// deal.features = ["Gurentee", "Free Ship"]
// deal.memberShip = false

// console.log(deal);

// delete deal.cost

// console.log(deal);

// var propertyExists = "cost" in deal;

// console.log(propertyExists);

// console.log((3.99 * .8 )* 12);

// var plan1 = {
//   name: "Basic",
//   price: 3.99,
//   space: 100,
//   transfer: 1000,
//   pages: 10,
//   discountMonths: [6,11],
// };

// console.log(3.99 * 12);
// console.log((3.99 * 8) * 12 / 47.88);

// function calcAnnual () {
//     var bestPrice = plan1.price;
//     var currentDate = new Date();
//     var thisMonth = currentDate.getMonth();
//     for(var i = 0; i < plan1.discountMonths.length; i++){
//            if(plan1.discountMonths[i] === thisMonth){
//                 bestPrice = plan1.price *.8

//                 break;
//            }
//     }

//     return bestPrice * 12

// }


// var result = calcAnnual();

// console.log(result);

// console.log("helo");

// var firstName = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// var lastName = ["Zzz", "Burp", "Dogbone", "Droop"]
// var fullName = []
// for(i=0; i< firstName.length; i++){
//   for(j=0; j< lastName.length; j++){
//     fullName.push(firstName[i] + lastName[j])
//     console.log(firstName[i] + lastName[j]);
//   }
// }
// console.log(fullName);


// var text = "sAQIB";

// var firstLatter  = text.slice(0,1).toLocaleUpperCase();
// console.log(firstLatter);
// var allWords = text.slice(1).toLocaleLowerCase();
// console.log(allWords);
// var result = firstLatter + allWords
// console.log(result);



// var text = prompt('enter trext');

// for(i=0;i<text.length;i++){
//   console.log(text.slice(i,i+2));
// if(text.slice(i,i+2) === "  "){
//   alert("no double space")
//   break
// }
// }

var text = "The New Yorker magazine doesn't allow the phrase World War II.They say it should be.World War II";
// console.log(text.indexOf('World War II'));
// var changeName = 'World War II';
// var changeName2 = 'the Second World War';
// for(i=0;i<text.length;i++){
//   if(text.slice(i,i+12) === changeName){
//     text = text.slice(0,i) + changeName2 + text.slice(i+12)
//   }


// }


// var chr = text.indexOf('World War II');

// if(chr !== -1){
//   text = text.slice(0,chr)+ " the second world war " + text.slice(chr + 12)
// }

// console.log(text);





// var text = "saqib";
// // console.log(text.charAt(text.length -1));
// for (i=0;i<text.length;i++){
//   if(text.charAt(i) === "!"){
//     alert("Exclamation point found!")
//   }
// }






function reverseWords(str) {
    // Split the string into an array of words
    let words = str.split(" ");
    // Iterate through the array and reverse words with five or more letters
    for (let i = 0; i < words.length; i++) {
      console.log(words[i].split('').reverse());
        if (words[i].length >= 5) {
            words[i] = words[i].split("").reverse().join("");
        }
    }

    // Join the array back into a string
    return words.join(" ");
}

// Example usage:
let inputString = "Hello World JavaScript";
let result = reverseWords(inputString);
console.log(result);












