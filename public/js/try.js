/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();

function getUrl(source)
{
  return 'https://newsapi.org/v1/articles?source='+source+'&sortBy=popular&apiKey=8c2a4afcffb74f4faee17b68d0b3fc18';
}

function dataFetch(source)
{
  return fetch(getUrl(source))
    .then(function(response) {
      return response.json();
    })
}

var newsCategory = {
  'General': 'the-new-york-times',
  'Technology': 'hacker-news',
  'Sport': 'espn',
  'Business': 'business-insider',
  'Politics': 'breitbart-news',
  'Entertainment': 'buzzfeed',
  'Music': 'mtv-news',
  'Science and Nature': 'national-geographic',
  'Gaming': 'ign'
}

// Elements with IDs are available as properties of `window`.
window.estimate.addEventListener('submit', function(event){
  // Stop the browser trying to submit the form itself.
  event.preventDefault();
  return t.set('card', 'private', 'estimate', window.newsSource.value)
  .then(function(){
    console.log("5");
    var source = newsCategory[window.newsSource.value];
    return dataFetch(source)
  })
  .then(function(json) {
    console.log("7");
    window.open(json.articles[0].url);
  })
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