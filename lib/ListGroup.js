var React    = require('react');
var ListRow  = require('./ListRow');
var ListHead = require('./ListHead');

module.exports = React.createClass({displayName: "exports",
  propTypes: {
  },

  render: function(){
    var rowItems,
      props = this.props;
    rowItems = this.props.groupItem.items.map(function(item, i){
      return (
          React.createElement(ListRow, React.__spread({}, 
            props, 
            {groupIndex: props.groupIndex, 
            rowIndex: i, 
            rowItem: item}))
        );
    });

    return (
      React.createElement("div", {className: "ui-list-group"}, 
        React.createElement(ListHead, React.__spread({}, 
          props, 
          {groupIndex: props.groupIndex, 
          headItem: props.groupItem.name})), 
          rowItems
      )
    );
  }
});