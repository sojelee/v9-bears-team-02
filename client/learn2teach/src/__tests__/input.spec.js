import React from 'react';
import { render, cleanup } from '@testing-library/react';
import TextInput from '../components/common/input';
afterEach(cleanup);
const handleOnChange= jest.fn();
test('Input Component',()=>{
    const { getByTestId } = render(<TextInput onChange={handleOnChange} placeholder="placeholder" className="myStyle" type="text" />);
    const input = getByTestId('myinput');
    expect(input.className).toBe('myStyle')
});