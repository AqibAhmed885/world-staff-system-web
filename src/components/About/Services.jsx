import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Servicesdata } from '../../utils/data';

const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="lg:w-[80%] md:w-full mx-auto my-12">
      <div className="mx-auto py-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Our <span className="text-primary">Services</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto my-4"></div>
          <p className="text-sm text-justify text-center mx-auto max-w-4xl">
            Our aim is to provide our clients and candidates with excellent
            recruitment services based on mutual trust and the highest
            professional standards driven by quality and cost consciousness.
            Most of our business is done on the basis of referrals from both
            candidates and clients. We strive to develop true partnerships with
            our clients to fully understand their business goals and needs,
            building and maintaining relationships based on mutual trust.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
          {/* <Slider {...settings}> */}
            {Servicesdata.map((service, index) => (
              <div key={index} className="px-4 slideUp"> 
                <div className="p-6 text-center">
                  <div className="flex justify-center items-end w-20 h-20 mx-auto rounded-full bg-gray-200 ">
                    <service.icon className="text-4xl hover:-translate-y-5 transition-transform duration-300 " style={{ color: service.color }} />
                  </div>
                  <h6 className="mt-4 text-lg font-semibold ">{service.name}</h6>
                </div>
              </div>
            ))}
          {/* </Slider> */}
        </div>
      </div>
    </section>
  );
};

export default Services;
