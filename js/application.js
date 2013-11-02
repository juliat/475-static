/* Create a new instance of Ember.Application and make it available as a variable within the browser's JavaScript environment.*/

window.App = Ember.Application.create();

/* set up fixture with sample data */
App.ApplicationAdapter = DS.FixtureAdapter.extend();