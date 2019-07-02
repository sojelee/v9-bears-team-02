import React from 'react';
import { render, cleanup,fireEvent,waitForElement } from '@testing-library/react';
import 'jest-dom/extend-expect';
import Fetch from '../utils/fetch';
afterEach(cleanup)
test('Fetch makes an API call and displays the greeting when load-greeting is clicked', async ()=>{
    //Arrange
    const axiosMock = jest
    .fn()
    .mockResolvedValueOnce({data: {greeting: 'hello there'}})
    const url = '/greeting'
    const { getByText, getByTestId, container, asFragment } = render(<Fetch url={url} />)
    //Act
    fireEvent.click(getByText('Load Greeting'))
    const greetingTextNode = await waitForElement(()=>
       getByTestId('greeting-text'));
    //Assert
    //expect(axiosMock.get).toHaveBeenCalledTimes(1)
    //expect(axiosMock.get).toHaveBeenCalledWith(url)
    expect(getByTestId('greeting-text')).toHaveTextContent('hello there')
    expect(getByTestId('ok-button')).toHaveAttribute('disabled')

    // snapshots work great with regular DOM nodes!
    expect(container.firstChild).toMatchSnapshot()

    // you can also use get a `DocumentFragment`,
    // which is useful if you want to compare nodes across render
   expect(asFragment()).toMatchSnapshot()
})


