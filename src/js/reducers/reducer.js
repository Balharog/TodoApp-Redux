import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_COMPLETE_TODO,
  TOGGLE_EDIT_TODO,
  EDIT_TODO
} from "../const/action-types";

const initialState = { todoList: [] };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todoList: [...state.todoList.concat(action.payload)] };
    case DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter(e => e.id !== action.payload)
      };
    case TOGGLE_COMPLETE_TODO:
      return {
        ...state,
        todoList: state.todoList.map(el =>
          el.id === action.payload ? { ...el, isComplete: !el.isComplete } : el
        )
      };
    case TOGGLE_EDIT_TODO:
      return {
        ...state,
        todoList: state.todoList.map(el =>
          el.id === action.payload ? { ...el, isEditing: !el.isEditing } : el
        )
      };
    case EDIT_TODO:
      return {
        ...state,
        todoList: state.todoList.map(el =>
          el.id === action.payload.id
            ? { ...el, text: action.payload.newTitle }
            : el
        )
      };
    default:
      return state;
  }
};
export default reducer;
