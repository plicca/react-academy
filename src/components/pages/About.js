import React from 'react'

function About() {
  return (
    <React.Fragment>
      <h1 style={h1Style}>About</h1>
      <p style={pStyle}>This is the MyCLIP web app v0.0.1. It is an on-going project to replace the old CLIP platform. Hope you enjoy it!</p>
    </React.Fragment>
  )
}

const h1Style = {
  paddingTop: '10px',
  textAlign: 'center',
}

const pStyle = {
  paddingTop: '10px',
  textAlign: 'center',
}

export default About