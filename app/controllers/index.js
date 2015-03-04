import Ember from 'ember';

export default Ember.Controller.extend({
  isHome: true,
  header: "Yo! I'm The Fonz.",
  body: "Eeeeeyyy! All the cool kids send emails with *italic text* and **bold text** and [links](http://en.wikipedia.org/wiki/Fonzie)!",

  vButton: Em.computed.and('vButtonLink', 'vButtonText'),

  vButtonText: "Watch My Video",
  vButtonLink: "https://www.youtube.com/watch?v=JQc9L2RbQkw",
});
