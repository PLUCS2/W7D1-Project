import React from 'react';
// import { connect } from 'react-redux';
// import 

class AddToDoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "", body: "" }
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   const { title, body } = this.state;
  //   mapDispatchToProps.receiveTodo(title, body);
  // }
  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    }
  }

  render() {
    return (
      <form className="add-item" onSubmit={this.handleSubmit}>
        <label>
          Title
          <input type="text" value={this.state.title} onChange={this.update('title')}/>
        </label>
        <label>
          Body
          <input type="text" value={this.state.body} onChange={this.update('body')}/>
        </label>
      </form>
    )
  }
}