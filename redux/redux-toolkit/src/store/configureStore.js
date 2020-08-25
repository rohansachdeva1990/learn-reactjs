import { configureStore } from '@reduxjs/toolkit';
import bugReducer from './bugs';
import projectReducer from './projects';

export default function () {
  return configureStore({
    projectReducer,
  });
}
