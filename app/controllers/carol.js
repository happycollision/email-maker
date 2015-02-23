import Ember from 'ember';

export default Ember.Controller.extend({
  header: "Hi, I'm Carol.",
  header2: "I'd like to work with you.",
  body: "I am excited to say things with *italics* and **bold** and [links](http://www.example.com)!\n\nSincerely,  \nCarol Rose\n\n[rosecarolrose@gmail.com](mailto:rosecarolrose@gmail.com)  \n[carolroseactress.com](http://www.carolroseactress.com)",

  vButton: Em.computed.and('vButtonLink', 'vButtonText'),
  rButton: Em.computed.and('rButtonLink', 'rButtonText'),

  rButtonText: "View My Resumé",
  rButtonLink: "http://happycollision.github.io/CarolRose-Website/resume/",
  vButtonText: "Watch My Videos",
  vButtonLink: "http://happycollision.github.io/CarolRose-Website/media/",
  
});
