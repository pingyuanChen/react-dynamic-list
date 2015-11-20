var React     = require('react');
var ListGroup = require('./ListGroup');
var ListRow   = require('./ListRow');

module.exports = React.createClass({displayName: "exports",
  propTypes: {
    data: React.PropTypes.array,
    adapter: React.PropTypes.object,
    rowDom: React.PropTypes.func,
    headDom: React.PropTypes.func,
    onClickRow: React.PropTypes.func,
    onClickHead: React.PropTypes.func,
  },


  getInitialState: function(){
    return {};
  },
  getDefaultProps: function(){
    return {
      rowDom: function(position, data){
        var innerHTML = (data && data.title) || '';
        return (React.createElement("div", {className: ""}, innerHTML));
      },
      headDom: function(position, data){
        var innerHTML = data || '';
        return (React.createElement("div", {className: ""}, innerHTML));
      },
      onClickRow: function(e, position, data){
        alert('click row: '+position.group+', '+position.row+'\n'+'data: '+JSON.stringify(data));
      },
      onClickHead: function(e, position, data){
        alert('click head:'+position.group+'\n'+'data: '+JSON.stringify(data));
      }
    };
  },


  render: function(){
    var listItems,
      props = this.props;
    if(props.adapter && props.adapter.type == 'group'){
      listItems = props.data.map(function(item, i){
        return (
          React.createElement(ListGroup, React.__spread({}, 
            props, 
            {key: i, 
            groupIndex: i, 
            groupItem: item}))
        );
      });
    }else{
      //adapter: plain
      listItems = props.data.map(function(item, i){
        return (
          React.createElement(ListRow, React.__spread({}, 
            props, 
            {key: i, 
            groupIndex: 0, 
            rowIndex: i, 
            rowItem: item}))
        );
      });
    }

    return (
      React.createElement("div", {className: "ui-list"}, 
        listItems
      )
    );
  }
});