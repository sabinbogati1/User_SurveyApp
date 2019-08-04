import {FETCH_USER} from "../actions/types";

export default function(state= {}, action){
  console.log("action  :: ", action);
  switch(action.type){
    case FETCH_USER:
      console.log("FETCH User reducer..");
       return action.payload || false;

    default:
      return state;
  }
}