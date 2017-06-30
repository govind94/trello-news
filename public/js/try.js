/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();

// Elements with IDs are available as properties of `window`.
window.estimate.addEventListener('submit', function(event){
  // Stop the browser trying to submit the form itself.
  event.preventDefault();
  return window.open('https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey=8c2a4afcffb74f4faee17b68d0b3fc18').then(function(){
    t.closePopup();
  });
});

t.render(function(){
  return t.get('card', 'private', 'estimate')
  .then(function(estimate){
    window.newsSource.value = estimate;
  })
  .then(function(){
    t.sizeTo('#estimate').done();
  });
});