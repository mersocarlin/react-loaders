var React = require("react");
var LoaderGenerator = require("./loader-generator");


module.exports = React.createClass({displayName: "exports",
  render: function() {
    return (
      React.createElement(LoaderGenerator, {cssClass: "ball-scale-ripple-multiple", innerDivs: 3})
    );
  }
});
