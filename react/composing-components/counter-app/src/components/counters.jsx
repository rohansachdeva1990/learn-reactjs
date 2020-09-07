import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.handleReset}
          className='btn btn-primary btn-sm-m-2'>
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={this.props.handleIncrement}
            onDelete={this.props.handleDelete}>
            {/* <h4>Counter #{counter.id}</h4> */}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
