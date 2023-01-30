//네비게이션
$(function () {
  $(".lnb_wrap").css("display", "none");
  $(".gnb li").hover(
    function () {
      $(".lnb_wrap").stop().slideDown(300);
    },
    function () {
      $(".lnb_wrap").stop().slideUp(300);
    }
  );
  $(".lnb li").hover(
    function () {
      $(".lnb_wrap").stop().slideDown(300);
    },
    function () {
      $(".lnb_wrap").stop().slideUp(300);
    }
  );
  $(".lnb>ul>li").hover(
    function () {
      let i = $(this).index();
      $(".gnb li").eq(i).find("a").addClass("on");
    },
    function () {
      $(".gnb li a").removeClass("on");
    }
  );
});


//new
$(function () {
  let current = 0;
  function move(i) {
    if (current == i) return;
    $(".visual>ul:first>li")
      .eq(current)
      .css({ marginLeft: "0" })
      .animate({ marginLeft: "-500px" });
    $(".visual>ul:first>li")
      .eq(i)
      .css({ marginLeft: "500px" })
      .animate({ marginLeft: "0" });
    current = i;
  }

  $(".sir2>li").click(function (e) {
    e.preventDefault();
    var i = $(this).index();
    $(".sir2>li").removeClass("on");
    $(this).addClass("on");
    move(i);
    console.log(i);
  });
  let interval = setInterval(timer, 3000);

  function timer() {
    var n = current + 1;
    if (n == $(".visual>ul:first>li").length) {
      n = 0;
    }
    $(".sir2>li").eq(n).trigger("click");
  }
  function timer_prev() {
    var n = current - 1;
    if (n == $(".visual>ul:first>li").length) {
      n = 0;
    }
    console.log("n :" + n);
    $(".sir2>li").eq(n).trigger("click");
  }
  $(".next").click(function () {
    timer();
  });
  $(".prev").click(function () {
    timer_prev();
  });

  $(".sir2, #btn").hover(
    function () {
      clearInterval(interval);
    },
    function () {
      interval = setInterval(timer, 3000);
    }
  );
});
//news
$(function () {
  let news = 0;
  function move(i) {
    if (news == i) return;
    $(".news>ul:first")
      .eq(news)
      .css({ left: "0" })
      .animate({ marginLeft: "-500px" });
    $(".news>ul:first")
      .eq(i)
      .css({ marginLeft: "500px" })
      .animate({ marginLeft: "0" });
    news = i;
  }
  $(".sir1>ul>li").eq(0).addClass("on");
  $(".sir1>ul>li").click(function (e) {
    e.preventDefault();
    var i = $(this).index();
    $(".sir1>ul>li").removeClass("on");
    $(this).addClass("on");
    move(i);
    console.log(i);
  });
  let interval = setInterval(news_timer, 3000);

  function news_timer() {
    var n = news + 1;
    if (n == $(".news>ul").length) {
      n = 0;
    }
    $(".sir1>ul>li").eq(n).trigger("click");
  }
});
//youtube 
$(function () {
  function nextmp() {
    $(".mp4_ul").animate({ left: "-250px" }, 500, function () {
      $(".mp4_ul li").eq(0).appendTo(".mp4_ul");
      $(".mp4_ul").stop(500);

      $(".mp4_ul").css({ left: "0" });
    });
  }
  function prevmp() {
    $(".mp4_ul li").eq(4).prependTo(".mp4_ul");
    $(".mp4_ul").css({left: "250px" });
    $(".mp4_ul").animate({left:"0" }, 500);
  }
  $(".fa-caret-left").click(function () {
    prevmp();
  });
  $(".fa-caret-right").click(function () {
    nextmp();
  });
});

//banner
$(function () {
  function nextb() {
    $(".banner>ul").animate(
      { opacity: "0.8", trasition: "0.5s" },
      500,
      function () {
        $(".banner>ul>li").eq(0).appendTo(".banner>ul");
        $(".banner>ul").animate({ opacity: "1", trasition: "0.5s" });
      }
    );
  }
  function preb() {
    $(".banner>ul>li").eq(2).prependTo(".banner>ul");
    $(".banner>ul").animate({ opacity: "0.8", trasition: "0.5s" });
    $(".banner>ul").animate({ opacity: "1", trasition: "0.5s" }, 500);
  }
  let inter = setInterval(nextb, 5000);
});

let interval = setInterval(timer, 3000);
