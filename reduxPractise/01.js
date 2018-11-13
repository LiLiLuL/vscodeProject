//redux第一课，初识store
//注意：应用中有且只有一个store
import {createStore} from 'redux';

//reducer

function todos(state=[],action){
    switch(action.type){
        case 'ADD_TODO':
              return state.concat([action.text])
        default:
              return state
    }
}

// 创建store，并且给state一个初始值['HTML']
let store = createStore(todos, [ 'HTML' ])
// state.dispatch()，最常用的API
// 修改state的唯一方式就是调用store.dispatch()方法
// 显然，其中的描述性对象
// {
//  type: 'ADD_TODO',
//  text: 'CSS'
// }
// 就是action

store.dispatch({
    type:'ADD_TODO',
    text:'CSS'
})

console.log(store.getState());

