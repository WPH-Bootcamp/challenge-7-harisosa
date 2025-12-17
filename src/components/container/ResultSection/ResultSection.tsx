import type React from "react";
import './ResultSection.css';
import fetchJson from "../../../api/fetchJson";
import { useEffect, useState } from "react";
import type { Result } from "../../../types";
import CircleCard from "../../ui/CircleCard/CircleCard";

const ResultSection: React.FC = () => {
    const [results, setResult] = useState<Result[]>([])

    const getResult = async () => {
        const results = await fetchJson<Result[]>('/data/result.json');
        setResult(results)
    }

    useEffect(() => {
        getResult();
    },[])

    return (
        <section className="result-section-container">
            <h2 className="result-title">
                End-to-End IT Solutions That Drive Results
            </h2>
            <p className="result-description">
                From strategy to execution, we deliver solutions that grow your business.
            </p>
            <div className="result-layout">
                {
                    results.map(result => {
                        return <CircleCard>
                            <span >{result.value}</span>
                            <p>{result.label}</p>
                        </CircleCard>
                    })
                }
            </div>
        </section>
    )
}

export default ResultSection;