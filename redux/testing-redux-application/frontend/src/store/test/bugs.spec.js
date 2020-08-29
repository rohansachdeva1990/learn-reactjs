import { addBug } from '../bugs';
import configureStore from '../configureStore';

// Social test
describe('bugsSlice', () => {
  it('should handle the addBug action', async () => {
    const store = configureStore();
    const bug = { description: 'a' };
    await store.dispatch(addBug(bug));
    expect(store.getState().entities.bugs.list).toHaveLength(1);
  });
});

// Lonely Test
/*
import { addBug, bugAdded } from '../bugs';
import { apiCallBegan } from '../api';
import { configureStore } from '../configureStore';

describe('bugsSlice', () => {
  describe('action creators', () => {
    it('addBug', () => {
      const bug = { description: 'a' };
      const result = addBug(bug); // FUT
      const expected = {
        type: apiCallBegan.type,
        payload: {
          url: '/bugs',
          method: 'post',
          data: bug,
          onSuccess: bugAdded.type,
        },
      };

      expect(result).toEqual(expected);
    });
  });
});
*/
