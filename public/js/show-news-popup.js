/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();

var jsonResponse = t.arg('jsonResponse');
var category = t.arg('category');

document.getElementById("title").innerHTML = "Top " + category + " stories:";

for(var key in jsonResponse.articles){
  var div = document.createElement('div');
  div.className = "col-md-6 card";
  var childDiv = document.createElement('div');
  childDiv.className = "container";
  var img = document.createElement('img');
  img.src = (jsonResponse.articles[key].urlToImage ? jsonResponse.articles[key].urlToImage : 'https://cdn.glitch.com/953b60d4-d622-4431-8327-7bde55bd3e5f%2Fnews_icon.png?1499092863229');
  img.height = 100;
  img.width = 110;
  var p = document.createElement('p');
  p.className = "text-success";
  p.style.display = "inline";
  var descText = jsonResponse.articles[key].description ? jsonResponse.articles[key].description : "Description is currently unavailable. Click link for more details."
  var description = document.createTextNode(descText);
  p.appendChild(description);
  var center = document.createElement('center');
  var a = document.createElement('a');
  var linkText = document.createTextNode(jsonResponse.articles[key].title);
  a.appendChild(linkText);
  a.href = jsonResponse.articles[key].url;
  a.target = "_blank";
  a.title = jsonResponse.articles[key].title;
  center.appendChild(a);
  childDiv.appendChild(center);
  div.appendChild(childDiv);
  div.appendChild(img);
  div.appendChild(p);
  document.getElementById("test").appendChild(div);
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