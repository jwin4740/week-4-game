$(document).ready(function() {
var intro = document.getElementById("theme");

function fIntro() {
    intro.play();
}
// fIntro();

var intro2 = document.getElementById("theme2");

function fIntro2() {
    intro2.play();
}
fIntro2();
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
$( "#arenabuttonin" ).on( "click", function() {
  $( "#arena:hidden:first" ).fadeIn( 2000 );
});

$( "#arenabuttonout" ).on( "click", function() {
  $( "#arena" ).fadeOut( 1000 );
});

 
    
  
$( "#go" ).click(function() {
  $( ".lightsaber" ).animate({
    height: "180px",

  }, 1500 );
  $( ".lightsaber" ).css({
    border: "solid 4px green",
      
  }, 1500 );
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


var audio = document.getElementById("theme");

function lessVolume() {
    audio.volume = 0.5;
}
lessVolume();

var draw = document.getElementById("saberdraw");

function fDraw() {
    draw.play();
}

var buzz = document.getElementById("saberbuzz");

function fBuzz() {
    buzz.play();
}

var sbuzz = document.getElementById("sabersbuzz");

function sBuzz() {
    sbuzz.play();
}

var contact = document.getElementById("sabercontact");

function fContact() {
    contact.play();
}

var sheath = document.getElementById("sabersheath");

function fSheath() {
    sheath.play();
}

function resetSound() {
    buzz.pause();
    sbuzz.pause();
    buzz.currentTime = 0;
    sbuzz.currentTime = 0;

}

var obiwanAttack = 5;

var obiWan = {

	healthPoints: 150,
	attackPower: 5, 
	counterAttackPower: 100,
	

	attack: function() {

		this.attackPower = this.attackPower + obiwanAttack;
		console.log(this.attackPower);
	}, 

	getHit: function() {

		this.healthPoints = this.healthPoints + obiwanAttack;
		console.log(this.healthPoints);
	}, 

	counterPunch: function() {

		this.counterAttackPower = this.counterAttackPower + obiwanAttack;
		console.log(this.counterAttackPower);
	}, 

};

$(document).on("keypress", function(){


obiWan.attack();
obiWan.getHit();
obiWan.counterPunch();


});
// var darthMaul = {

// 	HealthPoints: 250
// 	AttackPower: 5,
// 	CounterAttackPower: 100,
// 	Defender: true;

// };

// var quiGon = {

// 	HealthPoints: 300,
// 	AttackPower: 5,
// 	CounterAttackPower: 100,
// 	Defender: true;

// };

// var countDooku = {

// 	HealthPoints: 400,
// 	AttackPower: 5,
// 	CounterAttackPower: 100,
// 	Defender: true;

// };


});

