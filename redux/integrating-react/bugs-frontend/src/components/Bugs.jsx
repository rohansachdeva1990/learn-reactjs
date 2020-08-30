import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadBugs } from '../store/bugs';

class Bugs extends Component {
  componentDidMount() {
    this.props.loadBugs();
  }

  render() {
    return (
      <ul>
        {this.props.bugs.map(bug => (
          <li key={bug.id}> {bug.description}</li>
        ))}
      </ul>
    );
  }
}

// connect (what part of store component is interested in, disptatching action )
// bugs: state.entities.bugs.list

// Here we are returining an object
// So this function, takes the state of the store and returns the properties we are interested in.
const mapStateToProps = state => ({
  bugs: state.entities.bugs.list,
});

const mapDispatchToProps = dispatch => ({
  loadBugs: () => dispatch(loadBugs()),
});

// Container
//   Presentation (Bugs)

// This connect is a higher order function
// We wraps our Bug component with container component, that is responsible to deal with react redux
export default connect(mapStateToProps, mapDispatchToProps)(Bugs);
