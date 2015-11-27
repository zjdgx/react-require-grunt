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

/*require(['react'], function (React) {
   return React.createFactory(React.createClass({
      render: function() {
         return (
            <div className="greeting">
               Hello, {this.props.name}!
            </div>
         );
      }
   }));
});*/


/*var react = require('react');

return react.createClass({
   render: function() {
      return (
         <div className="greeting">
            Hello, {this.props.name}!
         </div>
      );
   }
});*/
