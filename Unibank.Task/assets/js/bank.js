$('.bankingslider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  autoplay: false,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
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

  // $(window).load(function(){
  //   $(".col-lg-3 input").val("");

  //   $(".input-effect input").focusout(function(){
  //     if($(this).val() != ""){
  //       $(this).addClass("has-content");
  //     }else{
  //       $(this).removeClass("has-content");
  //     }
  //   })
  // });

let buttons = document.querySelectorAll('.allbuttons button');
for (let btn of buttons) {
   btn.onclick = function(){
    let active = document.querySelector('.active')
    active.classList.remove('active')
    this.classList.add('active')
   }

}
let infoicon = document.querySelector('#infoicon')
let vesiqe = document.querySelector('.vesiqe')
infoicon.onmouseover= function(e){
  e.preventDefault();
   vesiqe.style.display = "block"
}
infoicon.onmouseout = function(e){
  e.preventDefault();
  vesiqe.style.display = "none"
}

