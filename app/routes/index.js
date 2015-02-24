import Ember from 'ember';

export default Ember.Route.extend({
  actions:{
    didTransition: function(){
      $('html head').find('.client-styles').remove();
      $('html head').append('<link rel="stylesheet" class="client-styles" href="assets/client-styles/index.css">');
    }    
  }
});
