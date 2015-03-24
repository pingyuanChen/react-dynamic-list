var React = require('react');

module.exports = React.createClass({displayName: "exports",
  render: function(){
    var position = {
      group: this.props.groupIndex
    };
    return (
      React.createElement("div", {className: "ui-list-head", onClick: this._onClickHead}, 
        this.props.headDom(position, this.props.headItem)
      )
    );
  },

  _onClickHead: function(e){
    var position = {
      group: this.props.groupIndex
    };
    this.props.onClickHead(e, position, this.props.headItem);
  }
});