import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { addBug } from '../bugs';
import configureStore from '../configureStore';

// AAA -> Arrange Act Assert

describe('bugsSlice', () => {
  let fakeAxios;
  let store;

  beforeEach(() => {
    fakeAxios = new MockAdapter(axios);
    store = configureStore();
  });

  const bugsSlice = () => store.getState().entities.bugs;

  it('should add the bug to the store if it is saved to the server', async () => {
    const bug = { description: 'a' };
    const savedBug = { id: 1, ...bug };
    fakeAxios.onPost('/bugs').reply(200, savedBug);

    await store.dispatch(addBug(bug));

    expect(bugsSlice().list).toContainEqual(savedBug);
  });

  it('should not add the bug to the store if it is not saved to the server', async () => {
    const bug = { description: 'a' };
    fakeAxios.onPost('/bugs').reply(500);

    await store.dispatch(addBug(bug));

    expect(bugsSlice().list).toHaveLength(0);
  });
});

/*
// Social test: Not dependent on the implementation
describe('bugsSlice', () => {
  it('should handle the addBug action', async () => {
    const store = configureStore();
    const bug = { description: 'a' };
    await store.dispatch(addBug(bug));
    expect(store.getState().entities.bugs.list).toHaveLength(1);
  });
});
*/
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
