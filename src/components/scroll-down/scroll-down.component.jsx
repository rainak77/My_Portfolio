import React from 'react';
import styled from 'styled-components';

const Scroll = styled.div`

position: relative;
background-color:transparent;
bottom:5.5em;
display:flex;
justify-content:center;
width:100%;
font-weight:bold;
text-shadow: 1px 1px rgb(69,162,158);
color: #fff;
animation: moveUpDown 2s linear 0s infinite normal none running;


@keyframes moveUpDown {
    0% { }
    50% {
        bottom: 50px;
    }
    100% { }
    
}
.pointer{
    cursor: pointer;
    transform:rotate(90deg)
    }
    .anchor{
        text-decoration:none;
    }
`;

const Scrolldown = () => {
    return (
        <Scroll >
            <a href="#about" className='anchor'>
                <div className='pointer'>
                    <span> &gt;&gt;&gt; </span>
                </div>
            </a>
        </Scroll>

    );
};

export default Scrolldown;