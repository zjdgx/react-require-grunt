module.exports = function (grunt) {
   grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      dirs: {
         js: './dist/js',
         css: './dist/css',
         img: './dist/img'
      },
      react: {
			compile: {
				files: [
					{
						expand: true,
						cwd: 'components/jsx',
						src: ['**/*.jsx'],
						dest: 'components/dest',
						ext: '.js'
					}
				]
			}
		},
      concat: {
         dev: {
            options: {
					separator: ';',
					process: {
						data: {
							baseUrl: '/reactDemo',
							requireJSVersion: +new Date
						}
					}
				},
				files: {
					'<%= dirs.js %>/require.js': ['config/config.js', 'node_modules/requirejs/require.js'],
               '<%= dirs.js %>/react.js': ['node_modules/react/dist/react.min.js', 'node_modules/react-dom/dist/react-dom.min.js', 'libs/browser.min.js']
				}
         },
         devCss: {

         },
         prod: {

         }
      }
   });

   grunt.loadNpmTasks('grunt-react');
   grunt.loadNpmTasks('grunt-contrib-concat');

   grunt.registerTask('default', ['react', 'concat:dev']);
};
