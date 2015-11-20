var ReactDOM = require('react-dom');
var List = require('../../lib/List');


var data = [
  {
    name : "A",
    items : [{
      title : "A_A"
    }, {
      title : "A_B"
    }, {
      title : "A_C"
    }]
  }, {
    name : "B",
    items : [{
      title : "B_A"
    }, {
      title : "B_B"
    }, {
      title : "B_C"
    }]
  },{
    name : "C",
    items : [{
      title : "C_A"
    },{
      title : "C_B"
    },{
      title : "C_C"
    }]
  },{
    name : "D",
    items : [{
      title : "D_A"
    },{
      title : "D_B"
    },{
      title : "D_C"
    }]
  },{
    name : "E",
    items : [{
      title : "E_A"
    },{
      title : "E_B"
    },{
      title : "E_C"
    }]
  },{
    name : "F",
    items : [{
      title : "F_A"
    },{
      title : "F_B"
    },{
      title : "F_C"
    }]
  },{
    name : "G",
    items : [{
      title : "G_A"
    },{
      title : "G_B"
    },{
      title : "G_C"
    }]
  },{
    name : "H",
    items : [{
      title : "H_A"
    },{
      title : "H_B"
    },{
      title : "H_C"
    }]
  }
];
var adapter = {
  type: 'group'
};
var createRowDom = function(position, data){
  var innerHTML = (data && data.title) || '';
  return (<div className=''>{innerHTML}</div>);
},
  createHeadDom = function(position, data){
    var innerHTML = data || '';
    return (<div className=''>{innerHTML}</div>);
  };


ReactDOM.render(
  <List
    data={data}
    adapter={adapter} />,
  document.getElementById('main')
);
