import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash( {
      categories:  this.store.findAll('category'),
      childCategories: this.store.findAll('child-category')
    });
  }
  // setupController(controller, models) {
  //   controller.set('parent-categories', models.parentCategories);
  // }
});
