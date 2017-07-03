/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();

function getUrl(source, sortBy){
  return 'https://newsapi.org/v1/articles?source='+source+'&sortBy='+sortBy+'&apiKey=8c2a4afcffb74f4faee17b68d0b3fc18';
}

function dataFetch(source, sortBy){
  return fetch(getUrl(source, sortBy))
    .then(function(response){
      return response.json();
    })
}

var source;
var sortBy = ['top', 'latest', 'popular'];
var newsCategory = {
  'General': 'the-new-york-times',
  'Technology': 'techcrunch',
  'Sport': 'espn',
  'Business': 'business-insider',
  'Politics': 'breitbart-news',
  'Entertainment': 'buzzfeed',
  'Music': 'mtv-news',
  'Science and Nature': 'national-geographic',
  'Gaming': 'ign'
}

window.news.addEventListener('submit', function(event){
  event.preventDefault();
  return t.set('board', 'private', 'news', window.newsSource.value)
  .then(function(){
    console.log("5");
    source = newsCategory[window.newsSource.value];
    return dataFetch(source, sortBy[0]);
  })
  .then(function(jsonResponse){
    if(jsonResponse.articles === undefined || jsonResponse.articles.length === 0) return dataFetch(source, sortBy[1]);
    else return jsonResponse;
  })
  .then(function(jsonResponse){
    if(jsonResponse.articles === undefined || jsonResponse.articles.length === 0) return dataFetch(source, sortBy[2]);
    else return jsonResponse;
  })
  .then(function(jsonResponse){
    console.log("7");
    return t.get('board', 'private', 'settings')
    .then(function(settings){
      if(settings === "Board-Bar"){
        return t.boardBar({
          url: '../show-news.html',
          args: { jsonResponse: jsonResponse, category: window.newsSource.value, type: 'board-bar' },
          height: 250
        });
      }
      else{
        return t.popup({
          url: '../show-news.html',
          args: { jsonResponse: jsonResponse, category: window.newsSource.value, type: 'popup' }
        });
      }
    });
  })
  .catch(function(error){
    console.log('bad request');
    throw t.NotHandled();
  });
});

t.render(function(){
  return t.get('board', 'private', 'news')
  .then(function(news){
    window.newsSource.value = news;
  })
  .then(function(){
    t.sizeTo('#news').done();
  });
});