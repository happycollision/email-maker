import Ember from 'ember';

export default Ember.View.extend({
  templateName: 'pre-header-text',
  didInsertElement: function(){
    var binding = Em.Binding.from('preHeader').to('controller.preHeader');
    //console.log(this.controller.preHeader)
    binding.connect( this );
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
      this.set('preHeader', '&nbsp;');
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
