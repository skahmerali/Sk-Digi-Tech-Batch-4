// const li = document.getElementsByTagName('li');

// const liElements = li.length;

// for(var i =0; i < liElements; i++){
//     if(li[i].innerHTML === ''){
//         li[i].innerHTML = 'Comming Soon'
//     }
// }

// const target = document.getElementById('paragraph');

// const hasattr = target.hasAttribute('id');

// console.log(hasattr);

// const attrval = target.getAttribute('id');

// console.log(attrval);

// target.setAttribute('class', 'para');
// const hasClass = target.hasAttribute('class');
// console.log(hasClass);

// const target1 = document.getElementById('paragraph').attributes;

// console.log(target1);

// const div = document.getElementById('div');

// const h1 = document.createElement('h1');

// const h1val = document.createTextNode('Welcome To Sk Digi Tech') ;

// h1.appendChild(h1val);

// div.appendChild(h1)

// console.log(h1);

const div = document.getElementById('div');

// const h1 = document.createElement('h1');

// const h1Txt = document.createTextNode("Hello World!");

// h1.appendChild(h1Txt);;

// div.appendChild(h1)
console.log(document);

var h1 = document.createElement('h1');

function clickMe(){
    var h1Txt = document.createTextNode(document.getElementById('input').value)
    h1.appendChild(h1Txt);

    var btn = document.createElement('button');
    btn.setAttribute('onclick', `Red()`)
    var btnTxt = document.createTextNode('Red');
    btn.appendChild(btnTxt)
    div.appendChild(h1)
    div.appendChild(btn)

    

}

function Red() {
    h1.setAttribute('class', 'red')
}






