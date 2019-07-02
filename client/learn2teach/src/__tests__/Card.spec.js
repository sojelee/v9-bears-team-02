import React from 'react';
import { render,cleanup } from '@testing-library/react';
import Card from '../components/card';
afterEach(cleanup);
const title="title"
const video="Y"
const text= "Y"
const illustration="N"
const author="John Lee"
test('Card Component',()=>{
  const { getByTestId } = render(<Card title={title} video={video} text={text} illustration={illustration} author={author} />)
  const titl = getByTestId('title');
  const vid = getByTestId('video');
  const txt = getByTestId('text');
  const ill = getByTestId('illustration');
  const authr = getByTestId('author');
  expect(titl.innerHTML).toBe('title');
  expect(vid.innerHTML).toBe('Y');
  expect(txt.innerHTML).toBe('Y');
  expect(ill.innerHTML).toBe('N');
  expect(authr.innerHTML).toBe('John Lee');
});


