import Ember from 'ember';

export default Ember.Component.extend({
  addNewCity: false,
  actions: {
    cityFormShow() {
      this.set('addNewCity', true);
    },

    addNewCity() {
      var params = {
        name: this.get('name'),
        attractions: this.get('attractions'),
        country: this.get('country'),
      };
      this.set('addNewCity', false),
      this.sendAction('saveCity', params);
    }
  }

});
