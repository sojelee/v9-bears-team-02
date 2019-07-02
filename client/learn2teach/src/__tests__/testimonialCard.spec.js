import React from 'react'
import { render, cleanup } from '@testing-library/react';

import TestimonialCard from '../components/testimonialcard';
const avatar ="avatar";
const testimonial="Testimonial";
const author = "Kent C Dodd";

afterEach(cleanup)

test('Testimonial Component',()=>{
 const { getByTestId } =render(<TestimonialCard avatarSource={avatar} testimonial={testimonial} author={author} />);
 const auth = getByTestId("author");
 const avat = getByTestId("avatar");
 const test = getByTestId("testimonial");

 expect(test.innerHTML).toBe("Testimonial")
 expect(auth.innerHTML).toBe("Kent C Dodd")
 expect(avat.className).toBe("avatar")
});