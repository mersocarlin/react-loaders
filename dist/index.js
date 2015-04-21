var React = require("react");

var BallPulse = require("./components/ball-pulse");
var BallGridPulse = require("./components/ball-grid-pulse");
var BallClipRotate = require("./components/ball-clip-rotate");


require("loaders.css/loaders.css");


module.exports = React.createClass({displayName: "exports",
  render: function() {
    return (
      React.createElement("div", {className: "react-loaders"}, 
        React.createElement(BallPulse, null), 
        React.createElement(BallGridPulse, null), 
        React.createElement(BallClipRotate, null)
      )
    );
  }
});
