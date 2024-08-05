export const ADD_TASK = 'ADD_TASK';
export const MOVE_TASK = 'MOVE_TASK';
export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';

export const addTask = (title, description, column) => ({
  type: ADD_TASK,
  payload: { title, description, column },
});

export const moveTask = (id, newStatus) => ({
  type: MOVE_TASK,
  payload: { id, newStatus },
});

export const setSearchQuery = (query) => ({
  type: SET_SEARCH_QUERY,
  payload: query,
});
