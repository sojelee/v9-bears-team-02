import React from 'react';
import {
    render,
  } from '@testing-library/react';
import AvailableRequests from '../components/AvailableRequests.js';
const requestList = [
  {
    title:'title',
    description:'Description',
    authoer:'Joseph Myalla'
  },
  {
    title:'title2',
    description:'Description2',
    authoer:'Joseph Myalla2'
  }
]
test('It to list new Requests', () => {
 const { getByTestId }  = render(<AvailableRequests items={requestList}/>);
 const requestItem = getByTestId("1");
 expect(requestItem.innerHTML).toBe('title2');
});

