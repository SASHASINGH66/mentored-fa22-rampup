
var pics1 = new Array("Suckitandsee.jpg", "tbhc.webp", "Favourite_Worst_Nightmare.jpeg", "divide.png");

var pics2 = new Array("am.jpg", "humbug.jpg", "whatever_people_say.webp", "red.png");

var pics3 = new Array("in_utero.jpg", "nevermind.webp", "meteora.jpg", "fearless.png");

var most_popular = new Array("in utero", "nevermind", "meteora", "red");

var most_popular_ids = new Array("image3", "image3", "image3", "image2");

var most_popular_sounds = new Array("heart_box.mp3", "nirvana.mp3", "numb.mp3", "red.mp3")

var random = Math.floor(Math.random()*4);

function choosePic(img, p){
  document.getElementById(img).src = p[random];
}

function myFunction() {
  var most_pop = most_popular[random];
  var most_pop_sound = most_popular_sounds[random];
  var element = document.getElementById(most_popular_ids[random]);
  element.style.borderColor = "#00FF00";
  var snd = new Audio(most_popular_sounds[random]);
  snd.play();
  alert(most_pop + ' was the most popular');
}

choosePic("image1", pics1);
choosePic("image2", pics2);
choosePic("image3", pics3);
