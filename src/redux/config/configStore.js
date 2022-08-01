import { createStore, combineReducers } from "redux";
import todo from "../modules/todo";

const rootReducer = combineReducers({
    todo, // <-- 새롭게 추가한 부분
  });
const store = createStore(rootReducer);

export default store;