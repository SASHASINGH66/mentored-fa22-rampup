var pics1 = new Array("Suckitandsee.jpg", "tbhc.webp", "Favourite_Worst_Nightmare.jpeg", "divide.png");

var pics2 = new Array("am.jpg", "humbug.jpg", "whatever_people_say.webp", "red.png");

var pics3 = new Array("in_utero.jpg", "nevermind.webp", "meteora.jpg", "fearless.png");

var most_popular = new Array("in utero", "nevermind", "meteora", "red");

var most_popular_ids = new Array("image3", "image3", "image3", "image2");

var random = Math.floor(Math.random()*4);

function myFunction() {
  var most_pop = most_popular[random];
  var element = document.getElementById(most_popular_ids[random]);
  element.style.borderColor = "#00FF00";
  alert(most_pop + ' was the most popular');

}

function choosePic(img, p){
  document.getElementById(img).src = p[random];
}

function submit(){
  var e = document.getElementById("period");
  var value = e.value;
  
}
choosePic("image1", pics1);
choosePic("image2", pics2);
choosePic("image3", pics3);