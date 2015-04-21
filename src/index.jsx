var React = require("react");


var ReactLoaders = require("./react-loaders");


module.exports = React.createClass({

  render: function() {
    return (
      <div className="react-loaders">
        <ReactLoaders type="ball-pulse"/>
        <ReactLoaders type="ball-grid-pulse"/>
        <ReactLoaders type="ball-clip-rotate"/>
      </div>
    );
  }

});
