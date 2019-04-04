import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      title: '',
      body: '',
      done: false
    };
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
  }

  updateTitle(e) {
    e.preventDefault();
    this.setState({title: e.target.value});
  }

  updateBody(e) {
    e.preventDefault();
    this.setState({ body: e.target.value });
  }


  render() {
    return (
      <div>
        <form>
          <label htmlFor="todoTitle">Title</label>
          <input type="text" id="todoTitle" value={this.state.title} onChange={this.updateTitle} />
          <label htmlFor="todoBody">Body</label>
          <input type="text" id="todoBody" value={this.state.body} onChange={this.updateBody} />
        </form>
      </div>
    )
  }
}



