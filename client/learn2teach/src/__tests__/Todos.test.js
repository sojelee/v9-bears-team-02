import React from 'react';

import { render,fireEvent,cleanup,waitForElement } from '@testing-library/react';
import 'jest-dom/extend-expect';
import Todos from '../components/todos';
import { exportAllDeclaration } from '@babel/types';


const todos = [
    {
        title:'todo1'
    },
    {
        title:'todo2'
    },
    {
        title:'todo3'
    }
]

test('finds title', () => {
      const { getByTestId } = render(<Todos todos={todos} />);
      const elem = getByTestId("0");
      expect(elem.innerHTML).toBe('todo1');
});
  
test('select todo item',()=>{
  const { findAllByText,getByTestId } = render(<Todos todos={todos} />);
 console.log(findAllByText);

});