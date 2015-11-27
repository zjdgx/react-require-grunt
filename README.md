#A react demo with require and grunt

1. grunt react: react, react-dom and browser into dest/js/react.js
2. grunt require: config/config.js and require.js into dest/js/require.js
3. load react.js and require.js

   Note: react.js must load before require.js

4. write test.js as main entry for demo:

   ```
   require(['react', './components/dest/header'], function (React, Header) {
      React.render(
         <Header name='world'/>,
         document.getElementById('main')
      );
   });
   ```

5. write header.jsx component

   ```
   define(['react'], function (React) {
      return React.createClass({
         render: function() {
            return (
               <div className="greeting">
                  Hello, {this.props.name}!
               </div>
            );
         }
      });
   });
   ```

6. grunt jsx file, config as below:

   ```
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
   }
   ```

7. main code in HTML file

   ```
   <div id="main"></div>
   <script type="text/javascript" src="dist/js/react.js"></script>
   <script type="text/javascript" src="dist/js/require.js"></script>
   <script type="text/babel" src="pages/test.js"></script>
   ```
