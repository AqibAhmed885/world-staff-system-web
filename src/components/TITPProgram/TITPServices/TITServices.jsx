import React from 'react';
import IndustryCard from './IndustryCard';
import { ServicesDataAll } from '../../../utils/data';

const TITServices = () => {
    return (
        <div className="lg:w-[80%] md:w-full mx-auto my-6">
            <div className=" text-center py-5">
                <h2 className="text-3xl font-bold">
                    TITP <span className="text-program_color">Focused</span> Industries
                </h2>
                <div className="border-b-4 border-theme-colored-2 w-1/4 mx-auto my-4"></div>
                <div className="grid grid-cols-1 gap-6">
                    <IndustryCard titleOne="Agriculture" servicesData={ServicesDataAll.agri} />
                    <IndustryCard titleOne="Fishery" servicesData={ServicesDataAll.fishery} />
                    <IndustryCard titleOne="Construction" servicesData={ServicesDataAll.construction} />
                    <IndustryCard titleOne="Food" titleTwo="Manufacturing" servicesData={ServicesDataAll.food_manufacturing} />
                    <IndustryCard titleOne="Textile" servicesData={ServicesDataAll.textile} />
                    <IndustryCard titleOne="Machinery" servicesData={ServicesDataAll.machinery} />
                    <IndustryCard titleOne="Others" servicesData={ServicesDataAll.others} />
                </div>
            </div>
        </div>
    );
}

export default TITServices;
