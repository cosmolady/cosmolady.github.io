module.exports = function (grunt) {


	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			dist: {
				src: ['js/src/jMyCarousel.js', 'js/src/script.js'],
				dest: 'js/dist/script.main.js',
			}
		},
		uglify: {
			build: {
				src: 'js/dist/script.main.js',
				dest: 'js/dist/script.main.min.js'
			}
		},

		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'img/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'img/build/'
        }]
			}
		}
	});


	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');

	grunt.registerTask('default', ['concat', 'uglify', 'imagemin']);

};