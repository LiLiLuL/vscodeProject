import {combineReducers} from 'redux';
import {
    visibilityFilter, ADD_TODO,SET_VISIBILITY_FILTER, TOGGLE_TODO
}from './actions';
const {SHOW_ALL}=visibilityFilter;

const initialState={
    visibilityFilter:visibilityFilter.SHOW_ALL,
    todos:[]
};

function todos(state = [], action) {
    switch (action.type) {
      case ADD_TODO:
        return [
          ...state,
          {
            text: action.text,
            completed: false
          }
        ]
      case TOGGLE_TODO:
        return state.map((todo, index) => {
          if (index === action.index) {
            return Object.assign({}, todo, {
              completed: !todo.completed
            })
          }
          return todo
        })
      default:
        return state
    }
  }




  function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
      case SET_VISIBILITY_FILTER:
        return action.filter
      default:
        return state
    }
  }



// function todoApp(state={},action){
//     //这里暂不处理任何action
//     //仅仅返回state
//     return{
//         visibilityFilter:visibilityFilter(state.visibilityFilter, action),
//         todos:todos(state.todos,action)
//     }
//     switch(action,type){
//         case SET_VISIBILITY_FILTER:
//              return Object.assign({},state,{
//                  visibilityFilter:action.filter
//              })
//         case ADD_TODO:
//              return Object.assign({},state,{
//                  todos:todos(state.todos,action)
//              })
//         case TOGGLE_TODO:
//              return Object.assign({},state,{
//                  todos:todos(state.todos,action)
//              })
//         default:
//              return state;
//     }
    
// }



const todoApp = combineReducers({
    visibilityFilter,
    todos
  })

  export default todoApp;