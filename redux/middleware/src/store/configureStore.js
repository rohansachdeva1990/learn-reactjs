import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from './reducer';
import logger from './middleware/logger';
import toast from './middleware/toast';

// This is a root reducer
export default function () {
  return configureStore({
    reducer,
    // middleware: [logger],
    // middleware: [logger('console')],
    // Here we are overriding all default middleware, using getDefaultMiddleware(), we get all the existing ones
    // middleware provides S (Store), N (next action), A (action) to every middleware by default 
    middleware: [
      ...getDefaultMiddleware(),
      logger({ destination: 'console' }),
      toast,
    ],
    // Passing object to middleware
  });
}

// WITHOUT THUNK

// import { configureStore } from '@reduxjs/toolkit';
// import reducer from './reducer';
// import logger from './middleware/logger';
// import func from './middleware/func';

// // This is a root reducer
// export default function () {
//   return configureStore({
//     reducer,
//     // middleware: [logger],
//     // middleware: [logger('console')],
//     middleware: [logger({ destination: 'console' }), func],
//     // Passing object to middleware
//   });
// }
