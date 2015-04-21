var React = require("react");


var ReactLoaders = require("./react-loaders");


module.exports = React.createClass({displayName: "exports",

  render: function() {
    return (
      React.createElement("div", {className: "react-loaders"}, 
        React.createElement(ReactLoaders, {type: "ball-pulse"}), 
        React.createElement(ReactLoaders, {type: "ball-grid-pulse"}), 
        React.createElement(ReactLoaders, {type: "ball-clip-rotate"})
      )
    );
  }

});
