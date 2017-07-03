/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();

var jsonResponse = t.arg('jsonResponse');
var category = t.arg('category');
var type = t.arg('type');

document.getElementById("title").innerHTML = "Top News Items: " + category;

if(type === 'board-bar') document.getElementsByTagName("body")[0].setAttribute("bgcolor", "#E6E6FA");

for(var key in jsonResponse.articles){
  var li = document.createElement("li");
  var a = document.createElement('a');
  var linkText = document.createTextNode(jsonResponse.articles[key].title);
  a.appendChild(linkText);
  a.href = jsonResponse.articles[key].url;
  a.target = "_blank";
  a.title = jsonResponse.articles[key].description;
  li.appendChild(a);
  var br = document.createElement('br');
  document.getElementById("myList").appendChild(br);
  document.getElementById("myList").appendChild(li);
}

document.addEventListener('click', function(e){
  if(e.target.tagName == 'BODY'){
    if(type === 'popup') t.closePopup().done();
    else t.closeBoardBar().done();
  }
});

document.addEventListener('keyup', function(e){
  if(e.keyCode == 27){
    if(type === 'popup') t.closePopup().done();
    else t.closeBoardBar().done();
  }
});