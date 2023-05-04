let ferdiword = document.querySelector('.word')
let biznesbtn = document.querySelector('.biznes')
let biznesword = document.querySelector('.word2')
let darkmode = document.querySelector('#dark')
let body = document.querySelector('body')
let ferdislidebtn = document.querySelector('#slidebtn')
let biznesslidebtn = document.querySelector('.sidebtn')
let ferditext = document.querySelector('#ferdi')
let biznestext = document.querySelector('#biznes')
// let sidemenu = document.querySelector('#menu')
// let services = document.querySelector('#nav2left')
// let sidebardiv = document.querySelector('.sidediv')


// sidemenu.onclick = function(){
//   // sidebardiv.classList.add('d-block')
//   //  sidebardiv.append(services)

// }
function openNav() {
  document.getElementById("mySidebar").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
}
function light() {
  body.style.backgroundColor = 'white'
}
function dark() {
  body.style.backgroundColor = 'black'
}
biznesbtn.onclick = function () {
  biznesbtn.classList.add('color')
  ferdibtn.classList.add('defaultcolor')
  ferdibtn.classList.remove('color')
}
// ferdibtn.onclick = function(){
//     biznesbtn.classList.remove('color')
//     ferdibtn.classList.add('color')
// }
$('.slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
let buttons = document.querySelectorAll('.buttons button')
let button1 = document.querySelector('.button1');
let button2 = document.querySelector('.button2');
let button3 = document.querySelector('.button3');
let usdtext = document.querySelector('#usd')
let eurotext = document.querySelector('#euro')
let rubtext = document.querySelector('#rub')
let gbptext = document.querySelector('#gbp')
// let mobiledesign = document.querySelector('.changebuttonmobile')
// let defaultbutton = document.querySelector('.defaultbuttonmobile')
button1.onclick = function () {
  usdtext.innerHTML = "USD 1.6970▾ 1.7015▾"
  eurotext.innerHTML = "EUR 1.8463▾ 1.9040▾"
  rubtext.innerHTML = "RUB 0.0200▾ 0.0213▾"
  gbptext.innerHTML = "GBP 2.0901▾ 2.1580▾"

  button2.classList.remove('changebuttonmobile')
  button1.classList.remove('defaultbuttonmobile')
  button3.classList.add('defaultbuttonmobile')
}
button2.onclick = function () {
  usdtext.innerHTML = "USD 1.6900▾ 1.7025▾"
  eurotext.innerHTML = "EUR 1.8523▾ 1.9117▾"
  rubtext.innerHTML = "RUB 0.0200▾ 0.0216▾"
  gbptext.innerHTML = "GBP 2.0901▾ 2.1580▾"
  button2.classList.add('changebuttonmobile')
  button1.classList.add('defaultbuttonmobile')
  button3.classList.remove('changebuttonmobile')
}
button3.onclick = function () {
  usdtext.innerHTML = "USD 1.6915▾ 1.7100▾"
  eurotext.innerHTML = "EUR 1.8598▾ 1.8974▾"
  rubtext.innerHTML = "RUB 0.0205▾ 0.0213▾"
  gbptext.innerHTML = "GBP 2.1007▾ 2.1431▾"

  button2.classList.remove('changebuttonmobile')
  button1.classList.add('defaultbuttonmobile')
  button3.classList.remove('defaultbuttonmobile')
}

let moon = document.querySelector('#moon');
moon.onclick = function (e) {
  e.preventDefault();
  document.body.classList.toggle('dark-theme')
}