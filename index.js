$(document).ready(function(){
      $(window).scroll(function() { 
        if ($(document).scrollTop() > 20) { 
          $(".fixed-top").css("background-color", "#F0F5F8");
           $("#logo").attr("src", "Premier_League_Logo_1_82x120.png"); 
           $(".nav-link").css("color","black");
           $(".fixed-top").css({"transition":"all 0.3s ease","margin":"10px 5px 5px 5px","height":"100px"});
           $("#pl").css({"transition":"all 0.5s ease","transform":"scale(1.3)"});
           $("#subheading").animate({"padding-left":"39%","font-size":"55px"},2500);
           $(".img-fluid").fadeIn(60);

           $(".stat1").mouseenter(function() {
              $(".info-card1").slideDown();
           });
            $(".stat1").mouseleave(function() {
              $(".info-card1").slideUp();
           });
            $(".stat2").mouseenter(function() {
              $(".info-card2").slideDown();
           });
            $(".stat2").mouseleave(function() {
              $(".info-card2").slideUp();
           });
             $(".stat3").mouseenter(function() {
              $(".info-card3").slideDown();
           });
             $(".stat3").mouseleave(function() {
              $(".info-card3").slideUp();
           });
        }
        else {
          $(".fixed-top").css({"background-color":"transparent","height":"90px"});
          $("#logo").attr("src", "download.png");
          $(".nav-link").css("color","white");
          $("#pl").css("transform","scale(1.0)");
        }

      });
    });