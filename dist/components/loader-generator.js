var React = require("react");


module.exports = React.createClass({displayName: "exports",
  propTypes: {
    cssClass: React.PropTypes.string.isRequired,
    innerDivs: React.PropTypes.number.isRequired
  },

  getDefaultProps: function () {
    return {
      cssClass: "ball-pulse",
      innerDivs: 3
    };
  },

  renderDivs: function () {
    var content = "";
    for(var i = 0; i < this.props.innerDivs; i++)
      content += "<div></div>";
    return content;
  },

  render: function() {
    var cssClass= "loader-inner " + this.props.cssClass;
    return (
      React.createElement("div", {className: cssClass, 
         dangerouslySetInnerHTML: {__html: this.renderDivs()}}
      )
    );
  }
});
