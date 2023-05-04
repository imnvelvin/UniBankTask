let ferdibtn2 = document.querySelector('.ferdi')
let ferdiword2 = document.querySelector('.word')
let biznesbtn2 = document.querySelector('.biznes')
let biznesword2 = document.querySelector('.word2')
let darkmode2 = document.querySelector('#dark')
let body2 = document.querySelector('body')
let ferdislidebtn2 = document.querySelector('#slidebtn')
let biznesslidebtn2 = document.querySelector('.sidebtn')
let ferditext2 = document.querySelector('#ferdi')
let biznestext2 = document.querySelector('#biznes')
// let sidemenu = document.querySelector('#menu')
// let services = document.querySelector('#nav2left')
// let sidebardiv = document.querySelector('.sidediv')


// sidemenu.onclick = function(){
//   // sidebardiv.classList.add('d-block')
//   //  sidebardiv.append(services)

// }
if (localStorage.getItem('cards') === null) {
  localStorage.setItem('cards', JSON.stringify([]))
}

// document.querySelector('#count').innerHTML=JSON.parse(localStorage.getItem('cards')).length

function openNav() {
  document.getElementById("mySidebar").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
}


function light() {
  body2.style.backgroundColor = 'white'
}
function dark() {
  body2.style.backgroundColor = 'black'
}
biznesbtn2.onclick = function () {
  biznesbtn2.classList.add('color')
  ferdibtn2.classList.add('defaultcolor')
  ferdibtn2.classList.remove('color')
}
ferdibtn2.onclick = function () {
  biznesbtn2.classList.remove('color')
  ferdibtn2.classList.add('color')
}

if (localStorage.getItem('cards') === null) {
  localStorage.setItem('cards', JSON.stringify([]))
}
let buttons2 = document.querySelectorAll('#buybtn');
for (let btn of buttons2) {
  btn.onclick = function (e) {
    e.preventDefault();
    let id2 = e.target.parentElement.parentElement.parentElement.id
    console.log(id2);

    let src = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.children[0].src
    console.log(src);
    let title = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML
    console.log(title);
    let info = e.target.parentElement.previousElementSibling.previousElementSibling.innerHTML
    console.log(info);
    let price = e.target.parentElement.previousElementSibling.innerHTML
    console.log(price);
    let cards = JSON.parse(localStorage.getItem('cards'))

    let card = {
      cardId: id2,
      image: src,
      name: title,
      description: info,
      price: price,
      cardCount: 1,
      totalPrice: this.price * this.cardCount
    }
    let existCard = cards.find(card => card.cardId === id2);

    if (existCard === undefined) {
      cards.push(card);
      document.querySelector('.say ').innerHTML = Number(document.querySelector('.say').innerHTML) + 1
      localStorage.setItem("cards", JSON.stringify(cards))

    } else {

      existCard.cardCount = Number(existCard.cardCount) + 1;
    }

    localStorage.setItem('cards', JSON.stringify(cards));


  }


}