import Ember from 'ember';

export default Ember.Controller.extend({
  dasherizedPath: function(){
    return this.get('currentPath').replace(/\./g,'-');
  }.property('currentPath'),
  theYear: new Date().getFullYear()
});
