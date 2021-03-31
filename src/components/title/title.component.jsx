import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';

const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  margin-top: -125px;
  text-align: center;
  
  .heading {
    color: ${props => props.theme.textColor};
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 7px;

    .main {font-size: 50px;   font-family: "Karla", sans-serif;}

    .sub { font-size: 27px; letter-spacing: 2px; }
  }
`;

const Title = () => (
    <MyTitleMessage>
        <div className="heading">
            <div className="main text-center mb-3"> Hi, I am           <br />
                <span><strong>Md Syedul Arif</strong></span>
            </div>
            <div className="sub">
                <Typewriter
                    options={{
                        strings: ["Fullstack Developer", "Learner"],
                        autoStart: true,
                        loop: true,
                        delay: 50
                    }}
                />
            </div>
        </div>
    </MyTitleMessage>
);

export default Title;