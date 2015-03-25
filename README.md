# React Dynamic List Component

> react-dynamic-list is a react component, which takes dynamic data and custom template to produce interactive component. 

## Install
```
npm install react-dynamic-list --save
```

## Usage
`List` takes six props, only the data and adapter are required, the others are optional.
* `data`: The list of items to be rendered
* `adapter`: The description of data.(group or simple)
* `rowDom`: The custom row dom render function, which takes postion and data props.
* `headDom`: The custom head dom render function.
* `onClickRow`: The click row handler which takes e, postion and data props.
* `onHeadRow`: The click head handler which takes e, postion and data props.


### Example
```
React.render(
  <List
    data={data}
    adapter={adapter} />,
  document.getElementById('main')
);
```
To get completed example, you can see example folder.

### Demo
![Demo](https://github.com/pingyuanChen/react-dynamic-list/blob/master/react-list.png)

## FAQ