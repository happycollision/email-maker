import Ember from 'ember';

export default Ember.Component.extend({
  
  didInsertElement: function(){
    var binding = Em.Binding.from('preHeader').to('_parentView._controller.preHeader');
    //console.log(this.controller.preHeader)
    binding.connect( this );
  },

  preHeaderInput: '',
  disablePreHeader: Em.computed.not('usePreHeader'),
  usePreHeader: false,
  preHeader: '&nbsp;',
  preHeaderValue: function(){
    var preHeaderInput = this.get('preHeaderInput');
    var usePreHeader = this.get('usePreHeader');
    if (usePreHeader === false || preHeaderInput === ''){
      this.set('preHeader', '&nbsp;');
    } else {
      this.set('preHeader', preHeaderInput);
    }
  }.observes('preHeaderInput', 'usePreHeader')
});
