

var typed = new Typed(".typing",{
  strings : ['Devloper',"Editor","Blogger","designer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
}
);

var typed = new Typed(".typing-2",{
  strings : ['Html',"Css","Javascript","React"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
}
);


$(document).ready(function(){

    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    });
  
    $(window).on('scroll load',function(){
  
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
  
      if($(window).scrollTop() > 0){
        $('.top').show();
      }else{
        $('.top').hide();
      }
  
    });
  
  
    $('a[href*="#"]').on('click',function(e){
  
      e.preventDefault();
  
      $('html, body').animate({
  
        // scrollTop : $($(this).attr('href')).offset().top,
  
      },
        500, 
        'linear'
      );
  
    });
  
  });

  const num = [1,2,3,4,5,6,7,8,9,10]
  console.log(num)