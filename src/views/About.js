import React from 'react';
import styled from 'styled-components';
import image from '../images/myfamily.jpg';

export default function About() {
  const AboutStyling = styled.div`
    margin: auto;
    width: 50%;
    text-align: center;
    border: 3px solid darkblue;
    margin-top: 10px;
  `;

  const AboutTitle = styled.div`
    margin: auto;
    width: 50%;
    text-align: center;
    border: 3px solid darkblue;
    padding: 10px;
  `;

  const AboutTitleText = styled.h1`
    margin: auto;
  `;

  const AboutImage = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    border: 1px solid gray;
    padding: 5px;
  `;

  return (
    <>
      <AboutTitle>
        <AboutTitleText>About Me</AboutTitleText>
      </AboutTitle>
      <AboutStyling>
        <h5>Hello! Thank you for stopping by!</h5>
        <div>
          My name is Joe Gibbs and I am currently learning to be a sofware
          engineer through Nashville Software School.
          <br />
          <div>
            I enjoy video games, playing basketball, writing code, and spending
            time with my wife and two goofy foster dogs, Rocky and Dot.
          </div>
          <AboutImage className="card-img-top" src={image} alt="myfamily" />
          <div>
            My goal is to make my job and the jobs of everyone I work with, as
            pain free as possible. I believe the best way to do this is through
            writing great code.
          </div>
        </div>
      </AboutStyling>
    </>
  );
}
