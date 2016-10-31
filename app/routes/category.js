import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findRecord('category', params.category_id);
  },
  actions: {
    saveChildCategory(params) {
      var newChildCategory = this.store.createRecord('child-category', params);
      var category = params.category;
      category.get('childCategories').addObject(newChildCategory);
      newChildCategory.save().then(function(){
        return category.save();
      });
      this.transitionTo('index');
    }
  }
});
