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

        $(".zone").slick({
            centerMode: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 780,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                        centerMode: false,
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 390,
                    settings: {
                        centerMode: false,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]

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
                "background": "url(images/animals/back" + sNum + ".jpg)",
                "background-size": 100 + "%"
            }).fadeIn(500);
        })
        var showAnimal = 0;

        $(".animal_right").click(function () {

            var src2 = "images/animals/up" + showAnimal + ".png";

            $(".up").css({
                "background": "url(images/animals/back" + showAnimal + ".jpg)",
                "background-size": 100 + "%"
            });
            $(".animal>img").attr("src", src2);
            showAnimal++;
            if (showAnimal > 6) {
                showAnimal = 0;
            }

        })
        $(".animal_left").click(function () {

            var src2 = "images/animals/up" + showAnimal + ".png";

            $(".up").css({
                "background": "url(images/animals/back" + showAnimal + ".jpg)",
                "background-size": 100 + "%"
            });
            $(".animal>img").attr("src", src2);
            showAnimal--;
            if (showAnimal == -1) {
                showAnimal = 6;
            }

        })
    })
