// Next is next middleware in action
// const logger = (store, next ,action) => {

// }
// S N A, by default by configStore
/*
const logger = store => next => action => {
  console.log('store: ', store);
  console.log('next: ', next);
  console.log('action: ', action);
  next(action);
};
*/

// Parameterized
const logger = param => store => next => action => {
  console.log('Logging ', param);
  return next(action); // Will call the end reducer (or event handler), returning object coming from next middleware
};

export default logger;
// Currying
// N => 1
