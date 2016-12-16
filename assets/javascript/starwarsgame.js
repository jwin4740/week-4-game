$(document).ready(function() {
var intro = document.getElementById("theme");

function fIntro() {
    intro.play();
}
// fIntro();
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

