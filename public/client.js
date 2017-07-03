/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;

TrelloPowerUp.initialize({
  'board-buttons': function(t, board){
    return [{
      icon: "https://conceptdraw.com/a2648c3/p18/preview/640/pict--news-windows-8-apps---vector-stencils-library.png--diagram-flowchart-example.png",
      text: 'Trello-News',
      callback: function(t){
        return t.popup({
          title: "Trello-News",
          url: 'news-category.html',
        });
      }
    }];
  },
  'show-settings': function(t, options){
    return t.popup({
      title: 'Settings',
      url: 'settings.html',
      height: 250
    });
  }
});