/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();

var jsonResponse = t.arg('jsonResponse');
var category = t.arg('category');

document.getElementById("title").innerHTML = "Top " + category + " stories:";

document.getElementsByTagName("body")[0].setAttribute("bgcolor", "#E6E6FA");

for(var key in jsonResponse.articles){
  var li = document.createElement("li");
  var a = document.createElement('a');
  var child = document.createElement('div');
  if (key !==0 ) child.style.clear = "left";
  var p1 = document.createElement('p');
  p1.style.float = "left";
  var p2 = document.createElement('p');
  var img = document.createElement('img');
  var div = document.createElement('div');
  div.style.float = "left";
  if (key !== 0) div.style.clear = "left";
  var br = document.createElement('br');
  img.src = (jsonResponse.articles[key].urlToImage ? jsonResponse.articles[key].urlToImage : 'https://cdn.glitch.com/953b60d4-d622-4431-8327-7bde55bd3e5f%2Fnews_icon.png?1499092863229');
  var linkText = document.createTextNode(jsonResponse.articles[key].title);
  var descText = jsonResponse.articles[key].description ? jsonResponse.articles[key].description : "Description is currently unavailable. Click link for more details."
  var description = document.createTextNode(descText);
  img.height = 100;
  img.width = 110;
  p1.appendChild(img);
  child.appendChild(p1);
  p2.appendChild(description);
  child.appendChild(p2);
  //p.appendChild(img);
  //p.appendChild(description);
  a.appendChild(linkText);
  a.href = jsonResponse.articles[key].url;
  a.target = "_blank";
  div.appendChild(a);
  //div.appendChild(br);
  div.appendChild(child);
  li.appendChild(div);
  document.getElementById("myList").appendChild(br);
  document.getElementById("myList").appendChild(li);
}

document.addEventListener('click', function(e){
  if(e.target.tagName == 'BODY'){
    t.closeBoardBar().done();
  }
});

document.addEventListener('keyup', function(e){
  if(e.keyCode == 27){
    t.closeBoardBar().done();
  }
});