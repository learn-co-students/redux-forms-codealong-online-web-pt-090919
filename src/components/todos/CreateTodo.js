import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateTodo extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  // handleChange(event) {
  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  // when called, what's stored in this.state will be
  // dispatched to reducer w/ the action
  handleSubmit = event => {
    event.preventDefault();
    // addtodo = function in props that is able take arguments
    // this.props.addTodo(this.state)
    this.props.dispatch({ type: 'ADD_TODO', payload: this.state });

  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <p>
            <label>add todo</label>
            <input type="text" onChange={this.handleChange} value={this.state.text} />
          </p>
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    // include data from the form - we'll call that key 'payload
    addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
  }
};

// export default connect(
//   null,
//   mapDispatchToProps
// )(CreateTodo);
export default connect()(CreateTodo);