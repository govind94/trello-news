/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();

function getUrl(source)
{
  return 'https://newsapi.org/v1/articles?source='+source+'&sortBy=top&apiKey=8c2a4afcffb74f4faee17b68d0b3fc18';
}

function dataFetch(source)
{
  return fetch(getUrl(source))
    .then(function(response) {
      return response.json();
    })
}

var newsCategory = {
  'ge': 'the-new-york-times',
  't': 'techcrunch',
  's': 'espn',
  'b': 'business-insider',
  'p': 'breitbart-news',
  'e': 'buzzfeed',
  'm': 'mtv-news-uk',
  'sn': 'national-geographic',
  'ga': 'ign'
}

window.estimate.addEventListener('submit', function(event){
  event.preventDefault();
  return t.set('board', 'private', 'estimate', window.newsSource.value)
  .then(function(){
    console.log("5");
    var source = newsCategory[window.newsSource.value];
    return dataFetch(source)
  })
  .then(function(jsonResponse) {
    console.log("7");
    return t.boardBar({
      url: '../board-bar.html',
      args: { jsonResponse: jsonResponse },
      height: 250
    }); 
  })
  .catch(function() {
    console.log('bad request');
    throw t.NotHandled();
  })
  .then(function(){
    t.closePopup();
  });
});

t.render(function(){
  return t.get('board', 'private', 'estimate')
  .then(function(estimate){
    window.newsSource.value = estimate;
  })
  .then(function(){
    t.sizeTo('#estimate').done();
  });
});