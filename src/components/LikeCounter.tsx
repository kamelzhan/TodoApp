import React, { useState} from 'react';
interface ILikeCounterProps {
    initialLikes: number
}

const LikeCounter: React.FC<ILikeCounterProps> = ({ initialLikes }) => {
    
    return (
        <div>
            <h1>{likes}</h1>
            <button onClick={addLike}> Like </button>
            <button onClick={dislike}> Dislike </button>
        </div>
        
        );
}

export default LikeCounter;