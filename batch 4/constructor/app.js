

// function Students( fname,femail,fcontact){
//     this.name = fname,
//     this.email = femail,
//     this.contact  = fcontact
// }

// var student1 = new Students("saqib1" , "saqib@gmail.com", "1231341341241")
// var student2 = new Students("saqib2" , "saqib@gmail.com", "1231341341241")
// var student3 = new Students("saqib3" , "saqib@gmail.com", "1231341341241")
// var student4 = new Students("saqib4" , "saqib@gmail.com", "1231341341241")

// console.log(student1);
// console.log(student2);
// console.log(student3);
// console.log(student4);

// function Plan(name, price, space, transfer, pages) {
//      this.name = name;
//      this.price = price;
//      this.space = space;
//      this.transfer = transfer;
//      this.pages = pages;
     
//      }    

//      Plan.prototype.email = "saqib@gmail.com"


//      var standard1 = new Plan("Basic","3.99","2GB","10","10")
//      var standard2 = new Plan("professinol","3.99","2GB","10","10")
//      var standard3 = new Plan("Ultimate","3.99","2GB","10","10")


//      console.log(standard1);
//      console.log(standard2);
//      console.log(standard3);

//    var plan1 = {
//     name:"saqib",
//     email:"saqib@gmail.com",
//     cont:"123123"
//    }

//    var check = "constructor" in plan1
//    console.log(check);
//    var hash = plan1.hasOwnProperty("constructor")
//    console.log(hash);

//    for(var get in plan1){
//     console.log(get,plan1[get]);
//    }

console.log( window.location.hash);

function set(){
    var fb = "facebook"
    window.location.href = "https://"+fb+".com"
}
