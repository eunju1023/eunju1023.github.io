
// main banner
$(function () {
  let current = 0;
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
  let interval = setInterval(timer, 4000);

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
      interval = setInterval(timer, 4000);
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

  // event1
$(function () {
  function nextani() {
    $(".event1_banner").animate({ left: "-100%" }, 2000, function () {
      $(".event1_banner li").eq(0).appendTo(".event1_banner");
      $(".event1_banner").stop(1000);

      $(".event1_banner").css({ left: "0" });
      // $(".event1_banner").start;
    });
  }
  function prevani() {
    $(".event1_banner li").eq(2).prependTo(".event1_banner");
    $(".event1_banner").css({left: "-100%" });
    $(".event1_banner").animate({left:"0" }, 2000);
  }
  let inter = setInterval(nextani, 2000);
  $(".event1").hover(
    function () {
      clearInterval(inter);
    },
    function () {
      inter = setInterval(nextani, 2000);
    }
  );
  $(".e_left").click(function () {
    prevani();
  });
  $(".e_right").click(function () {
    nextani();
  });
});

  //event3
  $(window).scroll(function () {
    let scr = $(this).scrollTop();
    console.log(scr);
    if (scr >= 50) {
      $("header").css({
        position: "fixed",
        top: "0",
        zIndex: "10",
        "border-bottom": "1px solid #ddd",
      });
      $("#contents").css({ position: "relative", top: "0px" });
      $(".event3").css({ bottom: "410px" });
    } else {
      $("header").css({ position: "relative", "border-bottom": "none" });
      $("#contents").css({ position: "relative" });
      $(".event3").css({ bottom: "5px" });
    }
  });
});


//meal
$(function () {
  let current = 0;
  $("ul.mealmenu li").eq(0).addClass("on");
  function move(i) {
    if (current == i) return;
    $(".mealpic li")
      .eq(current)
      .css({ left: "0" })
      .animate({ left: "-100%" });
    $(".mealpic li").eq(i).css({ left: "100%" }).animate({ left: "0" });
    current = i;
  }

  $("ul.mealmenu li").click(function (e) {
    e.preventDefault();
    var i = $(this).index();
    $("ul.mealmenu li").removeClass("on");
    $(this).addClass("on");
    move(i);
    // console.log(i);
  });
  let interval = setInterval(timer, 3000);

  function timer() {
    var n = current + 1;
    if (n == $(".mealpic li").length) {
      n = 0;
    }
    $("ul.mealmenu li").eq(n).trigger("click");
  }
  function timer_prev() {
    var n = current - 1;
    if (n == $(".mealpic li").length) {
      n = 0;
    }
    console.log("n :" + n);
    $("ul.mealmenu li").eq(n).trigger("click");
  }
  $(".next").click(function () {
    timer();
  });
  $(".prev").click(function () {
    timer_prev();
  });



  $(".meal").hover(
    function () {
      clearInterval(interval);
    },
    function () {
      interval = setInterval(timer, 3000);
    }
  );
});

