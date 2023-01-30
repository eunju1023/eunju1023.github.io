$(function () {
  $(".menu li:nth-child(2)").click(function (e) {

    });
    $(".menu li:nth-child(3)").click(function (e) {

      });
      $(window).scroll(function () {
        let scr = $(this).scrollTop();
        console.log(scr);
        if (scr >= 50) {
          $(".menu").css({
            position: "fixed",
            top: "0",
            zIndex: "1"
          });
        } else {
          $(".menu").css({  position: "fixed",
          top: "0",
          zIndex: "1" });
        }
    });
  //profile
  $(window).scroll(function () {
    let proscr = $(this).scrollTop();
    console.log(proscr);
    if (proscr >= 600) {
        $(".skill_graph").css({ opacity:"1"}, 2000, "ease-in-out"),
        $(".bar1 li:first-child").css({ width:"85%" }, 3000, "ease-in-out"),
        $(".bar1 li:nth-child(2)").css({ width:"85%" }, 3000, "ease-in-out"),
        $(".bar1 li:last-child").css({ width:"75%" }, 3000, "ease-in-out"),
        $(".circle_graph .photoshop svg circle").css({ strokeDashoffset: "624" }, 1500, "ease-in-out"),
        $(".circle_graph .photoshop svg circle").css({ strokeDashoffset: "300" }, 1500, "ease-in-out"),
        $(".circle_graph .illust svg circle").css({ strokeDashoffset: "624" }, 2000, "ease-in-out"),
        $(".circle_graph .illust svg circle").css({ strokeDashoffset: "340" }, 2000, "ease-in-out"),
        $(".circle_graph .after svg circle").css({ strokeDashoffset: "624" }, 2000, "ease-in-out"),
        $(".circle_graph .after svg circle").css({ strokeDashoffset: "370" }, 2000, "ease-in-out"),
        $(".circle_graph .pre svg circle").css({ strokeDashoffset: "624" }, 2000, "ease-in-out"),
        $(".circle_graph .pre svg circle").css({ strokeDashoffset: "320" }, 2000, "ease-in-out"),
        $(".profile_list").css({opacity: "1"}, 2000, "ease-in-out");
    } 
    else {
      $(".skill_graph").css({opacity: "0"}, 2000, "ease-in-out"),
      $(".bar1 li:first-child").css({ width:"0" }, 3000, "ease-in-out"),
      $(".bar1 li:nth-child(2)").css({ width:"0" }, 3000, "ease-in-out"),
      $(".bar1 li:last-child").css({ width:"0" }, 3000, "ease-in-out");
      $(".circle_graph .photoshop svg circle").css({ strokeDashoffset: "624" }, 2000, "ease-in-out"),
      $(".circle_graph .illust svg circle").css({ strokeDashoffset: "624" }, 2000, "ease-in-out"),
      $(".circle_graph .after svg circle").css({ strokeDashoffset: "624" }, 2000, "ease-in-out"),
      $(".circle_graph .pre svg circle").css({ strokeDashoffset: "624" }, 2000, "ease-in-out"),
      $(".profile_list").css({opacity: "0"}, 2000, "ease-in-out");
    }
  });
  //web
    $(window).scroll(function () {
        let scr = $(this).scrollTop();
        console.log(scr);
        if (scr >= 1500) {
            $(".txt").css({position: "relative", top: "15%", opacity: "1"});
        } 
        else {
          $(".txt").css({position: "relative", top: "-10px", opacity: "0"});
        }
      });
    $(".art_img img:first-child").hover(
        function () {
          $(".art_img img:first-child").css("transform", "translateZ(" + 300 + "px)" ), 
          $(".art_img img:nth-child(6)").css("transform",  "rotateY(" + 53 + "deg) "+"translateZ(" + 300 + "px)" ),
          $(".art_img img:nth-child(4)").css("transform", "rotateY(" + "-60" + "deg) "+"translateZ(" + "-300" + "px)"),
          $(".art_img img:nth-child(2)").css("transform", "translateZ(" + "-300" + "px)"),
          $(".art_img img:nth-child(3)").css("transform", "rotateY(" + 60 + "deg) "+"translateZ(" + "-300" + "px)"),
          $(".art_img img:nth-child(5)").css("transform", "rotateY(" + "-53" + "deg) "+"translateZ(" + 300 + "px)" );
        }
      );

      $(".art_img img:nth-child(6)").hover(
        function () {
          $(".art_img img:nth-child(6)").css("transform",  "rotateY(" + 53 + "deg) "+"translateZ(" + 300 + "px)" ),
          $(".art_img img:nth-child(6)").css("transform", "rotateY(" + 0 + "deg) "+"translateZ(" + 300 + "px)" ),
          $(".art_img img:nth-child(4)").css("transform", "rotateY(" + "-60" + "deg) "+"translateZ(" + "-300" + "px)"),
          $(".art_img img:nth-child(4)").css("transform", "rotateY(" + 53 + "deg) "+"translateZ(" + 300 + "px)"),
          $(".art_img img:nth-child(2)").css("transform", "translateZ(" + "-300" + "px)" ),
          $(".art_img img:nth-child(2)").css("transform", "rotateY(" + "-60" + "deg) "+"translateZ(" + "-300" + "px)" ),
          $(".art_img img:nth-child(3)").css("transform", "rotateY(" + "-53" + "deg) "+"translateZ(" + "-300" + "px)" ),
          $(".art_img img:nth-child(3)").css("transform", "translateZ(" + "-300" + "px)" ),
          $(".art_img img:nth-child(5)").css("transform", "rotateY(" + "-53" + "deg) "+"translateZ(" + 300 + "px)" ),
          $(".art_img img:nth-child(5)").css("transform", "rotateY(" + "-120" + "deg) "+"translateZ(" + 300 + "px)" ),
          $(".art_img img:first-child").css("transform", "translateZ(" + 300 + "px)" ),
          $(".art_img img:first-child").css("transform",  "rotateY(" + "-53" + "deg) "+"translateZ(" + 300 + "px)" ); 
        }
      );
      
      $(".art_img img:nth-child(4)").hover(
        function () {
          $(".art_img img:nth-child(4)").css("transform", "translateZ(" + "-300" + "px)" ),
          $(".art_img img:nth-child(4)").css("transform", "rotateY(" + 0 + "deg) "+"translateZ(" + 300 + "px)" ),
          $(".art_img img:nth-child(2)").css("transform", "rotateY(" + "-60" + "deg) "+"translateZ(" + "-300" + "px)"),
          $(".art_img img:nth-child(2)").css("transform", "rotateY(" + 53 + "deg) "+"translateZ(" + 300 + "px)"),
          $(".art_img img:nth-child(3)").css("transform", "translateZ(" + "-300" + "px)" ),
          $(".art_img img:nth-child(3)").css("transform", "rotateY(" + "-60" + "deg) "+"translateZ(" + "-300" + "px)" ),
          $(".art_img img:nth-child(5)").css("transform", "rotateY(" + 60 + "deg) "+"translateZ(" + "-300" + "px)" ),
          $(".art_img img:nth-child(5)").css("transform", "translateZ(" + "-300" + "px)" ),
          $(".art_img img:first-child").css("transform", "rotateY(" + "-60" + "deg) "+"translateZ(" + 300 + "px)" ),
          $(".art_img img:first-child").css("transform", "rotateY(" + "-120" + "deg) "+"translateZ(" + 300 + "px)" ),
          $(".art_img img:nth-child(6)").css("transform", "translateZ(" + 300 + "px)" ),
          $(".art_img img:nth-child(6)").css("transform",  "rotateY(" + "-53" + "deg) "+"translateZ(" + 300 + "px)" ); 
        }
      );
      $(".art_img img:nth-child(2)").hover(
        function () {
          $(".art_img img:nth-child(2)").css("transform", "rotateY(" + 53 + "deg) "+"translateZ(" + 300 + "px)"),
          $(".art_img img:nth-child(2)").css("transform", "rotateY(" + 0 + "deg) "+"translateZ(" + 300 + "px)" ),
          $(".art_img img:nth-child(3)").css("transform", "rotateY(" + "-60" + "deg) "+"translateZ(" + "-300" + "px)" ),
          $(".art_img img:nth-child(3)").css("transform", "rotateY(" + 53 + "deg) "+"translateZ(" + 300 + "px)"),
          $(".art_img img:nth-child(5)").css("transform", "translateZ(" + "-300" + "px)" ),
          $(".art_img img:nth-child(5)").css("transform", "rotateY(" + "-60" + "deg) "+"translateZ(" + "-300" + "px)" ),
          $(".art_img img:first-child").css("transform", "rotateY(" + "-120" + "deg) "+"translateZ(" + 300 + "px)" ),
          $(".art_img img:first-child").css("transform", "translateZ(" + "-300" + "px)" ),
          $(".art_img img:nth-child(6)").css("transform",  "rotateY(" + "-53" + "deg) "+"translateZ(" + 300 + "px)" ),
          $(".art_img img:nth-child(6)").css("transform", "rotateY(" + "-120" + "deg) "+"translateZ(" + 300 + "px)" ),
          $(".art_img img:nth-child(4)").css("transform", "rotateY(" + 0 + "deg) "+"translateZ(" + 300 + "px)" ), 
          $(".art_img img:nth-child(4)").css("transform",  "rotateY(" + "-53" + "deg) "+"translateZ(" + 300 + "px)" ); 
        }
      );
        $(".art_img img:nth-child(3)").hover(
          function () {
            $(".art_img img:nth-child(3)").css("transform", "rotateY(" + 53 + "deg) "+"translateZ(" + 300 + "px)"),
            $(".art_img img:nth-child(3)").css("transform", "rotateY(" + 0 + "deg) "+"translateZ(" + 300 + "px)" ),
            $(".art_img img:nth-child(5)").css("transform", "rotateY(" + "-60" + "deg) "+"translateZ(" + "-300" + "px)" ),
            $(".art_img img:nth-child(5)").css("transform", "rotateY(" + 53 + "deg) "+"translateZ(" + 300 + "px)"),
            $(".art_img img:first-child").css("transform", "translateZ(" + "-300" + "px)" ),
            $(".art_img img:first-child").css("transform", "rotateY(" + "-60" + "deg) "+"translateZ(" + "-300" + "px)" ),
            $(".art_img img:nth-child(6)").css("transform", "rotateY(" + "-120" + "deg) "+"translateZ(" + 300 + "px)" ),
            $(".art_img img:nth-child(6)").css("transform", "translateZ(" + "-300" + "px)" ),
            $(".art_img img:nth-child(4)").css("transform",  "rotateY(" + "-53" + "deg) "+"translateZ(" + 300 + "px)" ),
            $(".art_img img:nth-child(4)").css("transform", "rotateY(" + "-120" + "deg) "+"translateZ(" + 300 + "px)" ),
            $(".art_img img:nth-child(2)").css("transform", "rotateY(" + 0 + "deg) "+"translateZ(" + 300 + "px)" ),
            $(".art_img img:nth-child(2)").css("transform",  "rotateY(" + "-53" + "deg) "+"translateZ(" + 300 + "px)" ); 
          }
      );
      $(".art_img img:nth-child(5)").hover(
        function () {
          $(".art_img img:nth-child(5)").css("transform", "rotateY(" + 53 + "deg) "+"translateZ(" + 300 + "px)"),
          $(".art_img img:nth-child(5)").css("transform", "rotateY(" + 0 + "deg) "+"translateZ(" + 300 + "px)" ),
          $(".art_img img:first-child").css("transform", "rotateY(" + "-60" + "deg) "+"translateZ(" + "-300" + "px)" ),
          $(".art_img img:first-child").css("transform", "rotateY(" + 53 + "deg) "+"translateZ(" + 300 + "px)"),
          $(".art_img img:nth-child(6)").css("transform", "translateZ(" + "-300" + "px)" ),
          $(".art_img img:nth-child(6)").css("transform", "rotateY(" + "-60" + "deg) "+"translateZ(" + "-300" + "px)" ),
          $(".art_img img:nth-child(4)").css("transform", "rotateY(" + "-120" + "deg) "+"translateZ(" + 300 + "px)" ),
          $(".art_img img:nth-child(4)").css("transform", "translateZ(" + "-300" + "px)" ),
          $(".art_img img:nth-child(2)").css("transform",  "rotateY(" + "-53" + "deg) "+"translateZ(" + 300 + "px)" ),
          $(".art_img img:nth-child(2)").css("transform", "rotateY(" + "-120" + "deg) "+"translateZ(" + 300 + "px)" ),
          $(".art_img img:nth-child(3)").css("transform", "rotateY(" + 0 + "deg) "+"translateZ(" + 300 + "px)" ), 
          $(".art_img img:nth-child(3)").css("transform",  "rotateY(" + "-53" + "deg) "+"translateZ(" + 300 + "px)" ); 
        }
    );

     
    });