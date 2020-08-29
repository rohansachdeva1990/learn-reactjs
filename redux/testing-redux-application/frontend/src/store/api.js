import { createAction } from '@reduxjs/toolkit';

// Create action returns an action object with type and payload
export const apiCallBegan = createAction('api/callBegan');
export const apiCallSuccess = createAction('api/callSuccess');
export const apiCallFailed = createAction('api/callFailed');
