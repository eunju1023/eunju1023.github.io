$(function () {
  $(".lnb>li>ul").fadeOut();
  $(".lnb>li").eq(1).find("ul").fadeOut();
  $(".gnb li").click(function () {
    let i = $(this).index();
    console.log(i);
    $(".lnb>li>ul").fadeOut();
    $(".lnb>li>ul").eq(i).fadeIn();
  });
  
  function night() {
    $("a")
      .css({ color: "#fff" });
      $("p")
      .css({ color: "#fff" });
      $("h1")
      .css({ color: "#fff" });
    $("body")
      .css({ backgroundColor: "#222" });
      $(".download")
      .css({ backgroundColor: "#292a2d" });
      $(".foot span")
      .css({ color: "#aaa" });
      $(".btn .fa-solid")
      .css({ color: "#aaa" });
      $(".right ul li i")
      .css({ color: "#fff" });
      $(".lnb > li > ul")
      .css({ backgroundColor: "#595959" });
      $(".blank").css({backgroundColor: "#222"});
}

$(".fa-moon").click(function () {
  night();
      $(".fa-moon").removeClass("fa-moon").addClass("fa-solid fa-lightbulb");
      $(".logo ul li img").remove("img");
      $(".logo ul li").append("<img"+" src="+"images/kakao_logo_b.png"+" alt="+"logo_b"+"/>");
      });


// $(".fa-lightbulb").click(function () {
//   $(".fa-lightbulb").removeClass("fa-lightbulb").addClass("fa-solid fa-moon");
// });
// $(".fa-lightbulb").css({ textShadow: "0 0 10px #ffff00" });

  // e.preventDefault();
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
