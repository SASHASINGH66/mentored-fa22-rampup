
var pics1 = new Array("Suckitandsee.jpg", "tbhc.webp", "Favourite_Worst_Nightmare.jpeg", "divide.png", "evolve.jpeg", "happier_ever.jpeg", "fall_asleep.png");

var pics2 = new Array("am.jpg", "humbug.jpg", "whatever_people_say.webp", "red.png", "music_murder.png", "sour.png", "punisher.jpeg");

var pics3 = new Array("in_utero.jpg", "nevermind.webp", "meteora.jpg", "fearless.png", "tickets_downfall.png", "flowerboy.png", "american_teen.png");

var most_popular_ids = new Array("image3", "image3", "image3", "image2", "image1", "image2","image1");

var wrong_ids_1 = new Array("image1", "image1", "image1", "image1", "image2", "image1","image2");

var wrong_ids_2 = new Array("image2", "image2", "image2", "image3", "image3", "image3","image3");

var most_popular_sounds = new Array("heart_box.mp3", "nirvana.mp3", "numb.mp3", "red.mp3", "thunder.mp3", "drivers_license.mp3","badguy.mp3");

var random = Math.floor(Math.random()*7);

function generate(){
  choosePic("image1", pics1, random);
  choosePic("image2", pics2, random);
  choosePic("image3", pics3, random);
}

function choosePic(img, p, i){
  document.getElementById(img).src = p[i];
}

function myFunction() {
  var most_pop_sound = most_popular_sounds[random];
  var element = document.getElementById(most_popular_ids[random]);
  element.style.borderColor = "#00FF00";
  var element2 = document.getElementById(wrong_ids_1[random]);
  var element3 = document.getElementById(wrong_ids_2[random]);
  element2.style.borderColor = "#FF0000";
  element3.style.borderColor = "#FF0000";
  var snd = new Audio(most_popular_sounds[random]);
  snd.play();
  document.getElementById("refresh").innerHTML = "Refresh the page to play again!"
}


