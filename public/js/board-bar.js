/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();
var jsonResponse = t.arg('jsonResponse');

document.getElementById("one").innerHTML = jsonResponse.articles[0].title;
document.getElementById("one").href = jsonResponse.articles[0].url;
document.getElementById("one").title = jsonResponse.articles[0].description;

document.getElementById("two").innerHTML = jsonResponse.articles[1].title;
document.getElementById("two").href = jsonResponse.articles[1].url;
document.getElementById("two").title = jsonResponse.articles[1].description;

document.getElementById("three").innerHTML = jsonResponse.articles[2].title;
document.getElementById("three").href = jsonResponse.articles[2].url;
document.getElementById("three").title = jsonResponse.articles[2].description;

document.getElementById("four").innerHTML = jsonResponse.articles[3].title;
document.getElementById("four").href = jsonResponse.articles[3].url;
document.getElementById("four").title = jsonResponse.articles[3].description;

document.getElementById("five").innerHTML = jsonResponse.articles[4].title;
document.getElementById("five").href = jsonResponse.articles[4].url;
document.getElementById("five").title = jsonResponse.articles[4].description;