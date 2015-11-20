var React    = require('react');
var ListRow  = require('./ListRow');
var ListHead = require('./ListHead');

module.exports = React.createClass({
  propTypes: {
  },

  render: function(){
    var rowItems,
      props = this.props;
    rowItems = this.props.groupItem.items.map(function(item, i){
      return (
          <ListRow
            {...props}
            groupIndex={props.groupIndex}
            rowIndex={i}
            rowItem={item} />
        );
    });

    return (
      <div className='ui-list-group'>
        <ListHead
          {...props}
          groupIndex={props.groupIndex}
          headItem={props.groupItem.name} />
          {rowItems}
      </div>
    );
  }
});