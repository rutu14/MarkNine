import React, { useState } from "react";
import "./styles.css";

const travelGuide = {
  Jaipur: [
    { name: "Hawa Mahal", timing: "9am to 5pm", visit: "Two hours" },
    { name: "City Palace", timing: "9am to 5pm", visit: "Two hours" },
    { name: "Jantar Mantar", timing: "9am to 5pm", visit: "One to Two hours" },
    { name: "Albert Hall Museum", timing: "9am to 5pm", visit: "One hour" },
    { name: "Amber Fort", timing: "8am to 5.30pm", visit: "Two to Three hours" }
  ],
  Nasik: [
    { name: "Sula Wines", timing: "11am to 11pm", visit: "Two hours" },
    {
      name: "Pandavleni Caves",
      timing: "8am to 5pm",
      visit: "One to Two hours"
    },
    { name: "Harihar Fort", timing: "9am to 5pm", visit: "More than 3 hours" },
    { name: "Kalaram Temple", timing: "5am to 10pm", visit: "One hour" },
    { name: "Saptashrungi", timing: "5am to 7pm", visit: "Two to Three hours" }
  ],
  Kolkata: [
    { name: "Howrah Bridge", timing: "Anytime", visit: "One hours" },
    {
      name: "Victoria Memorial Hall",
      timing: "10am to 5pm",
      visit: "Two hours"
    },
    {
      name: "Eco Tourism Park",
      timing: "2pm to 8pm",
      visit: "Two to Three hours"
    },
    { name: "Science City", timing: "9am to 8pm", visit: "Two to Three hours" },
    {
      name: "Dakshineswar Kali Temple",
      timing: "5am to 1pm, 4pm to 8pm",
      visit: "One hour"
    }
  ],
  Nainital: [
    { name: "Nainital Lake", timing: "12am to 11pm", visit: "Two hours" },
    { name: "Mukteshwar Temple", timing: "9am to 5pm", visit: "Two hours" },
    {
      name: "High Altitude Zoo",
      timing: "10am to 5pm",
      visit: "One to Two hours"
    },
    { name: "Goddess Naina Devi", timing: "6am to 8pm", visit: "One hour" },
    { name: "Naina Peak", timing: "Anytime", visit: "One hour" }
  ]
};
export default function App() {
  const [placesel, setPlace] = useState("Nainital");
  function desClickHandler(place) {
    setPlace(place);
  }
  return (
    <div className="App">
      <h1 style={{ color: "#374151" }}> Let's Gooooo 🚃 </h1>
      <p style={{ fontSize: "smaller", color: "#374151" }}>
        {" "}
        Look for the places to vist from below destinations.Click a Destination
        to proceed.{" "}
      </p>

      <div>
        {Object.keys(travelGuide).map((place) => (
          <button
            onClick={() => desClickHandler(place)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem",
              color: "#374151"
            }}
          >
            {place}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "center" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {travelGuide[placesel].map((desti) => (
            <li
              key={desti.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                display: "inline-block",
                margin: "1rem 1rem",
                borderRadius: "0.5rem",
                background: "#F3F4F6",
                textAlign: "center"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger", color: "#374151" }}>
                {" "}
                {desti.name}{" "}
              </div>
              <div style={{ fontSize: "smaller", padding: "0.2rem" }}>
                Timing: {desti.timing}{" "}
              </div>
              <div style={{ fontSize: "smaller", padding: "0.2rem" }}>
                Open for: {desti.visit}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
