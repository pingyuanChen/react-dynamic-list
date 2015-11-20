var React     = require('react');
var ListGroup = require('./ListGroup');
var ListRow   = require('./ListRow');

module.exports = React.createClass({
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
        return (<div className=''>{innerHTML}</div>);
      },
      headDom: function(position, data){
        var innerHTML = data || '';
        return (<div className=''>{innerHTML}</div>);
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
          <ListGroup
            {...props}
            key={i}
            groupIndex={i}
            groupItem={item} />
        );
      });
    }else{
      //adapter: plain
      listItems = props.data.map(function(item, i){
        return (
          <ListRow
            {...props}
            key={i}
            groupIndex={0}
            rowIndex={i}
            rowItem={item} />
        );
      });
    }

    return (
      <div className='ui-list'>
        {listItems}
      </div>
    );
  }
});