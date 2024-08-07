import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <>

      <section className="my-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-full md:w-10/12">
              <div className="lg:w-[70%] mx-auto">
                <h2 className="text-3xl font-semibold">
                  Our <span className="text-custom">Team</span>
                </h2>
                <div className="border-b-4 border-custom w-16 my-4"></div>
                <p className="text-gray-700">
                  Our team is the secret to our success. Each of our employees is amazing in their own right, but together they are what makes "World Staff System" such a great and rewarding place to work.
                </p>
              </div>
              {/* <div className="text-center mt-8" data-aos="fade-down">
                <img src={Imgstd} alt="study" className="w-full h-48 object-cover" />
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
