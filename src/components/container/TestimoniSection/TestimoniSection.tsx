import React, { useEffect, useState } from "react";
import Slider from "../../ui/Slider";
import type { Testimoni } from "../../../types";
import fetchJson from "../../../api/fetchJson";
import "./TestimoniSection.css";

const TestimoniSection: React.FC = () => {
    const [testimonies, setTestimoni] = useState<Testimoni[]>([]);

    const getData = async () => {
        const data = await fetchJson<Testimoni[]>('/data/testimoni.json');
        setTestimoni(data);

    }
    useEffect(() => {
        getData();
    }, []);

  return (
    <section id="testimoni" className="testi-section">
      <div className="testi-container">
        <h2 className="testi-title">What Partners Say About Working With Us</h2>
        <p className="testi-subtitle">Trusted voices. Real experiences. Proven results.</p>

        <Slider items={testimonies} />
      </div>
    </section>
  );
}

export default TestimoniSection