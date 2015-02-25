import Ember from 'ember';

export default Ember.Controller.extend({
  header: "Hi, I'm Don.",
  body: "I am interested in playing the role of **ROLE** in your upcoming production of *PRODUCTION*.",
  body2: "Thanks for your consideration!\n\nSincerely,  \nDon Denton\n\n[don@dondentonactor.com](mailto:don@dondentonactor.com)  \n[dondentonactor.com](http://dondentonactor.com)",

  vButton: Em.computed.and('vButtonLink', 'vButtonText'),
  rButton: Em.computed.and('rButtonLink', 'rButtonText'),

  rButtonText: "View My Resumé",
  rButtonLink: "http://dondentonactor.com/resume/",
  vButtonText: "Watch My Videos",
  vButtonLink: "http://dondentonactor.com/video-audio/",
  
});
