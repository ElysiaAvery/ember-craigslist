import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  description: DS.attr(),
  childCategories: DS.hasMany('child-categories', { async: true })
});
