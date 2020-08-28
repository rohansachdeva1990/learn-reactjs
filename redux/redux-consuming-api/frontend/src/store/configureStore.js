import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from './reducer';
import logger from './middleware/logger';
import toast from './middleware/toast';
import api from './middleware/api';

// This is a root reducer
export default function () {
  return configureStore({
    reducer,
    middleware: [
      ...getDefaultMiddleware(),
      logger({ destination: 'console' }),
      toast,
      api,
    ],
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
