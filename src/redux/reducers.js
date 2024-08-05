import { ADD_TASK, MOVE_TASK, SET_SEARCH_QUERY } from './actions';

const initialState = {
  tasks: [],
  searchQuery: '',
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: state.tasks.length + 1,
            title: action.payload.title,
            description: action.payload.description,
            status: action.payload.column,
          },
        ],
      };
    case MOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, status: action.payload.newStatus }
            : task
        ),
      };
    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };
    default:
      return state;
  }
};

export default reducers;
