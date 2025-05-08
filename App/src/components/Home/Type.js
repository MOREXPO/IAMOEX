import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Ingeniero de Software",
          "Desarrollador Full Stack",
          "Apasionado del Open Source",
          "Especialista en Alta Disponibilidad MySQL",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
