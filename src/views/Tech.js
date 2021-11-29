import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Tech() {
  const TechCardTitle = styled.h5`
    text-align: center;
  `;

  const TechCardPageTitle = styled.h1`
    text-align: center;
  `;

  const TechCardContainer = styled.div`
    text-align: center;
    margin: auto;
  `;

  const TechCards = styled.div`
    margin: auto;
    display: flex;
    flex-wrap: wrap;
  `;

  return (
    <>
      <div>
        <div className="tech-div .mx-auto">
          <TechCardPageTitle>Tech Stack</TechCardPageTitle>
          <TechCardContainer>
            <TechCards>
              <div className="image-div">
                <TechCardTitle>Postman</TechCardTitle>
                <img
                  src="https://cdn.worldvectorlogo.com/logos/postman.svg"
                  alt="Postman"
                  style={{
                    width: '150px',
                    height: '150px',
                    border: '1px solid darkblue',
                  }}
                />
              </div>
              <div className="image-div">
                <TechCardTitle>Visual Studio Code</TechCardTitle>
                <img
                  src="https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg"
                  alt="Visual Studio Code"
                  style={{ width: '150px', height: '150px' }}
                />
              </div>
              <div className="image-div">
                <TechCardTitle>Github</TechCardTitle>
                <img
                  src="https://cdn.worldvectorlogo.com/logos/github-icon-1.svg"
                  alt="Github"
                  style={{ width: '150px', height: '150px' }}
                />
              </div>
              <div className="image-div">
                <TechCardTitle>Firebase</TechCardTitle>
                <img
                  src="https://cdn.worldvectorlogo.com/logos/firebase-1.svg"
                  alt="Firebase"
                  style={{ width: '150px', height: '150px' }}
                />
              </div>
              <div className="image-div">
                <TechCardTitle>CSS</TechCardTitle>
                <img
                  src="https://cdn.worldvectorlogo.com/logos/css-3.svg"
                  alt="CSS"
                  style={{ width: '150px', height: '150px' }}
                />
              </div>
              <div className="image-div">
                <TechCardTitle>Git Bash</TechCardTitle>
                <img
                  src="https://cdn.worldvectorlogo.com/logos/git-bash.svg"
                  alt="Git Bash"
                  style={{ width: '150px', height: '150px' }}
                />
              </div>
              <div className="image-div">
                <TechCardTitle>HTML 5</TechCardTitle>
                <img
                  src="https://cdn.worldvectorlogo.com/logos/html5-2.svg"
                  alt="HTML 5"
                  style={{ width: '150px', height: '150px' }}
                />
              </div>
              <div className="image-div">
                <TechCardTitle>Microsoft Teams</TechCardTitle>
                <img
                  src="https://cdn.worldvectorlogo.com/logos/microsoft-teams-1.svg"
                  alt="Microsoft Teams"
                  style={{ width: '150px', height: '150px' }}
                />
              </div>
              <div className="image-div">
                <TechCardTitle>Salesforce</TechCardTitle>
                <img
                  src="https://cdn.worldvectorlogo.com/logos/salesforce-2.svg"
                  alt="Salesforce"
                  style={{ width: '150px', height: '150px' }}
                />
              </div>
            </TechCards>
          </TechCardContainer>
        </div>
      </div>
    </>
  );
}

Tech.propTypes = {
  obj: PropTypes.shape({}),
}.isRequired;
