import Ember from 'ember';

export default Ember.Route.extend({
  actions:{
    didTransition: function(){
      $('html head').find('.client-styles').remove();
      FastClick.attach(document.body);
    }    
  }
});
