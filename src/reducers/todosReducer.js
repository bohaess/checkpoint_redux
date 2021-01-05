import { v4 as uuidv4 } from "uuid";
import { ALL_TODO, TODO_NOT_DONE, TODO_DONE, ADD_TODO, SAVE_TODO,EDIT_TODO} from "../actions/types";

const data = {
  todos: [
    {
      id: uuidv4(),
      description: "work",
      state: "done",
    },
    {
      id: uuidv4(),
      description: "sport",
      state: "notDone",
    },
    {
      id: uuidv4(),
      description: "study",
      state: "done",
    },
    {
      id: uuidv4(),
      description: "play",
      state: "notDone",
    },
    
  ],
  filt: null,
  save:null ,
};

const todosReducer = (state = data, action) => {
  switch (action.type) {
    case ALL_TODO:
      return { ...state, filt: null };
    case TODO_DONE:
      return { ...state, filt: "done" };
    case TODO_NOT_DONE:
      return { ...state, filt: "notDone" };
    case ADD_TODO :
        return {
          ...state,todos:[...state.todos,action.payload]
        };
    case SAVE_TODO :
          return {...state,save :action.payload};
    case EDIT_TODO :
      return {...state,save:null,todos:state.todos.map(el=>el.id===action.payload.id? action.payload : el)};      

    default:
      return state;
  }
};

export default todosReducer;
