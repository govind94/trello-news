/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;

TrelloPowerUp.initialize({
	'card-buttons': function(t, options) {
		return [{
			icon: "http://www.thelegacy.us/images/categories/Tech-News.jpg",
			text: 'Tech-News',
      callback: function(t) {
        return t.popup({
          title: "Tech-News",
          url: 'estimate.html',
        });
      }
		}];
	}
});