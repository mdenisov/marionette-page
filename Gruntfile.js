module.exports = function(grunt) {

  grunt.initConfig({
    
    pkg: grunt.file.readJSON("package.json"),

    jshint: {
      all: ["Gruntfile.js", "src/**/*.js"]
    },
    
    uglify: {
      options: {
        banner: "/*! <%= pkg.name %> <%= grunt.template.today('yyyy-mm-dd') %> */\n"
      },
      build: {
        src: "build/<%= pkg.name %>-<%= pkg.version %>.js",
        dest: "build/<%= pkg.name %>-<%= pkg.version %>.min.js"
      }
    },

    qunit: {
      all: ["test/**/*.html"]
    },

    concat: {
      dist: {
        src: ["src/marionette-page.js", "src/marionette-page-section.js"],
        dest: "build/<%= pkg.name %>-<%= pkg.version %>.js"
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask("default", ["jshint", "qunit"]);
  grunt.registerTask("build", ["jshint", "qunit", "concat", "uglify"]);

};