let lastId = 0;

function reducer(state = [], action) {
  switch (action.type) {
    case 'bugAdded':
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];

    case 'bugRemoved':
      return state.filter(bug => bug.id !== action.payload.id);

    default:
      return state;
  }
}

// [] is resetting to initial state
function reducer(state = [], action) {
  if (action.type === 'bugAdded') {
    return [
      ...state, // Immutable copy
      {
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      },
    ];
  } else if (action.type === 'bugRemoved') {
    // Return all bugs except the bug with given id
    return state.filter(bug => bug.id !== action.payload.id);
  }

  // If we don't have matching state
  return state;
}
