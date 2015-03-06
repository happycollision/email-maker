/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'magic-email-maker',
    environment: environment,
    baseURL: '/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.baseURL = '/';
    ENV.contentSecurityPolicyHeader = "Content-Security-Policy";
    ENV.googleAnalytics = {
      webPropertyId: 'UA-60434518-1'
    };
  }

  ENV.contentSecurityPolicy = {
    //'default-src': "'none'",
    'frame-src': "https://*.wufoo.com",
    'script-src': "'self' 'unsafe-inline' http://*.wufoo.com http://cdnjs.cloudflare.com/ajax/libs/marked/ https://www.google-analytics.com", // Allow scripts from https://cdn.mxpnl.com
    // 'font-src': "'self' http://fonts.gstatic.com", // Allow fonts to be loaded from http://fonts.gstatic.com
    'connect-src': "'self' https://api.flickr.com", // Allow data (ajax/websocket) from api.mixpanel.com and custom-api.local
    'img-src': "'self' https://*.flickr.com https://*.staticflickr.com https://www.google-analytics.com",
    'style-src': "'self' 'unsafe-inline'", // Allow inline styles and loaded CSS from http://fonts.googleapis.com 
    // 'media-src': "'self'"
  };

  return ENV;
};
