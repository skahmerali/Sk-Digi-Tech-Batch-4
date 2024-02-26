// var userData = Number(prompt("Enter a number to get reversed table."))

// for (i = userData; i >= 1; i--) {
//     for (j = 1; j <= 10; j++) {
//         document.write(i + " X " + j + " = " + i * j)
//         document.write("<br>")
//         if (j === 5) {
//             for (k = 1; k <= 4; k++) {

//                 document.write(i + " X " + j + " = " + i * j)
//                 document.write("<br>")
//             }
//         }
//     }
// }


// var userinput = (prompt("Enter a value"));
// var userResult="" ;
// for(i=userinput.length -1; i=0; i-- ){
//     userResult =

// }
// if(userinput===){
//     alert("This is a reverse word")
// }
// else{
//     alert("This is not reverse")
// }

var user = prompt("What Is Your Weight")
result = "";

for (i = 0; i <user.length; i++){
    if(!isNaN (user[i]) || (user[i] === ".")) {
        result += user[i]

    }

}
if(result !== ""){
    document.write("Usere Weight Is " + result + "Kilograms" )
}else{
    document.write("The Weight Not Found")
}




