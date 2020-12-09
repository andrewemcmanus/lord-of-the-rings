// import React, { Component } from 'react';
function Movie(props) {
  return (
    <div>
      <h1>The Lord of the Rings: {props.title}</h1>
      <p>Runtime: {props.hours}:{props.minutes}</p>
    </div>
  )
}
export default Movie;
