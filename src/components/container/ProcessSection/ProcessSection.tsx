import type React from "react";
import StepCard from "../../ui/StepCard/StepCard";
import './ProcessSection.css';
import { useEffect, useState } from "react";
import fetchJson from "../../../api/fetchJson";
import type { Process } from "../../../types";

const ProcessSection : React.FC = () => {

  const [processes, setprocesses] = useState<Process[]>([]);

  const getProcess = async () => {
    const process = await fetchJson<Process[]>('/data/process.json');
    setprocesses(process)
  }

  useEffect(()=>{
    getProcess();
  },[])

  return (
    <section className="process-section">
      <div className="process-container">
        <h2 className="process-title">Our Process</h2>
        <p className="process-subtitle">Clear steps. Smart execution. Results you can count on.</p>

        <div className="steps-outer">
          <div className="steps-inner">
            {processes.map((process, idx) => (
              <StepCard
                key={process.step ?? idx}
                process={process}
                index={idx}
                total={processes.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


export default ProcessSection;