import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Hero from '../components/hero';
const { title, subtitle } ={
    title:'Title',
    subtitle:'Subtitle',
}
afterEach(cleanup);
test('Test Hero Component',()=>{
const { getByTestId } = render(<Hero title={title} subtitle={subtitle} />);
const tit = getByTestId('title');
const sub = getByTestId('subtitle');
const heroContainer=getByTestId('heroContainer');
expect(heroContainer.className).toBe('heroContainer');
expect(tit.innerHTML).toBe('Title');
expect(sub.innerHTML).toBe('Subtitle');
});