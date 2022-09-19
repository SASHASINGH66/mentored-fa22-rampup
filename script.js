
function myFunction() {
  alert("Tranquility base hotel and casino is the right album!")
    
}


var pics1 = new Array("Suckitandsee.jpg", "tbhc.webp", "Favourite_Worst_Nightmare.jpeg");

var pics2 = new Array("am.jpg", "humbug.jpg", "whatever_people_say.webp");

var pics3 = new Array("in_utero.jpg", "nevermind.webp", "meteora.jpg");

var songs = new Array("love is a laserquest", "four out of five", "505", "r u mine", "mardy bum", "i bet u look good on the dancefloor", "heart shaped box", "lithium", "numb");

function dispsong(){
  var random = Math.floor(Math.random()*songs.length);
  return songs[random];
}
function choosePic(img, p){
  var random = Math.floor(Math.random()*p.length);
  document.getElementById(img).src = p[random];
}


choosePic("image1", pics1);
choosePic("image2", pics2);
choosePic("image3", pics3);