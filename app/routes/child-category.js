import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    // return this.store.findRecord('child-category', params.childCategory_id);
    return Ember.RSVP.hash({
      log: console.info("Really? " + params),
      childCategory: this.store.findRecord('child-category', params.childCategory_id),
      listings: this.store.findAll('listing')
    });
  },
  actions: {
    saveListing(params) {
      var newListing = this.store.createRecord('listing', params);
      var childCategory = params.childCategory;
      childCategory.get('listings').addObject(newListing);
      newListing.save().then(function(){
        return childCategory.save();
      });
      this.transitionTo('child-category', childCategory);
    }
  }
});
