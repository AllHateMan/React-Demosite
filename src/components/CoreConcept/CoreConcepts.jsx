import React from "react";
import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../../data.js";

export default function CoreConcepts() {
  <section id="core-concepts">
    <h2>Time to get started!</h2>
    <ul>
      {CORE_CONCEPTS.map((concept) => (
        <CoreConcept key={concept.title} concept={concept} />
      ))}
    </ul>
  </section>;
}
