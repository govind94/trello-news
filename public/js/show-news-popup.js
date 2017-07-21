/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();

var jsonResponse = t.arg('jsonResponse');
var category = t.arg('category');

document.getElementById("title").innerHTML = "Top " + category + " stories:";

for(var key in jsonResponse.articles){
  var li = document.createElement("li");
  var a = document.createElement('a');
  var p = document.createElement('p');
  var img = document.createElement('img');
  var div = document.createElement('div');
  var br = document.createElement('br');
  img.src = (jsonResponse.articles[key].urlToImage ? jsonResponse.articles[key].urlToImage : 'https://cdn.glitch.com/953b60d4-d622-4431-8327-7bde55bd3e5f%2Fnews_icon.png?1499092863229');
  var linkText = document.createTextNode(jsonResponse.articles[key].title);
  var descText = jsonResponse.articles[key].description ? jsonResponse.articles[key].description : "Description is currently unavailable. Click link for more details."
  var description = document.createTextNode(descText);
  p.appendChild(description);
  img.height = 80;
  img.width = 100;
  a.appendChild(linkText);
  a.href = jsonResponse.articles[key].url;
  a.target = "_blank";
  div.appendChild(a);
  div.appendChild(img);
  div.appendChild(p);
  li.appendChild(div);
  document.getElementById("myList").appendChild(br);
  document.getElementById("myList").appendChild(li);
}

document.addEventListener('click', function(e){
  if(e.target.tagName == 'BODY'){
    t.closePopup().done();
  }
});

document.addEventListener('keyup', function(e){
  if(e.keyCode == 27){
    t.closePopup().done();
  }
});