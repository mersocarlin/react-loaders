var React = require("react");
var LoaderGenerator = require("./loader-generator");


module.exports = React.createClass({
  render: function() {
    return (
      <LoaderGenerator cssClass="line-scale-party" innerDivs={4} />
    );
  }
});
