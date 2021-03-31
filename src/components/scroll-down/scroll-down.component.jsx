import React from 'react';
import styled from 'styled-components';

const Scroll = styled.div`
position: relative;
background-color:transparent;
bottom:1.6em;
display:flex;
justify-content:center;
width:100%;
font-weight:bold;
text-shadow: 1px 1px #45a29e;
color: #fff;

.pointer{
    cursor: pointer;
    transform:rotate(90deg)
    }
`;

const Scrolldown = () => {
    return (
        <Scroll>
            <div className='pointer'>
                <span> &gt;&gt;&gt; </span>
            </div>
        </Scroll>

    );
};

export default Scrolldown;