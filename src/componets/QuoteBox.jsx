import { useState } from 'react'
import React from 'react';
import { UilCommentAltQuestion } from '@iconscout/react-unicons';
import { UilAngleRightB } from '@iconscout/react-unicons';
import comments from '../comments.json';

const QuoteBox = () => {


    const index = Math.floor(Math.random() * comments.length);

    const [text, setText] = useState(comments[index]);


    const myCommits = () =>{
        setText(Math.floor(Math.random() * comments.length));

    }

    const colors = [
        "#845EC2",
        "#D65DB1",
        "#FF6F91",
        "#FF9671",
        "#FFC75F",
        "#F9F871"
      ];

    const colorIndex = Math.floor(Math.random() * colors.length);

    
    document.body.style = `background: ${colors[colorIndex]}`;

    return (
        <div className='card-container'>

            <div className='card-content'>

                <div className='card-letter'>
                    <UilCommentAltQuestion className="message-icon"/>   
                    <h3 className='card-text' style={{ color: colors[colorIndex] }}>{comments[index].quote}</h3>
                </div>


                    <h4 className='card-text-secundary' style={{ color: colors[colorIndex] }}>Author - {comments[index].author}</h4>

                <div className='card-content-btn'>

                    <button onClick={myCommits} className='card-btn' style={{ color: colors[colorIndex] }}>Click to change <UilAngleRightB className="send-icon"/>   
                    </button>

                </div>
                
            </div>
        </div>
    );
};

export default QuoteBox;