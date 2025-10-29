import React, { useState } from 'react';
import { servicesData } from '../../constants';
import Button from './Button';

const ExpertiseTabs: React.FC = () => {
    const [activeServiceId, setActiveServiceId] = useState(servicesData[0].id);

    const activeService = servicesData.find(s => s.id === activeServiceId)!;

    return (
        <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Service selectors */}
            <div className="lg:col-span-1 flex flex-col space-y-2">
                {servicesData.map(service => (
                    <button
                        key={service.id}
                        onClick={() => setActiveServiceId(service.id)}
                        className={`p-6 text-left rounded-md transition-all duration-300 w-full border-l-4 ${
                            activeServiceId === service.id
                                ? 'bg-brand-gray-200/50 border-brand-gold'
                                : 'bg-transparent border-transparent hover:bg-brand-gray-200/20 hover:border-brand-gray-100'
                        }`}
                    >
                        <div className="flex items-center">
                            <service.icon className={`w-6 h-6 mr-4 transition-colors duration-300 flex-shrink-0 ${activeServiceId === service.id ? 'text-brand-gold' : 'text-gray-400'}`} />
                            <h3 className="text-xl font-serif text-white">{service.title}</h3>
                        </div>
                    </button>
                ))}
            </div>

            {/* Service content */}
            <div className="lg:col-span-2 bg-brand-night p-8 rounded-lg border border-brand-gray-100 min-h-[350px]">
                <div key={activeService.id} className="animate-fade-in">
                    <div className="flex items-start sm:items-center mb-4 flex-col sm:flex-row">
                        <div className="inline-block p-4 bg-brand-gray-100/50 rounded-lg border border-brand-gray-200 mr-4 mb-4 sm:mb-0">
                           <activeService.icon className="w-10 h-10 text-brand-gold" />
                        </div>
                        <div>
                             <h2 className="text-3xl font-serif text-white">{activeService.title}</h2>
                             <p className="text-brand-gold-light">{activeService.tagline}</p>
                        </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-6">{activeService.description}</p>
                    <Button asLink to={`/services/${activeService.id}`}>
                        Learn More
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ExpertiseTabs;
