import Ember from 'ember';
export function initialize(/* container, application */) {
  // application.inject('route', 'foo', 'service:foo');

  Ember.TextArea.reopen({
    didInsertElement: function(){
      this.$().elastic();
    }
  });

}

export default {
  name: 'ui/text-area',
  initialize: initialize
};
