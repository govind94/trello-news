/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;

TrelloPowerUp.initialize({
	'card-buttons': function(t, options) {
		return [{
			icon: "https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Fstartup.png?1494946700268",
			text: 'Trello-News',
      callback: function(t) {
        return t.popup({
          title: "Trello-News",
          url: 'estimate.html',
        });
      }
		}];
	},
  'card-from-url': function(t, options) {
    return {
      name: 'Suitable name based on options.url',
      desc: 'Suitable description based on options.url'
    };
  }
});