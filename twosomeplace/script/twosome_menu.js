
// main banner
$(function () {
    let current = 0;
    $("ul.title_sub li a").eq(0).addClass("on");
    $("ul.mainmenu li").eq(0).addClass("on");
    function move(i) {
      if (current == i) return;
      $("#main ul.mainb li")
        .eq(current)
        .css({ left: "0" })
        .animate({ left: "-1920px" });
      $("#main ul.mainb li").eq(i).css({ left: "1920px" }).animate({ left: "0" });
      current = i;
    }
  
    $("ul.mainmenu li").click(function (e) {
      e.preventDefault();
      var i = $(this).index();
      $("ul.mainmenu li").removeClass("on");
      $(this).addClass("on");
      move(i);
      // console.log(i);
    });
    let interval = setInterval(timer, 3000);
  
    function timer() {
      var n = current + 1;
      if (n == $("#main ul.mainb li").length) {
        n = 0;
      }
      $("ul.mainmenu li").eq(n).trigger("click");
    }
    function timer_prev() {
      var n = current - 1;
      if (n == $("#main ul.mainb li").length) {
        n = 0;
      }
      console.log("n :" + n);
      $("ul.mainmenu li").eq(n).trigger("click");
    }
    $(".next").click(function () {
      timer();
    });
    $(".prev").click(function () {
      timer_prev();
    });
  
  
  
    $("#main").hover(
      function () {
        clearInterval(interval);
      },
      function () {
        interval = setInterval(timer, 3000);
      }
    );
  
  
    //gnb
    $(".gnb2").css("display", "none");
    $(".gnb,.gnb2").hover(
      function () {
        $(".gnb2").stop().slideDown();
      },
      function () {
        $(".gnb2").stop().slideUp();
      }
    );
    $(".gnb2>ul>li").hover(
      function () {
        let i = $(this).index();
        $(".gnb li").eq(i).find("a").addClass("on");
      },
      function () {
        $(".gnb li a").removeClass("on");
      }
    );
  
    
  });
  
  
  
  
  
  
  
  
  
  
  