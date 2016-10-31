import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  description: DS.attr(),
  listings: DS.hasMany('listing', {async: true}),
  category: DS.belongsTo('category', {async: true})
});
