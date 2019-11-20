import React, { Component } from 'react';

class WorkPage extends Component {
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
          this is work history
        </p>
      </div>
    )
  }
}

export default WorkPage;
