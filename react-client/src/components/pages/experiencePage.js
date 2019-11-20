import React, { Component } from 'react';

class AboutPage extends Component {
  render() {
    const aboutStyle = {
      fontFamily: "sans-serif",
      marginLeft: '160px', /* Same as the width of the sidenav */
      fontSize: '28px', /* Increased text to enable scrolling */
      padding: '0px 10px',
      paddingLeft: '16px'
    };
    return (
      <div style={aboutStyle}>
        <p id="about">
          i know nothing
        </p>
      </div>
    )
  }
}

export default AboutPage;
