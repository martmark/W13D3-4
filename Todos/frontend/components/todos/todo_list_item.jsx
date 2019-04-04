import React from 'react';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    //this.props = props;
  }
  
  render() {
    return (<li key={this.props.idx}>{this.props.todo.title}</li>)
  }
}

export default TodoListItem;