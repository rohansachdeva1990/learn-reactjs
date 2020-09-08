import React, { Component } from 'react';

class Counter extends Component {
  // Will be set only once the component is loaded
  // state = {
  //   value: this.props.counter.value,
  // };

  // handleIncrement = product => {
  //   // console.log(product);
  //   this.setState({ value: this.state.value + 1 });
  // };

  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);

    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax call and get new data from the server
    }
  }

  componentWillUnmount() {
    console.log('Counter - Unmount');
  }

  render() {
    console.log('Counter - Rendered');
    return (
      <div className='row'>
        {/* {this.props.children} */}
        <div className='col-1'>
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className='col'>
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className='btn btn-secondary btn-sm ml-4 pl-3 pr-3'>
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className='btn btn-secondary btn-sm m-2 pl-3 pr-3'
            disabled={this.props.counter.value === 0 ? 'disabled' : ''}>
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className='btn btn-danger btn-sm pl-3 pr-3'>
            x
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.props.counter.value === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;
