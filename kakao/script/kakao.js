$(function () {
  $(".lnb>li>ul").fadeOut();
  $(".lnb>li").eq(1).find("ul").fadeOut();
  $(".gnb li").click(function () {
    let i = $(this).index();
    console.log(i);
    $(".lnb>li>ul").fadeOut();
    $(".lnb>li>ul").eq(i).fadeIn();
  });

  function nextani() {
    $(".talkcontents").animate({ left: "-100%" }, 500, function () {
      $(".talkcontents>li").eq(0).appendTo(".talkcontents");
      $(".talkcontents").stop(1000);

      $(".talkcontents").css({ left: "0" });
      // $(".event1_banner").start;
    });
  }
  function prevani() {
    $(".talkcontents>li").eq(7).prependTo(".talkcontents");
    $(".talkcontents").css({ left: "100%" });
    $(".talkcontents").animate({ left: "0" }, 500);
  }
  $(".fa-circle-chevron-left").click(function () {
    prevani();
  });
  $(".fa-circle-chevron-right").click(function () {
    nextani();
  });
});
