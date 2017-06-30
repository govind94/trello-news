var https = require('https');
/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();

function httpsGet(url, callback) 
{
    https.get(url, function(res) {
        var body = '';
        res.on('data', function(data) {
            body += data;
        });
        res.on('end', function() {
            callback(body);
        });
    }).on('error', function(e){
    console.log('Error: ' + e);
    });
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
    var url = 'https://newsapi.org/v1/articles?source='+source+'&sortBy=popular&apiKey=8c2a4afcffb74f4faee17b68d0b3fc18';
    httpsGet(url, function(response) {
      var result = JSON.parse(response);
      window.open(result.articles[0].url)
    }
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