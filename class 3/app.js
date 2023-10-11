var cleanestCities = [
    "Cheyenne", "cheyenne", "Santa Fe", "santa fe", "Tucson", "karachi", "tucson", "Great Falls", "great falls", "Honolulu", "honolulu"
];
var isFound = false
// / console.log(cleanestCities[0])
function search() {
    let userQuery = document.getElementById("city").value;
    userQuery = userQuery.toLowerCase();
    for (var i = 0; i < cleanestCities.length; i++) {
        if (cleanestCities[i] === userQuery) {
            // console.log("Yes You are in the cleanest city");
        //  <h1></h1> 
        // assign operator
           document.getElementById("result").innerHTML = " \n Yes You are in the cleanest city  "
           isFound = true;
        } 
        // else {
        //     // console.log("No you are not in the cleanest city!")
        //     document.getElementById("result").innerHTML = "No you are not in the cleanest city!";
        // }

    }
    if(isFound === false){
        document.getElementById("result").innerHTML = "No you are not in the cleanest city!";
    }
}