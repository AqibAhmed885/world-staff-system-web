// Placements.js or Placements.jsx

// import React from 'react';
import { PlacementData } from '../../utils/data';
import Cart from './Cart';

const Placements = () => {
    return (
        <section className="py-5">
            <div className="container mx-auto px-4">
                <h2 className="text-center text-3xl font-bold mb-4">
                    Benefits of our{' '}
                    <span className="text-blue-600">Japan Placement</span> Program
                </h2>
                <div className="border-b-2 border-blue-600 w-16 mx-auto mb-8"></div>

                <p className="text-justify mb-8">
                    TITP facilitates dynamic and challenging internship opportunities for
                    young students to be part of this program from 1 to 5 years. This
                    internship program develops functional capabilities in the incumbent
                    that can enable them to perform exceptionally in various professional
                    settings.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {PlacementData.map((item, index) => (
                        <Cart
                            key={index}
                            imgsrc={item.imgsrc}
                            name={item.name}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Placements;
