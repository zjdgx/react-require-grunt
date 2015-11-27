var require = {
   baseUrl: '<%= baseUrl %>',
	urlArgs: 'bust=<%= requireJSVersion %>',
	paths: {
      jquery: 'dist/js/jquery.min',
      react: 'dist/js/react',
      reactDOM: 'libs/react-dom.min',
      browser: 'libs/browser.min',
      homepage: 'pages/homepage'
   },
   shim: {
      reactDOM: {
         deps: ['react']
      },
      browser: {
         deps: ['react', 'reactDOM']
      }
   }
};
