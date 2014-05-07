var Router = Ember.Router.extend({
  location: 'history'
});

Router.map(function() {
  this.resource('practices');
});

export default Router;
