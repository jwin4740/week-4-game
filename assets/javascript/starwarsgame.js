
$(document).ready()



$(function () {
	    setInterval(function () {
		    $('#sparkle1').fadeOut(150).delay(2000).fadeIn(300).fadeOut(150).delay(1254);
	        $('#sparkle2').fadeOut(300).fadeIn(120).fadeOut(120).delay(1920);
	        $('#sparkle3').fadeOut(150).delay(1200).fadeIn(300).fadeOut(150).delay(800);
	        $('#sparkle4').fadeOut(700).fadeIn(300).fadeOut(160).delay(1350);
	    }, 1);



$(document).ready(function() {

      // Gets Link for Theme Song
      var audioElement = document.createElement("audio");
      audioElement.setAttribute("src", "Assets/captainplanet24.mp3");

      // Theme Button
      $(".themeButton").on("click", function() {
        audioElement.play();
      });

      $(".pauseButton").on("click", function() {
        audioElement.pause();
      });

      // Size Buttons
      $(".normalButton").on("click", function() {
        $(".captainplanet").animate({ height: "300px" });
      });

      $(".growButton").on("click", function() {
        $(".captainplanet").animate({ height: "500px" });
      });

      $(".shrinkButton").on("click", function() {
        $(".captainplanet").animate({ height: "100px" });
      });

      // Visibility Buttons
      $(".visButton").on("click", function() {
        $(".captainplanet").animate({ opacity: "1" });
      });

      $(".invisButton").on("click", function() {
        $(".captainplanet").animate({ opacity: "0.05" });
      });

      // Move Buttons
      $(".upButton").on("click", function() {
        $(".captainplanet").animate({ top: "-=200px" }, "normal");
      });

      $(".downButton").on("click", function() {
        $(".captainplanet").animate({ top: "+=200px" }, "normal");
      });

      $(".leftButton").on("click", function() {
        $(".captainplanet").animate({ left: "-=200px" }, "normal");
      });

      $(".rightButton").on("click", function() {
        $(".captainplanet").animate({ left: "+=200px" }, "normal");
      });

      $(".backButton").on("click", function() {
        $(".captainplanet").animate({ top: "50px", left: "80px" }, "fast");
      });

      // Move Buttons (Keyboard Down)
      $(document).keyup(function(e) {
        switch (e.which) {
          case 40:
            $("#kenobidiv").animate({ top: "+=200px" }, "normal");
        }
      });

      // Move Buttons (Keyboard Right)
      $(document).keyup(function(e) {
        switch (e.which) {
          case 39:
            $(".captainplanet").animate({ left: "+=200px" }, "normal");
        }
      });

      // Move Buttons (Keyboard Up)
      $(document).keyup(function(e) {
        switch (e.which) {
          case 38:
            $(".captainplanet").animate({ top: "-=200px" }, "normal");
        }
      });

      // Move Buttons (Keyboard Left)
      $(document).keyup(function(e) {
        switch (e.which) {
          case 37:
            $(".captainplanet").animate({ left: "-=200px" }, "normal");
        }
      });
    });