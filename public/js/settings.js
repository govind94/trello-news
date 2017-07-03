/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();

window.settings.addEventListener('submit', function(event){
  event.preventDefault();
  return t.set('board', 'private', 'settings', window.newsShow.value)
  .then(function(){
    t.closePopup();
  });
});

t.render(function(){
  return t.get('board', 'private', 'settings')
  .then(function(settings){
    window.newsShow.value = settings;
  })
  .then(function(){
    t.sizeTo('#settings').done();
  });
});