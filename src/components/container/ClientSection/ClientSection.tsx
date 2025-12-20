import type React from "react";
import { useEffect, useState } from "react";
import type { BrandLogo } from "../../../types";
import fetchJson from "../../../api/fetchJson";

const ClientSection: React.FC = () => {
    const [logos, setLogos] = useState<BrandLogo[]>([]);

    const getLogos = async () => {
        const logos = await fetchJson<BrandLogo[]>("/data/brand-logos.json");
        setLogos(logos);

    }
    useEffect(() => {
        getLogos();
    }, []);
    
    //TODO : Move to css

    return (
        <section id='client' className="px-6 md:px-12 lg:px-20 ">
            <h2 className="text-center mb-8 text-lg tracking-wide font-bold text-[var(--text-primary)]">
                Trusted by Global Innovators & Leading Brands
            </h2>
            <div className="flex overflow-x-auto overflow-y-hidden h-20">
                <div className="flex gap-12 items-center">
                    {
                        logos.map(logo => {
                            return <img key={logo.id} src={logo.logoUrl} alt={logo.name}
                                className="w-[126px] h-18 mix-blend-luminosity object-contain" />
                        })
                    }

                </div>
            </div>
        </section>
    )
}

export default ClientSection;