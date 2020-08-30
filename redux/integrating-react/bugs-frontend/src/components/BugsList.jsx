import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadBugs, resolveBug, getUnresolvedBugs } from '../store/bugs';

const BugsList = () => {
  const dispatch = useDispatch();

  // We get the are of bugs in bugSlice
  const bugs = useSelector(getUnresolvedBugs);
  //   const state = useSelector(state => state.entities.bugs.list)

  // Calls everytime entities.bugs.list this component is rendered
  useEffect(() => {
    dispatch(loadBugs());
  }, []);

  return (
    <ul>
      {bugs.map(bug => (
        <li key={bug.id}>
          {bug.description}
          <button onClick={() => dispatch(resolveBug(bug.id))}>Resolve</button>
        </li>
      ))}
    </ul>
  );
};

export default BugsList;
