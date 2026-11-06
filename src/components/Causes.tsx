import { causes } from "../data/causes";
import SectionTitle from "./SectionTitle";
import CauseCard from "./CauseCard";
import { useState } from "react";

export default function Causes() {
  return (
    <section id="causes" className="py-5">
      <div className="container">
        <SectionTitle />
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
          {causes.map((cause) => (
            <div className="col" key={cause.id}>
              <CauseCard cause={cause} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
