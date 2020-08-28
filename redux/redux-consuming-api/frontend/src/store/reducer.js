import { combineReducers } from '@reduxjs/toolkit';
import entitiesReducer from './entities';

/**
 * Here we will specify root entities like entities, ui and auth
 */
export default combineReducers({
  entities: entitiesReducer,
});
