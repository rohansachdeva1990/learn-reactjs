// We want our entities slice to have 2 sub slices bugs and
import { combineReducers } from '@reduxjs/toolkit';
import bugsReducer from './bugs';
import projectsReducer from './projects';
import usersReducer from './users';
/**
 * Here we will specify
 */
export default combineReducers({
  bugs: bugsReducer,
  projects: projectsReducer,
  users: usersReducer,
});
