import React, { Component } from 'react';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.form = React.createRef();
    this.inputName = React.createRef();
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    this.inputName.current.focus();
  }
  onSubmit(event) {
    event.preventDefault();
    var newItemValue = this.inputName.current.value;
    console.log(newItemValue);
    
    if(newItemValue) {
      this.props.addItem({newItemValue});
      this.form.reset();
    }
  }
  render () {
    return (
      <form ref={form => this.form = form} onSubmit={this.onSubmit} className="form-inline">
        <input type="text" ref={this.inputName} className="form-control" placeholder="add a new todo..."/>
        <button type="submit" className="btn btn-default">Add</button> 
      </form>
    );   
  }
}

export default TodoForm;
