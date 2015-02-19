import Ember from 'ember';

export default Ember.Controller.extend({
  header: "Hi, I'm Carol.",
  header2: "I'd like to work with you.",
  body: "I saw your ad in Backstage and would like to submit for the role of Rona Lisa Perretti in *The 25th Annual Putnam County Spelling Bee*.\n\nI've played the role twice before at [Rocky Mountain Repertory Theatre](http://www.rockymountainrep.com/) and Dominican University.\n\n\n\nSincerely,  \nCarol Rose",

  vButton: Em.computed.and('vButtonLink', 'vButtonText'),
  rButton: Em.computed.and('rButtonLink', 'rButtonText')
});
