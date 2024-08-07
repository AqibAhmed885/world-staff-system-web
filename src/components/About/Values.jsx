import React from 'react';
// import Container from 'react-bootstrap/Container';
import Valuesbg from '/flag-japan-pakistan.webp';
import { Valuesdata } from '../../utils/data';

const Values = () => {
  return (
    <div className="py-5 bg-fixed flex justify-end" style={{ backgroundImage: `url(${Valuesbg})` }}>
      <section className='w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto flex flex-col bg-white p-4 sm:p-6'>
        <h1 className='text-lg sm:text-xl md:text-2xl font-bold mb-4'>Our Values:</h1>
        <div className="flex flex-col">
          {Valuesdata.map((value) => (
            <div key={value.id} className="">
              <div className="flex items-center mb-4">
                <value.icon className="text-base sm:text-lg mr-2 sm:mr-4" />
                <h3 className="text-sm sm:text-base md:text-sm font-semibold">{value.text}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Values;