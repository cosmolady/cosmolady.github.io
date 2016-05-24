module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

					sass: {
						dist: {
							options: {
								style: 'compressed'
							},
							files: {
								'css/build/global.css': 'css/*.scss'
							}
						}
					},
					watch: {
						scripts: {
							files: ['js/*.js'],
							tasks: ['concat'],
							options: {
								spawn: false,
							},
						},
						css: {
							files: ['css/*.scss'],
							tasks: ['sass'],
							options: {
								spawn: false,
							}
						}
					}
	});


	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['sass', 'watch']);

}
