import React from 'react';
// import Container from 'react-bootstrap/Container';
import Vissionbg from '../../assets/About/ourvissionbg.jpg';
import { FaCheck } from 'react-icons/fa';

const Vision = () => {
  return (
    <section
      id="vision"
      className="py-10 bg-cover bg-fixed bg-center"
      style={{ backgroundImage: `url(${Vissionbg})` }}
    >
    
        <div className=" flex flex-col md:flex-row items-center justify-between">
          <div className="lg:w-[85%] md:w-2/3 mx-auto md:mr-8">
            <div className="vission-heading">
              <h2 className="text-4xl font-bold mb-4 text-white">Our Vision</h2>
            </div>
            <div className="lg:w-1/2 text-white">
              <p>
                World Staff System (WSS) recognizes the global need for employment. We want to
                provide our clients with world-class, personalized service and provide Pakistanis
                the opportunity to work in developed countries.
              </p>
              <strong>To achieve this, we aim to:</strong>
              <ul className="list-disc list-inside mt-6 gap-4">
                <li className="flex items-center">
                  <FaCheck className="text-primary text-lg mr-2 my-2" />
                  Constantly provide our best services to our clients who are competent, reliable
                  and dedicated
                </li>
                <li className="flex items-center mt-2">
                  <FaCheck className="text-primary text-lg mr-2 my-2" />
                  Help Pakistanis enhance their competence thereby raising the competitiveness of
                  the workforce
                </li>
                <li className="flex items-center mt-2">
                  <FaCheck className="text-primary text-lg mr-2 my-2" />
                  Attain all the requirements of our clients in the shortest possible time
                </li>
                <li className="flex items-center mt-2">
                  <FaCheck className="text-primary text-lg mr-2 my-2" />
                  Provide continuous professional development to our workers to produce the best
                  reliable and friendly workforce
                </li>
              </ul>
            </div>
          </div>
        </div>
      
    </section>
  );
};

export default Vision;
