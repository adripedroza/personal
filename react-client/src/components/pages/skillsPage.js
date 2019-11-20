import React, { Component } from 'react';

class SkillsPage extends Component {
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
          i have a unique set of skills
        </p>
      </div>
    )
  }
}

export default SkillsPage;
