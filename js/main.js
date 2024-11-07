$(function () {

  
    

  //fullpage
  let documentWidth = $(window).width();
  //모바일을 제외한 기기에서는 fullpage 적용
  if (documentWidth >= 481) {
      let page = $(".wrap").fullpage({
          menu:'header'
      });
      //nav
      $('nav ul li').mouseover(function(){
        $(".sub").stop().slideDown();
        $(".sub").css("z-index",9);
        $(this).find(".sub").css("z-index",10);  
      });
      $("nav").mouseleave(function(){
        $(".sub").stop().slideUp();
      }); 
  }
  else {
    //모바일에서 메뉴 버튼 클릭하면 아코디언 메뉴 실행
    $('nav > ul > li .navMenu').click(function(){
      $(this).next().slideToggle();
      $(this).toggleClass("active");
      $('nav > ul > li .navMenu').not(this).next().slideUp();
      $('nav > ul > li .navMenu').not(this).removeClass("active");
    });
    $(".mobile-top-menu").click(function(){
      $("nav").animate({left:0});
    });
    $(".close-btn").click(function(){
      $("nav").animate({left:"-100%"});
    });
  }


  //s1
  //main siwper slide
  let mainswiper = new Swiper(".mainSwiper", {
    loop: true,
    touchRatio:0,
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
      type: "bullets"
    }
  });

  let m_mainswiper = new Swiper(".m_mainSwiper", {
    loop: true,
    touchRatio:0,
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
      type: "bullets"
    },
    autoplay: {
      delay:3000
    }
  });

  //s2
  //tab menu
  $('.tab-content > div').hide();
  $('.tab-content > div:first').show();
  $('a').click(function(e){
    e.preventDefault();
  })
  $('.tab-title ul li').click(function(){
    $('.tab-title ul li').removeClass('active');
    $(this).addClass('active');
    $('.tab-content > div').hide();
    let at = $(this).find('a').attr('href');
    $(at).show();
  });
  
  //tabSwiper slide
  let tabSwiper1 = new Swiper(".tabSwiper1", {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: "#t1 .swiper-button-next",
      prevEl: "#t1 .swiper-button-prev",
    },
    breakpoints:{
      1200:{
          slidesPerView:4,
          spaceBetween: 20
      },
      1024:{
          slidesPerView:2,
          spaceBetween: 20
      },
      768:{
          slidesPerView:2,
          spaceBetween: 20
      },
      480:{
          slidesPerView:1,
          spaceBetween: 20
      },
      360:{
          slidesPerView:1,
          spaceBetween: 20
      }
    }
  });

  let tabSwiper2 = new Swiper(".tabSwiper2", {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: "#t2 .swiper-button-next",
      prevEl: "#t2 .swiper-button-prev",
    },
    breakpoints:{
      1200:{
          slidesPerView:4,
          spaceBetween: 20
      },
      1024:{
          slidesPerView:2,
          spaceBetween: 20
      },
      768:{
          slidesPerView:2,
          spaceBetween: 20
      },
      480:{
          slidesPerView:1,
          spaceBetween: 20
      },
      360:{
          slidesPerView:1,
          spaceBetween: 20
      }
    }
  });
  let tabSwiper3 = new Swiper(".tabSwiper3", {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: "#t3 .swiper-button-next",
      prevEl: "#t3 .swiper-button-prev",
    },
    breakpoints:{
      1200:{
          slidesPerView:4,
          spaceBetween: 20
      },
      1024:{
          slidesPerView:2,
          spaceBetween: 20
      },
      768:{
          slidesPerView:2,
          spaceBetween: 20
      },
      480:{
          slidesPerView:1,
          spaceBetween: 20
      },
      360:{
          slidesPerView:1,
          spaceBetween: 20
      }
    }
  });
  let tabSwiper4 = new Swiper(".tabSwiper4", {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: "#t4 .swiper-button-next",
      prevEl: "#t4 .swiper-button-prev",
    },
    breakpoints:{
      1200:{
          slidesPerView:4,
          spaceBetween: 20
      },
      1024:{
          slidesPerView:2,
          spaceBetween: 20
      },
      768:{
          slidesPerView:2,
          spaceBetween: 20
      },
      480:{
          slidesPerView:1,
          spaceBetween: 20
      },
      360:{
          slidesPerView:1,
          spaceBetween: 20
      }
    }
  });
  




  // const tabSlider = () => {
  //   //tabSwiper 4개를 $tabSwiper변수에 저장
  //   let $tabSwiper = $(".tabSwiper");
  //   //.tab 안의 prev, next 버튼들을 $prevArrow, $nextArrow에 저장
  //   let $prevArrow = $(".tab .swiper-button-prev");
  //   let $nextArrow = $(".tab .swiper-button-next");
  //   //tabSwiper개수만큼 반복
  //   $tabSwiper.each(function(index){
  //     //tabSwiper 1개씩 다시 $slider변수에 저장
  //     let $slider = $(this);
  //     //tabSwiper에 .swiper-slide가 1개 이상 있는지 검사하는 변수
  //     let sliderLength = $slider.find("> div > *").length;
  //     //loop:true (무한반복-> 총 슬라이드개수가 4개라면 1,2,3,4,1,2,3,4..)
  //     //let loopEnabled = (sliderLength > 1);
  //     const swiper = new Swiper(this, {
  //       spaceBetween:20,
  //       navigation:{
  //         prevEl:$prevArrow[index],
  //         nextEl:$nextArrow[index]
  //       },
  //       breakpoints:{
  //         1200:{
  //             slidesPerView:4,
  //             spaceBetween: 20
  //         },
  //         1024:{
  //             slidesPerView:2,
  //             spaceBetween: 20
  //         },
  //         768:{
  //             slidesPerView:2,
  //             spaceBetween: 20
  //         },
  //         480:{
  //             slidesPerView:1,
  //             spaceBetween: 20
  //         },
  //         360:{
  //             slidesPerView:1,
  //             spaceBetween: 20
  //         }
  //       }
  //     });
  //   });
  // }
  // $(window).on("load", tabSlider);




  //s3
  //eventSwiper slide
  let eventSwiper = new Swiper(".eventSwiper", {
    slidesPerView: 3,
    // spaceBetween: 10,
    navigation: {
      nextEl: ".event .swiper-button-next",
      prevEl: ".event .swiper-button-prev",
    },
    breakpoints:{
      1200:{
          slidesPerView:3
      },
      1024:{
          slidesPerView:3
      },
      768:{
          slidesPerView:3
      },
      480:{
          slidesPerView:2
      },
      360:{
          slidesPerView:2
      }
    }
  });


  //s4
  $(".faq > ul > li > a").click(function(){
    if($(this).attr('class') != 'active') {
      $('.faq > ul > li > a').next().slideUp();
      $('.faq > ul > li > a').find(".arrow").css("transform", "rotateX(0)");
      $('.faq > ul > li > a').removeClass('active');
      $(this).addClass('active');
      $(this).next().slideDown();
      $(this).find(".arrow").css("transform", "rotateX(180deg)");
    }
    else{
      $(this).removeClass('active');
      $(this).next().slideUp();
      $(this).find(".arrow").css("transform", "rotateX(0)");
    }
  });
  

  //s5 video
  //tap menu
  const video = document.querySelectorAll('.video-title ul li');
  video.forEach(function(els,index){
    els.addEventListener('click',function(){
      tabChange((index+1));
      //유튜브 멈춤
      $('#youtube1')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
      $('#youtube2')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
      $('#youtube3')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');    
      $('.play1').show();
      $('.play2').show();
      $('.play3').show();
      $('.video-box > .youtube-img1').show();
      $('.video-box > .youtube-img2').show();
      $('.video-box > .youtube-img3').show();
    });
  });
  function tabChange(num){
    document.querySelector('.video-con.active').classList.remove('active');
    document.querySelector('.video-con' + num).classList.add('active');
  }
  
  //s5 youtube play
  $('.play1').click(function(e){
    e.preventDefault();
    $("#youtube1")[0].src += "&autoplay=1&mute=1";
    $(this).hide(); 
    $('.video-box > .youtube-img1').hide(); 
    $('.video-box > .youtube-img2').show();
    $('.video-box > .youtube-img3').show();
  });
  $('.play2').click(function(e){
    e.preventDefault();
    $("#youtube2")[0].src += "&autoplay=1&mute=1";
    $(this).hide(); 
    $('.video-box > .youtube-img2').hide(); 
    $('.video-box > .youtube-img1').show();
    $('.video-box > .youtube-img3').show();
  });
  $('.play3').click(function(e){
    e.preventDefault();
    $("#youtube3")[0].src += "&autoplay=1&mute=1";
    $(this).hide();    
    $('.video-box > .youtube-img3').hide(); 
    $('.video-box > .youtube-img1').show();
    $('.video-box > .youtube-img2').show();
  });

  //family
  let sw = 0;
  $(".family").click(function(e){
    e.preventDefault();
    if(sw == 0) {
      sw = 1;
      $(this).find("span").css("transform", "rotateX(180deg)");
      $(".family-site").stop().slideDown();
    }
    else {
      sw = 0;
      $(this).find("span").css("transform", "rotateX(0)");
      $(".family-site").stop().slideUp();
    }
  });

});
