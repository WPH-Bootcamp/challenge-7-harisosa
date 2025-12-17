import React, { useEffect, useState } from 'react';
import './ServiceSection.css';
import ServiceCard from '../../ui/ServiceCard/ServiceCard';
import type { Service } from '../../../types';
import fetchJson from '../../../api/fetchJson';

const ServiceSection: React.FC = () => {
    const [services, setService] = useState<Service[]>([]);

    const getService = async () => {
        const svc = await fetchJson<Service[]>('/data/service.json');
        setService(svc);

    }
    useEffect(() => {
        getService();
    }, []);
    return (
        <section id='service' className='service-section'>
            <div className='service-container'>
                <h2 className='service-title'>
                    Smart IT Solutions That Grow With You
                </h2>

                <p className='service-subtitle'>
                    Tailored tech to boost efficiency, security, and results.
                </p>

                <div className='service-grid'>
                    {services.map((item, idx) => (
                        <ServiceCard key={`${item.title}-${idx}`} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ServiceSection;