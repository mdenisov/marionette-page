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
        src: "src/<%= pkg.name %>.js",
        dest: "build/<%= pkg.name %>-<%= pkg.version %>.min.js"
      }
    },

    qunit: {
      all: ["test/**/*.html"]
    }
  });

  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks('grunt-contrib-qunit');

  grunt.registerTask("default", ["jshint", "qunit"]);
  grunt.registerTask("build", ["jshint", "qunit", "uglify"]);

};