import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      { text: 'Create Ember App' },
      { text: 'Read Ember Ignite' },
      { text: 'Master Ember' }
    ]
  }
});
