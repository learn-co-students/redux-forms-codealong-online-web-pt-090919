export default function manageTodo(state = {
  todos: [{text: 'buy grocereis'}, {text: 'watch netflix'}],
}, action) {
  switch(action.type){
    case 'ADD_TODO':
      console.log({todos: state.todos.concat(action.payload.text)});
      break
      default:
      return state
  }
}
