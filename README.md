# react-loaders

Delightful and performance-focused pure css loading animations made for React around [Loaders.css](https://github.com/ConnorAtherton/loaders.css)

# Usage

```
var React = require("react");
var ReactLoaders = require("react-loaders/dist/react-loaders");


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
```