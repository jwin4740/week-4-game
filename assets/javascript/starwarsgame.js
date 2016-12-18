//global variables
var player;



$(document).ready(function() {
    var intro = $("#theme")[0];

    function fIntro() {
        intro.play();
    }
    // fIntro();

    // var intro2 = $("#theme2")[0];

    // function fIntro2() {
    //     intro2.play();
    // }
    // fIntro2();
    document.onkeyup = function(event) {
        var userKey = event.key;
        if (userKey === "d") {
            fDraw();
            setTimeout(fBuzz, 1000);
            setTimeout(sBuzz, 2000);
        }

        if (userKey === "s") {
            fContact();
        }


        if (userKey === "w") {
            fSheath();
        }

        if (userKey === "w") {
            setTimeout(fSheath, 500);
            resetSound();
        }

    };
    // fade arena in and out
    $("#arenabuttonin").on("click", function() {
        $("#arena:hidden:first").fadeIn(2000);
    });

    $("#arenabuttonout").on("click", function() {
        $("#arena").fadeOut(1000);
    });


    $("#go").click(function() {
        $(".lightsaber").animate({
            height: "180px",

        }, 1500);
        $(".lightsaber").css({
            border: "solid 4px green",

        }, 1500);
    });

    $(document).keyup(function(e) {
        switch (e.which) {
            case 37:
                $("#obiwan").animate({ left: "-=50px" }, "normal");
        }
    });
    $(document).keyup(function(e) {
        switch (e.which) {
            case 38:
                $("#obiwan").animate({ top: "-=50px" }, "normal");
        }
    });

    $(document).keyup(function(e) {
        switch (e.which) {
            case 39:
                $("#obiwan").animate({ left: "+=50px" }, "normal");
        }
    });

    $(document).keyup(function(e) {
        switch (e.which) {
            case 40:
                $("#obiwan").animate({ top: "+=50px" }, "normal");

        }
    });


    var audio = $("#theme")[0];

    function lessVolume() {
        audio.volume = 0.5;
    }
    lessVolume();

    var draw = $("#saberdraw")[0];

    function fDraw() {
        draw.play();
    }

    var buzz = $("#saberbuzz")[0];

    function fBuzz() {
        buzz.play();
    }

    var sbuzz = $("#sabersbuzz")[0];

    function sBuzz() {
        sbuzz.play();
    }

    var contact = $("#sabercontact")[0];

    function fContact() {
        contact.play();
    }

    var sheath = $("#sabersheath")[0];

    function fSheath() {
        sheath.play();
    }

    function resetSound() {
        buzz.pause();
        sbuzz.pause();
        buzz.currentTime = 0;
        sbuzz.currentTime = 0;

    }




    // prototype object
    function Character(name, healthPoints, attackPower, counterAttackPower) {
        this.name = name;
        this.healthPoints = healthPoints;
        this.attackPower = attackPower;
        this.counterAttackPower = counterAttackPower;
    }

    var charOne = new Character("ObiwanKenobi", 175, 12, 15);
    var charTwo = new Character("QuigonGinn", 200, 14, 20);
    var charThree = new Character("DarthMaul", 150, 18, 30);
    var charFour = new Character("CountDooku", 250, 16, 25);
    //--------------GAME STARTS---------------

    // $("#qui").on("click", function(){
    // alert("The paragraph was clicked.");
   
var qui = "#qui";
    var darth = "#darth";
    var obi = "#obi";
    var count = "#count";
    function selectCharacter() {
        function hoverEnlarge(idname) {
            $(idname).on("mouseenter", function() {
                $(idname).css({ height: "275px", width: "275px" });
                enemy = true;
                console.log(enemy);
            });

            $(idname).on("mouseleave", function() {
                $(idname).css({ height: "200px", width: "200px" });
                enemy = false;
                console.log(enemy);
            });
        }
        hoverEnlarge("#qui");
        hoverEnlarge("#darth");
        hoverEnlarge("#obi");
        hoverEnlarge("#count");
    }

    selectCharacter();
    
    $(qui).on("click", function() {
        $(qui).css({ border: "solid 8px green" });

    });
    $("#darth").on("click", function() {
        $("#darth").css({ border: "solid 8px green" });
    });
    $("#count").on("click", function() {
        $("#count").css({ border: "solid 8px green" });
    });
    $("#obi").on("click", function() {
        $("#obi").css({ border: "solid 8px green" });
    });

    // if (enemy === true)
    // {
    //     console.log("yeah it is true");
    // }
    // else 
    // {

    // }



    //  qui.on("click", clickit(qui) );
    //  obi.on("click",  );
    //  darth.on("click",  );
    //  count.on("click",  );

    //      function clickit(x) {
    //          $(x).css({ border: "solid 8px green" });
    //      }



    // var countdown;
    // function startCountdown()
    // var countdown = setInterval(decrement, 1000);
});
