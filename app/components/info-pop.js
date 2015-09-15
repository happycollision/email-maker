import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  classNameBindings: ['active'],
  classNames: ['info-helper'],
  active: false,
  click: function(event){
    var active = this.get('active');
    var triggerHit = event.target.className.indexOf('info-pop-trigger') > -1;
    if (!triggerHit){return;}
    if (active) {
      this.set('active', false);
    } else {
      this.set('active', true);
    }
  }
});
