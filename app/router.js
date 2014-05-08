var Router = Ember.Router.extend({
  location: 'history'
});

Router.map(function() {
  this.resource('practices', function() {
    this.route('new');
    this.route('show', { path: '/:id' });
  });
});

export default Router;
