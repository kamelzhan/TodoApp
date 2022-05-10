import React from 'react';
interface ILikeCounterProps {
    likes: number,
    setLikes: (likes: number) => void
}

const LikeCounter: React.FC<ILikeCounterProps> = ({ likes, setLikes }) => {
    function addLike() {
        setLikes(likes + 1);
    }
    function dislike() {
        setLikes(likes - 1);
    }
    return (
        <div>
            <h1>{likes}</h1>
            <button onClick={addLike}> Like </button>
            <button onClick={dislike}> Dislike </button>
        </div>
        
        );
}

export default LikeCounter;