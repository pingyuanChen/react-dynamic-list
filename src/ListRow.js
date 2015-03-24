var React = require('react');

module.exports = React.createClass({
  render: function(){
    var position = {
      group: this.props.groupIndex,
      row: this.props.rowIndex
    };
    return (
      <div className='ui-list-row' onClick={this._onClickRow}>
        {this.props.rowDom(position, this.props.rowItem)}
      </div>
    );
  },

  _onClickRow: function(e){
    var position = {
      group: this.props.groupIndex,
      row: this.props.rowIndex
    };
    this.props.onClickRow(e, position, this.props.rowItem);
  }
});