import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function(){
    Ember.run.once(() => this.preHeaderValue());
  },

  classNameBindings: ['usePreHeader::disabled'],

  preHeaderInput: '',
  disablePreHeader: Em.computed.not('usePreHeader'),
  usePreHeader: false,
  preHeader: '&nbsp;'.htmlSafe(),
  preHeaderValue: function(){
    var preHeaderInput = this.get('preHeaderInput');
    var usePreHeader = this.get('usePreHeader');
    if (usePreHeader === false || preHeaderInput === ''){
      this.set('preHeader', '&nbsp;'.htmlSafe());
    } else {
      this.set('preHeader', preHeaderInput);
    }
  }.observes('preHeaderInput', 'usePreHeader'),

  click: function(event){
    var that = this;
    var labelClick = function(){
      if (that.get('usePreHeader') === false){
        that.set('usePreHeader', true);
      } else {
        that.set('usePreHeader', false);
      }
    };
    var editText = function(){
      if (that.get('usePreHeader') === false){
        that.set('usePreHeader', true);
      }
    };
    
    if (event.target.className === 'text-label pre-header-input'){
      labelClick();
    }
    if (event.target.type === 'text') {
      editText();
    }
  },

  actions: {
  }
});
