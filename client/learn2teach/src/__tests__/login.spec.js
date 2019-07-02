import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Login from '../components/login';

afterEach(cleanup);
 test(' calls onSubmit with username and password ',()=>{
     const handleSubmit = jest.fn()
     const { getByLabelText, getByTestId,getByText } = render(<Login onSubmit={handleSubmit} />);
     getByLabelText(/username/i).value='chuck'
     getByLabelText(/password/i).value='norris'
     const btn= getByTestId("mybutton");
    btn.click();
    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith({
        username:'chuck',
        password:'norris'
    })
    expect(getByTestId(/login/i).className).toBe('h3Login')
 });

