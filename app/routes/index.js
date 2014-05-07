var IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('practices');
  }
});

export default IndexRoute;
