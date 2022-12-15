import { useState } from 'react'
import React from 'react';
import { UilCommentAltQuestion } from '@iconscout/react-unicons';
import { UilAngleRightB } from '@iconscout/react-unicons';
import comments from '../comments.json';

const QuoteBox = () => {


    const index = Math.floor(Math.random() * comments.length);
    const [text, setText] = useState(comments[index]);

    const myCommits = () =>{
        setText(Math.floor(Math.random() * comments.length))
    }




    return (
        <div className='card-container'>

            <div className='card-content'>

                <div className='card-letter'>
                    <UilCommentAltQuestion className="message-icon"/>   
                    <h3 className='card-text'>{comments[index].quote}</h3>
                </div>


                    <h4 className='card-text-secundary'>{comments[index].author}</h4>

                <div className='card-content-btn'>

                    <button onClick={myCommits} className='card-btn'>Click to change <UilAngleRightB className="send-icon"/>   
                    </button>

                </div>
                
            </div>
        </div>
    );
};

export default QuoteBox;