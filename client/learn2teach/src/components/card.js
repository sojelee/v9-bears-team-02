import React from 'react';

const Card = ({ title,video, text,illustration,author }) =>{
    return(
        <div>
            <h1 data-testid='title'>{title}</h1>
            <h1 data-testid='video'>{video}</h1>
            <h1 data-testid='text'>{text}</h1>
            <h1 data-testid='illustration'>{illustration}</h1>
            <h1 data-testid='author'>{author}</h1>
        </div>
    )
}


export default Card;