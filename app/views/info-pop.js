import Ember from 'ember';

export default Ember.View.extend({
  tagName: 'span',
  classNameBindings: ['active'],
  classNames: ['info-helper'],
  active: false,
  click: function(event){
    console.log(event);
    var active = this.get('active');
    if (active) {
      this.set('active', false);
    } else {
      this.set('active', true);
    }
  }
});
