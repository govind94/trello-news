/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();

// Elements with IDs are available as properties of `window`.
window.estimate.addEventListener('submit', function(event){
  // Stop the browser trying to submit the form itself.
  event.preventDefault();
  return t.set('card', 'private', 'estimate', window.newsSource.value)
  .then(function(){
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