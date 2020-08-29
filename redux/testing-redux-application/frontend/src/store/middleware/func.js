// const func = store => next => action => {
//   if (typeof action === 'function') {
//     action();
//   } else {
//     next(action);
//   }
// };

const func = ({ dispatch, getState }) => next => action => {
  if (typeof action === 'function') {
    action(dispatch, getState);
  } else {
    return next(action);
  }
};

export default func;
