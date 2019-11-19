import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SideBar extends Component {
  render () {
    const sidebarStyle = {
      fontFamily: "serif",
      height: "100%", /* Full-height: remove this if you want "auto" height */
      width: '160px', /* Set the width of the sidebar */
      position: "fixed", /* Fixed Sidebar (stay in place on scroll) */
      zIndex: "1", /* Stay on top */
      top: 0, /* Stay at the top */
      left: 0,
      fontSize: '25px',
      backgroundColor: "#111", /* Black */
      overflowX: "hidden", /* Disable horizontal scroll */
      paddingTop: '20px',
      paddingBottom: '16px',
      paddingLeft: '16px',
      display: "block"
    };
    return (
      <div style={sidebarStyle}>
        <a href="/">Home</a><br/>
        <a href="#about">About</a><br/>
        <a href="#skills">Skills</a><br/>
        <a href="#experience">Experience</a><br/>
        <a href="#education">Education</a><br/>
        <a href="#works">Work</a><br/>
        <a href="#contact">Contact</a><br/>
      </div>
    )
  }
}

export default SideBar;
