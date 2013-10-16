/* This will tell Ember.js to detect when the application's URL matches '/' and to render the windfarms template. */
WindfarmApp.Router.map(function () {
  this.resource('windfarms', { path: '/' });
});

 /* a WindfarmsRoute object with a model function that returns all the existing Windfarms */
 WindfarmApp.WindfarmsRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('windfarm');
  }
});