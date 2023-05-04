let buttons = document.querySelectorAll('.allbuttons button');
for (let btn of buttons) {

    btn.onclick = function (e) {
        e.preventDefault();
        let active = document.querySelector('.active')
        active.classList.remove('active');
        this.classList.add('active');
    }

}
    let iframeunibankvideo = document.querySelector('#iframeunibank');
    iframeunibankvideo.style.display ="none"

let playicon = document.querySelector('#playicon');
console.log(playicon);
let videodiv  = document.querySelector('.videodiv');
  
    playicon.onclick = function(){
        iframeunibankvideo.style.display ="block";
        playicon.style.display ="none";
        iframeunibankvideo.src = "https://www.youtube.com/embed/ricGtmUDcLU?autoplay=1";
        videodiv.style.marginBottom = "80px";

    }
