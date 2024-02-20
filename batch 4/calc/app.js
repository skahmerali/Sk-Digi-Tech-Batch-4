// function btnn(num){
//     console.log(num)
//     document.getElementById('inpVal').value += num

// }

// function result(){
//   var result =   document.getElementById('inpVal')
//     result.value = eval(result.value)
// }


function readMore(){
       var pera = document.getElementById('pera')
       pera.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit.! Minus eaque consequuntur aliquid? Sunt asperiores architecto explicabo natus quam sit iure soluta dolor quia voluptas dignissimos, dolorum hic velit tempora quae"
       pera.style.color = "red"
}

// function image(){
//    var img =   document.getElementById('img')
//    img.className += " box"
//    console.log(img);

// }

function over(){
 var img=  document.getElementById('img')
    img.src = './download (1).jpg'
    // img.className = "box"
    img.style.border = '2px solid green'
    // img.style.borderRadius = '8px'
}
function out(){
    var img = document.getElementById('img')
    img.src = './download.jpg'
}



