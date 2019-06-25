import React from 'react';
const TestimonialCard =( { testimonial, author, avatarSource}) =>{
return(
  <div data-testid="testimonialContainer">
    <img data-testid="avatar" className="avatar" src={avatarSource}/>
        <p data-testid="testimonial">
           {testimonial} 
        </p>
        <h3 data-testid="author">{author}</h3>
  </div>
)
}
export default TestimonialCard;