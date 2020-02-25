import React, { Component } from 'react';

class Employee extends Component {
  handleClick = () => {
    this.props.onRotate(this.props);
  }

  render() {
    return (
      <div className="Employee" onClick={this.handleClick}>
        <img className="Employee__image" src={`/images/${this.props.image}`} alt={this.props.name} />
      </div>
    );
  }
}

export default Employee;
