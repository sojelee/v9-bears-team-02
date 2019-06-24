import React from 'react';
import {
    render,
    cleanup,
  } from '@testing-library/react';

import Button from '../components/button';


afterEach(cleanup)

  test('Button test', async ()=> {
    const { getByTestId } = render(<Button style="gire" onClick={()=>null} />)
    expect(getByTestId('mybutton').className).toBe('gire')
    expect(getByTestId('mybutton').onClick).toBe(undefined)
});


