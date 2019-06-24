import React from 'react';
const select = (todo) => null
const Todos = ( { todos, select, selected }) =>
<>
{
    
    todos.map((todo,i) => (
    
    <React.Fragment key={todo.title}>
    <h3 data-testid={i} className={ selected && selected.title === todo.title ? 'selected' :'' }>{todo.title}</h3>
    <button onClick={() => null}>Select</button>
  </React.Fragment>
))}
</>
export default Todos;