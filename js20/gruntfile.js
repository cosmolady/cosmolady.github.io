module.exports = function (grunt) {


	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			dist: {
				src: ['styles/.scss'],
				dest: 'styles.main.css',
			}
		},

		sass: {
			dist: {
				files: [{
					expand: true,
					cwd: 'css',
					src: ['sass/*.scss'],
					dest: 'css',
					ext: '.css'
      			}]
			}
		},
		watch: {
			css: {
				files: ['css/sass/style.scss'],
				tasks: ['concat', 'sass'],
				options: {
					livereload: true,
				},
			},
		}
	});


	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['concat', 'sass', 'watch']);

};