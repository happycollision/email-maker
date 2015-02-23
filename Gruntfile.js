/*global module:false*/
module.exports = function(grunt) {

  // Show elapsed time after tasks run
  require('time-grunt')(grunt);
  // Load all Grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    pkg: require('./package.json'),

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
          tag: '<%= pkg.version %>'
        }
      }
    },

    bump: {
      options: {
        files: ['package.json'],
        updateConfigs: ['pkg'],
        commit: true,
        commitMessage: 'Bump to v%VERSION%',
        commitFiles: ['-a'],
        createTag: true,
        tagName: 'v%VERSION%',
        tagMessage: 'Version %VERSION%',
        push: true,
        pushTo: 'origin',
        //gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
        //globalReplace: false,
        //prereleaseName: false,
        //regExp: false
      }
    },

    copy: {
      cname: {
        src: 'CNAME',
        dest: 'dist/CNAME',
      },
    },

  });
  // Default task.
  grunt.registerTask('default', ['build']);

  grunt.registerTask('build', ['exec', 'copy']);

  grunt.registerTask('deploy', ['build', 'buildcontrol']);


};
