import React, { useState, useEffect } from 'react';

function TrafficLight() {
  const [color, setColor] = useState("red");

  // Función para manejar el clic en las luces
  function handleLightClick(clickedColor) {
    setColor(clickedColor);
  }

  return (
    <div>
      <div id="trafficTop"></div>
      <div id="container">
        <div className={"red light " + (color === 'red' ? 'selected' : '')} onClick={() => handleLightClick('red')}></div>
        <div className={"yellow light " + (color === 'yellow' ? 'selected' : '')} onClick={() => handleLightClick('yellow')}></div>
        <div className={"green light " + (color === 'green' ? 'selected' : '')} onClick={() => handleLightClick('green')}></div>
      </div>
    </div>
  );
}

export default TrafficLight;

