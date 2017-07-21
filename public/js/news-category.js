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

window.news.addEventListener('submit', function(event){
  event.preventDefault();
  source = window.newsSource.value;
  return dataFetch(source, sortBy[0])
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
          url: '../show-news-board-bar.html',
          args: { jsonResponse: jsonResponse, category: window.newsCategory.value },
          height: 500
        });
      }
      else{
        return t.popup({
          url: '../show-news-popup.html',
          args: { jsonResponse: jsonResponse, category: window.newsCategory.value },
          height: 700
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
    t.sizeTo('#news').done();
});