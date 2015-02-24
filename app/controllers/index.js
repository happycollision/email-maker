import Ember from 'ember';

export default Ember.Controller.extend({
  isHome: true,
  header: "Hi, I'm The Fonz.",
  body: "I am excited to say things with *italics* and **bold** and [links](http://www.example.com)!\n\nSincerely,  \nArthur Fonzarelli",

  vButton: Em.computed.and('vButtonLink', 'vButtonText'),

  vButtonText: "Watch My Video",
  vButtonLink: "https://www.youtube.com/watch?v=JQc9L2RbQkw",
});
