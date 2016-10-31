import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  actions: {
    saveListing() {
      var params = {
        title: this.get('title'),
        description: this.get('description'),
        price: this.get('price'),
        image: this.get('image'),
        timestamp: moment().format('LLLL'),
        category: this.get('category'),
        childCategory: this.get('child-category')
      };
      if (params.title === undefined || params.description === undefined || params.price === undefined || params.image === undefined) {
        alert("Looks like one of your form fields is empty!");
      } else {
        this.sendAction('saveListing', params);
        this.set('title', '');
        this.set('description', '');
        this.set('price', '');
        this.set('image', '');
      }
    }
  }
});
