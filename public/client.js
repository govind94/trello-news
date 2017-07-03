/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;

TrelloPowerUp.initialize({
  'board-buttons': function(t, board){
    return [{
      icon: "https://cdn.glitch.com/953b60d4-d622-4431-8327-7bde55bd3e5f%2Fnews_icon.png?1499092863229",
      text: 'T-News',
      callback: function(t){
        return t.popup({
          title: "T-News",
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