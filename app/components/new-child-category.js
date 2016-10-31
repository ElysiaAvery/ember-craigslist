import Ember from 'ember';

export default Ember.Component.extend({
  addNewChildCategory: false,
    actions: {
      childCategoryFormShow() {
        this.set('addNewChildCategory', true);
      },
      saveChildCategory() {
        var params = {
          title: this.get('title'),
          description: this.get('description'),
          category: this.get('category')
      };
        this.set('addNewChildCategory', false);
        this.sendAction('saveChildCategory', params);
      }
    }
});
