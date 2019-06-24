import React from 'react';

const Fetch = ( { url }) =>{
    return(
        <div data-testid='greeting-text'>
              <h1>Load Greeting</h1>
              <p>hello there</p>

              <button data-testid='ok-button'
              disabled={true}
              >Test</button>
            </div>
    )
};



export default Fetch;