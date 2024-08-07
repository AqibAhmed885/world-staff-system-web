import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CourseData } from '../../utils/data';
import Aos from 'aos';
import 'aos/dist/aos.css';

const CourseName = () => {
    const scrollToTop = () => {
        document.getElementById("course-form").scrollIntoView({
            block: 'end',
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        Aos.init({
          duration: 2000,
          once: true,
        });
      }, []);

    return (
        <section className="flow_banner pb-4">
            <div className="mx-auto">
                <div className="flex flex-wrap gap-6 my-3 justify-center">
                    {CourseData.map((Data, index) => (
                        <div
                            key={index}
                            className="col-md-6 col-sm-6 col-12 "
                            data-aos="zoom-in-down"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000"
                        >
                            <div className="w-96 mx-auto my-3 border-2 border-white bg-[#d7e7f7] rounded-lg">
                                <div className="Card-heading px-3 pt-4 bg-blue-600 rounded-t-lg">
                                    <h4 className="text-white text-center my-auto">{Data.courseName}</h4>
                                </div>
                                <div className="course-txt px-3 py-3 text-gray-900 text-justify">
                                    <p>{Data.courseDetails}</p>
                                </div>
                                <div className="text-gray-900 text-left pl-3 pb-3 pt-2">
                                    <p>Months: {Data.courseMonth}</p>
                                    <p>Hours: {Data.hours}</p>
                                    <p>Weeks: {Data.weeks}</p>
                                    <p>Kanji Words: {Data.kanji}</p>
                                    <p>Vocabulary: {Data.Vocabulary}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col justify-center lg:w-[60%] mx-auto items-center mx-auto">
                <p className="text-center  justify-center text-gray-700 text-lg my-4  max-w-prose">
                    You can choose the learning method for in-person and online courses. Learn Japanese anywhere in the world, including Pakistan. Select your Japanese language level, whether for daily conversations, business, or JLPT preparation.
                </p>
                <Link
                    // to="/register"
                    className="btn btn-2 bg-custom text-white py-2 px-4 rounded-md inline-block"
                    onClick={scrollToTop}
                >
                    Apply Now
                </Link>
                </div>
                
            </div>
        </section>
    );
};

export default CourseName;
