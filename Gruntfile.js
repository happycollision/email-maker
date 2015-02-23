var pkg = require('./package.json');

/*global module:false*/
module.exports = function(grunt) {

  // Show elapsed time after tasks run
  require('time-grunt')(grunt);
  // Load all Grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    exec:{
      build:{
        cmd: 'ember build --watch false --environment production'
      }
    },

    buildcontrol:{
      dist: {
        options: {
          dir: 'dist',
          remote: 'git@github.com:happycollision/email-maker.git',
          branch: 'gh-pages',
          commit: true,
          push: true,
          tag: pkg.version
        }
      }
    },

    bump: {
      options: {
        files: ['package.json'],
        updateConfigs: [],
        commit: false,
        //commitMessage: 'Release v%VERSION%',
        //commitFiles: ['package.json'],*/
        //createTag: true,
        //tagName: 'v%VERSION%',
        //tagMessage: 'Version %VERSION%',
        push: false,
        //pushTo: 'upstream',
        //gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
        //globalReplace: false,
        //prereleaseName: false,
        //regExp: false
      }
    },

  });
  // Default task.
  grunt.registerTask('default', ['build']);

  grunt.registerTask('build', ['exec']);


};
