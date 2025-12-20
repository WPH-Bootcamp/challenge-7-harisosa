import React, { useEffect, useState } from "react";
import "./FaqSection.css";
import Accordion from "../../ui/Accordion";
import FaqCtaCard from "../../ui/FaqCtaCard";
import type { FaqItem } from "../../../types";
import fetchJson from "../../../api/fetchJson";

const FaqSection: React.FC = () => {
  const [faqs, setFaqs] = useState<FaqItem[]>([]);

  const getData = async () => {
    const data = await fetchJson<FaqItem[]>('/data/faq.json');
    setFaqs(data);
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <section id="faq" className="faq-section">
      <div className="faq-top">
        <div className="faq-topRow">
          <h2 className="faq-title">Need Help? Start Here.</h2>
          <p className="faq-desc">Everything you need to know — all in one place.</p>
        </div>
      </div>

      <div className="faq-body">
        <div className="faq-left">
          <Accordion items={faqs} />
        </div>

        <div className="faq-right">
          <FaqCtaCard
            title={"Let’s talk it through"}
            subtitle={"Book a free consultation with our team."}
            image={'/assets/images/faq.svg'}
            buttonText={"Free Consultation"}
            onClick={()=> {}}
          />
        </div>
      </div>
    </section>
  );
}

export default FaqSection;