import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';

// This is a root reducer
export default function () {
  return configureStore({
    reducer,
  });
}
