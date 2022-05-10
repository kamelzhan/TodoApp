import { makeObservable, observable } from 'mobx';
import { observer } from 'mobx-react-lite';
import React from 'react';
interface ILikeCounterProps {
    model: LikeCounterModel
}
export class LikeCounterModel {
    constructor() {
        makeObservable(this, { likes: observable })
    }
    addLike = () => {
        this.likes++;
    }
    dislike = () => {
        this.likes--;
    }
    likes = 0;
}
const likeCounter: React.FC<ILikeCounterProps> = ({ model }) => {
    
    return (
        <div>
            <h1>{model.likes}</h1>
            <button onClick={model.addLike}> Like </button>
            <button onClick={model.dislike}> Dislike </button>
        </div>
        );
}

export const LikeCounter = observer(likeCounter);