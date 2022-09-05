    //NAV
    $(function () {

        $("#nav>li>a").click(function () {
            $(this).next().slideToggle(500).parent().siblings()
                .children(".sub").slideUp(300);
            $(this).parent().toggleClass("active")
                .siblings().removeClass("active");
        })
    })

    // Ham
    $(function () {
        var hamClick = 0;

        $(".ham").click(function () {
            hamClick++;
            if (hamClick % 2 == 0) {
                $("#nav").stop().animate({
                    "right": -110 + "%"
                }, 500)
            } else {
                $("#nav").stop().animate({
                    "right": 0,
                }, 500)
            }
            $(".online").click(function () {
                $("#nav").stop().animate({
                    "right": -110 + "%"
                }, 0)
            })
        })

    })

    //ZONE
    $(function () {
        var showBanner = 0;

        //배너 복사하기
        var objFirst = $(".zone>li:lt(3)").clone();
        var objLast = $(".zone>li:gt(3)").clone();
        $(".zone").append(objFirst);
        $(".zone").prepend(objLast);



        var wWidth = $(window).outerWidth();

        $(window).resize(function () {
            wWidth = $(window).outerWidth();
        })

        if (wWidth > 450) {
            $(".zone>li").eq(showBanner + 2).addClass("active")
        } else {
            $(".zone>li").eq(showBanner + 2).removeClass("active")
        }

        $(".right_arrow").click(function () {
            if (wWidth > 450) {
 
            
                if (showBanner < 7) {
                $(".zone").stop().animate({
                    "left": -showBanner * 20 + "%"
                }, 500);
                showBanner++;
                $(".zone>li").eq(showBanner + 1).addClass("active").siblings().removeClass("active");
               
                } else{
                    
                    showBanner = 0;
                    $(".zone").css("left",0);
                    $(".zone>li").eq(2).addClass("active").siblings().removeClass("active");
                }
            } else {
             
           
                if (showBanner <7) {
                    $(".zone").stop().animate({
                        "left": -showBanner * 33.3333 + "%"
                    }, 500);
                   
                }
                
            
             else{
                showBanner=0
                $(".zone").css("left",0);
             }
            
             showBanner++;
            }

         
            console.log(showBanner)
     
        })
        
        $(".left_arrow").click(function () {
            if (wWidth > 450) {
 
                
                if (showBanner <1) {
                    showBanner=6;
                    $(".zone").css("left", -showBanner * 20 + "%");
              
              
                $(".zone>li").eq(showBanner + 2).addClass("active").siblings().removeClass("active");
               
                } else{
                    
                    showBanner--;
                    $(".zone").stop().animate({
                        "left": -showBanner * 20 + "%"
                    }, 500);;
                    
                     $(".zone>li").eq(showBanner+2).addClass("active").siblings().removeClass("active");
                }
            } else {
                if (showBanner <1) {
                    showBanner=7;
                    $(".zone").css("left", -showBanner * 33.333333 + "%");
                }
                showBanner--;
                $(".zone").stop().animate({
                    "left": -showBanner * 33.3333 + "%"
                }, 500);
                
                
            }

         
            console.log(showBanner)
     
        })

    })

    //Animals
    $(function () {

        $(".animals>li").click(function () {
            var sNum = $(this).index();
            console.log(sNum)
            var src = $(this).find("img").attr("src");
            console.log(src)


            $(this).addClass("active").siblings().removeClass("active")
            $(".animal_ex>li").eq(sNum).fadeIn(500).siblings().fadeOut(500);
            $(".animals").stop().animate({
                "margin-left": -sNum * 15.285 + "%"
            })
            $(".pager").stop().animate({
                "margin-left": sNum * 14.28 + "%"
            })
            $(".animal>img").attr("src", src);
            $(".up").css({
                "background": "url(/images/animals/back" + sNum + ".jpg)",
                "background-size": 100 + "%"
            }).fadeIn(500);
        })
        var showAnimal = 0;

        $(".animal_right").click(function () {

            var src2 = "/images/animals/up" + showAnimal + ".png";

            $(".up").css({
                "background": "url(/images/animals/back" + showAnimal + ".jpg)",
                "background-size": 100 + "%"
            });
            $(".animal>img").attr("src", src2);
            showAnimal++;
            if (showAnimal > 6) {
                showAnimal = 0;
            }

        })
        $(".animal_left").click(function () {

            var src2 = "/images/animals/up" + showAnimal + ".png";

            $(".up").css({
                "background": "url(/images/animals/back" + showAnimal + ".jpg)",
                "background-size": 100 + "%"
            });
            $(".animal>img").attr("src", src2);
            showAnimal--;
            if (showAnimal == -1) {
                showAnimal = 6;
            }

        })
    })

        /*$(".left_arrow").click(function () {
            if (wWidth > 450) {

                $(".zone").stop().animate({
                    "left": -showBanner * 20 + "%"
                }, 500);

                $(".zone>li").eq(showBanner + 2).addClass("active").siblings().removeClass("active");
            } else {

                $(".zone").stop().animate({
                    "left": -showBanner * 33.3333 + "%"
                }, 500);
            }
            if (showBanner == 0) {
                showBanner = 7;
                $(".zone").css("left", -7 * 15.7 + "vw")
            }
            showBanner--;
        })




        // function moveBanner() {
        //     $(".zone").stop().animate({
        //         "left": -showBanner * liWidth + "%"
        //     }, 500);

        //     $(".zone>li").eq(showBanner + 2).addClass("active").siblings().removeClass("active");
        // }








    })

    
    //Review
    $(function () {
        // $(window).scroll(function () {
        //     var scrT = $(this).scrollTop();
        //     console.log(scrT);
        //     if (scrT >= 2361.60009765625) {
        //         $(".left1_up").show(500);
        //         $(".middle_up").show(500);
        //         $(".right2_bottom").show(500);
        //         $(".left1_bottom").show(500);
        //         $(".left2_up").show(500);
        //         $(".middle_bottom").show(500);
        //         $(".right1_up").show(500);
        //         $("left2_bottom").show(500);
        //         $(".right2_up").show(500);
        //         $(".right1_bottom").show(500);
        //         $(".blank").css("height", "0")

        //     } else {
        //         $(".left1_up").hide(500);
        //         $(".middle_up").hide(500);
        //         $(".right2_bottom").hide(500);
        //         $(".left1_bottom").hide(500);
        //         $(".left2_up").hide(500);
        //         $(".middle_bottom").hide(500);
        //         $(".right1_up").hide(500);
        //         $("left2_bottom").hide(500);
        //         $(".right2_up").hide(500);
        //         $(".right1_bottom").hide(500);
        //         $(".blank").css("height", "300px")
        //     }
        // })

    })*/
