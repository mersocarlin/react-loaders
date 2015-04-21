# react-loaders

Delightful and performance-focused pure css loading animations made for React around [Loaders.css](https://github.com/ConnorAtherton/loaders.css)

# Usage

```
var React = require("react");

var BallPulse = require("./components/ball-pulse");
var BallGridPulse = require("./components/ball-grid-pulse");
var BallClipRotate = require("./components/ball-clip-rotate");


module.exports = React.createClass({
  render: function() {
    return (
    	<div>
    		<BallPulse />
    		<BallGridPulse />
    		<BallClipRotate />	
		</div>
    );
  }
});
```