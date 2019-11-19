import React, { Component } from 'react';

class HomePage extends Component {
  render() {
    const aboutStyle = {
      fontFamily: "sans-serif",
      marginLeft: '160px', /* Same as the width of the sidenav */
      fontSize: '28px', /* Increased text to enable scrolling */
      padding: '0px 10px',
      paddingLeft: '16px'
    };
    return (
      <div>
        <div sytle={aboutStyle}>
          <p id="about">
            this is about text
          </p>
        </div>

        <div style={aboutStyle}>
          <p id="skills">
            this is skills
          </p>
        </div>

        <div style={aboutStyle}>
          <p id="experience">
            this is experience
          </p>
        </div>

        <div style={aboutStyle}>
          <p id="education">
            this is education
          </p>
        </div>

        <div style={aboutStyle}>
          <p id="works">
            this is works
          </p>
        </div>

        <div style={aboutStyle}>
          <p id="contact">
            this is contact
          </p>
        </div>
      </div>
    )
  }
}

export default HomePage;
