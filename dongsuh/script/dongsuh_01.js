//네비게이션
$(function(){
    $(".gnb li:first").eq(0).addClass("on");
        $(".lnb_wrap").css("display", "none");
        $(".gnb li").hover (
            function() {
            $(".lnb_wrap").stop().slideDown(300);
            },
            function() {
            $(".lnb_wrap").stop().slideUp(300);
            });
        $(".lnb li").hover (
            function() {
            $(".lnb_wrap").stop().slideDown(300);
            },
            function() {
            $(".lnb_wrap").stop().slideUp(300);
        });
});
          

//main      
$(function () {
        $(".menu_sub ul li").eq(0).addClass("on");
    });

//new
      $(function(){
        let current = 0;
          function move(i) {
            if (current == i) return;
            $(".visual>ul>li")
            .eq(current)
            .css({marginLeft: "0"})
            .animate({marginLeft: "-500px"});
            $(".visual>ul>li").eq(i).css({marginLeft: "500px"}).animate({marginLeft: "0"});
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
        let interval = setInterval(timer,3000);

        function timer() {
            var n = current+1;
            if (n == $(".visual>ul>li").length) {
                n = 0;
            }
            $(".sir2>li").eq(n).trigger("click");
        }
        function timer_prev() {
            var n = current-1;
            if (n == $(".visual>ul>li").length) {
                n = 0;
            }
            console.log("n :" + n);
            $(".sir2>li").eq(n).trigger("click");
        }
        $(".next").click(function (){
            timer();
        });
        $(".prev").click(function (){
            timer_prev();
        });
        $(".sir2, #btn").hover(
            function () {
                clearInterval(interval);
            },
            function(){
                interval = setInterval(timer, 3000);
            }
        );
    });


    




   
   

  