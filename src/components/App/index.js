import React from 'react';
import './styles.css';
// COMPONENTS
import Title from '../Title';
import Parks from "../ParkInfo/Parks"
import ParkImage from "../ParkInfo/ParkImage"
// IMPORT DATA
import parkData from "../parkData"

export default function App() {
  return (
    <div className="App">
      <main>
        <Title />
        <section className="items-container">
          <section id="items">
           {/* Parks Component Goes Here */}
            <Parks 
              parkData = {parkData}
            />
          </section>
          <section id="image">
            {/* ParkImage Component Goes Here */}
            <ParkImage 
              url = {parkData[0].url}
              name = {parkData[0].name}
            />
          </section>
        </section>
      </main>
    </div>
  );
}
