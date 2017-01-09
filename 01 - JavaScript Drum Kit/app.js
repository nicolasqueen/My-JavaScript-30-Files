/* All the SOUNDS */

var clap = document.getElementById('clap');
var hihat = document.getElementById('hihat');
var kick = document.getElementById('kick');
var openhat = document.getElementById('openhat');
var boom = document.getElementById('boom');
var ride = document.getElementById('ride');
var snare = document.getElementById('snare');
var tom = document.getElementById('tom');
var tink = document.getElementById('tink');
var keys = document.querySelectorAll(".keys");

/* All the BOXES */

var clapPlayed = document.querySelector(".clapPlayed");
var hihatPlayed = document.querySelector(".hihatPlayed");
var kickPlayed = document.querySelector(".kickPlayed");
var openhatPlayed = document.querySelector(".openhatPlayed");
var boomPlayed = document.querySelector(".boomPlayed");
var ridePlayed = document.querySelector(".ridePlayed");
var snarePlayed = document.querySelector(".snarePlayed");
var tomPlayed = document.querySelector(".tomPlayed");
var tinkPlayed = document.querySelector(".tinkPlayed");

var press = "";


/* Play CLAP (65) and flash on and off the box transition */

window.addEventListener("keydown", function(a){
	press = event.keyCode;
	if(press === 65){
	clap.play();
	clapPlayed.classList.add("playing");
	}
});

window.addEventListener("keyup", function(a){
	press = event.keyCode;
	if(press === 65){
	clapPlayed.classList.remove("playing");
	}
});

/* Play HIHAT (83) and flash on and off the box transition */

window.addEventListener("keydown", function(s){
	press = event.keyCode;
	if(press === 83){
	hihat.play();
	hihatPlayed.classList.add("playing");
	}
});

window.addEventListener("keyup", function(s){
	press = event.keyCode;
	if(press === 83){
	hihatPlayed.classList.remove("playing");
	}
});

/* Play KICK (68) and flash on and off the box transition */

window.addEventListener("keydown", function(d){
	press = event.keyCode;
	if(press === 68){
	kick.play();
	kickPlayed.classList.add("playing");
	}
});

window.addEventListener("keyup", function(d){
	press = event.keyCode;
	if(press === 68){
	kickPlayed.classList.remove("playing");
	}
});

/* Play OPENHAT (70) and flash on and off the box transition */

window.addEventListener("keydown", function(f){
	press = event.keyCode;
	if(press === 70){
	openhat.play();
	openhatPlayed.classList.add("playing");
	}
});

window.addEventListener("keyup", function(f){
	press = event.keyCode;
	if(press === 70){
	openhatPlayed.classList.remove("playing");
	}
});

/* Play OPENHAT (71) and flash on and off the box transition */

window.addEventListener("keydown", function(d){
	press = event.keyCode;
	if(press === 71){
	boom.play();
	boomPlayed.classList.add("playing");
	}
});

window.addEventListener("keyup", function(f){
	press = event.keyCode;
	if(press === 71){
	boomPlayed.classList.remove("playing");
	}
});

/* Play RIDE (72) and flash on and off the box transition */

window.addEventListener("keydown", function(d){
	press = event.keyCode;
	if(press === 72){
	ride.play();
	ridePlayed.classList.add("playing");
	}
});

window.addEventListener("keyup", function(f){
	press = event.keyCode;
	if(press === 72){
	ridePlayed.classList.remove("playing");
	}
});

/* Play SNARE (74) and flash on and off the box transition */

window.addEventListener("keydown", function(d){
	press = event.keyCode;
	if(press === 74){
	snare.play();
	snarePlayed.classList.add("playing");
	}
});

window.addEventListener("keyup", function(f){
	press = event.keyCode;
	if(press === 74){
	snarePlayed.classList.remove("playing");
	}
});

/* Play TOM (75) and flash on and off the box transition */

window.addEventListener("keydown", function(d){
	press = event.keyCode;
	if(press === 75){
	tom.play();
	tomPlayed.classList.add("playing");
	}
});

window.addEventListener("keyup", function(f){
	press = event.keyCode;
	if(press === 75){
	tomPlayed.classList.remove("playing");
	}
});

/* Play TINK (76) and flash on and off the box transition */

window.addEventListener("keydown", function(d){
	press = event.keyCode;
	if(press === 76){
	tink.play();
	tinkPlayed.classList.add("playing");
	}
});

window.addEventListener("keyup", function(f){
	press = event.keyCode;
	if(press === 76){
	tinkPlayed.classList.remove("playing");
	}
});