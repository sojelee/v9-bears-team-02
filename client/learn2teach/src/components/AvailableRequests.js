import React from 'react';
const AvailableRequests = ( { items }) =>
<div data-testid="requestContainer">
{
  items.map((item,i) => (
  <React.Fragment key={item.title}>
    <h3 data-testid={i}>{item.title}</h3>
    <p>{item.description}</p>
    <p>{item.author}</p>
  </React.Fragment>
))}
</div>
export default AvailableRequests;