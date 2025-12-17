import React, { useEffect, useState } from "react";
import "./IndustrySection.css";
import TabDetail from "../../ui/TabDetail/TabDetail";
import type { Industry } from "../../../types/industry";
import fetchJson from "../../../api/fetchJson";

const IndustrySection: React.FC = () => {
  const [industries, setIndustry] = useState<Industry[]>([]);

  const getData = async () => {
    const data = await fetchJson<Industry[]>('/data/industry.json');
    setIndustry(data)
  }

  useEffect(() => {
    getData();
  }, [])
  return (
    <section className="industry-section">
      <div className="industry-container">
        <h2 className="industry-title">Built for Your Industry</h2>
        <p className="industry-subtitle">
          We've helped companies across industries launch smarter, faster, and more securely.
        </p>

        {industries.length > 0 && (<TabDetail tabs={industries} />)}
      </div>
    </section>
  );
}

export default IndustrySection;
