import React, { useState } from "react";
import FeatherImg from "../../assets/About/FeatherImg.jpg";
import background from "../../assets/About/aboutHero.jpg";

const AboutHero = () => {
  const [showtxt, setShowtxt] = useState(false);
  const [showbtn, setshowbtn] = useState(true);

  const Showcontent = () => {
    setShowtxt(true);
    setshowbtn(false);
  };

  const Hidecontent = () => {
    setShowtxt(false);
    setshowbtn(true);
  };

  return (
    <>
      <div
        className="text-center bg-cover bg-center bg-fixed bg-no-repeat min-h-screen"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="overlay items-center">
          <div className="flex items-center justify-center">
            <div className="text-white text-center" data-aos="zoom-in">
              <h2 className="text-4xl font-bold">About US</h2>
              <p className="mt-2">It’s always about you at WSS</p>
            </div>
          </div>
        </div>
      </div>
      <section className="lg:w-[85%] mx-auto  md:p-5">
        <div className="text-center">
          <h2 className="text-3xl font-bold">
            <span className="text-custom">About</span> US
          </h2>
          <div className="my-4 border-b-2 border-custom w-24 mx-auto"></div>
        </div>
        <div className=" mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <div className="img">
                <img src={FeatherImg} className="w-full h-auto" alt="Feather" />
              </div>
            </div>
            <div className="w-full md:w-1/2 order-2 md:order-1 mt-4 md:mt-0">
              <div className=" text-justify">
                <p>
                  World Staff System is established on 14th April, 2016,
                  Securities and Exchange Commission of Pakistan Corporate No:
                  0093838 / A005823, License No OP & HRD / 3929 / LHR / 2016
                  from Ministry of Overseas Pakistan and human resource
                  development under the rule of 7 & 9(1) with the ultimate
                  vision of serving and the most reliable overseas recruitment
                  services. World Staff System is the only overseas employment
                  agency in Pakistan which deals in Technical Intern Training
                  Program(TITP), Japanese all languages courses N1, N2, N3, N4,
                  N5, special skilled worker, as well as all International
                  languages courses just like ILETs, TOFEL etc for study visa in
                  all developed countries. World Staff Systems is also
                  registered with the best organizations of the world e.g. Japan
                  International Trainee and Skilled worker Co-operation and
                  Organization(JITCO), Organization for Technical Intern
                  Training(OTIT) and Rainbow to improve quality of its services.
                  World Staff System has signed MOUs with the best Universities
                  in Pakistan, including National University of Technology,
                  Islamabad(NUTECH) and the University of Lahore(UOL) to promote
                  and expand the scope of the TITP program. World Staff System
                  is also going to expand this scope in the coming days by
                  signing MOUs regarding Technical Intern Training Program(TITP)
                  with Pakistan’s most reputed universities. World Staff System
                  has a well equipped office with experience and trained staff
                  that process quickly and efficiently all official task.
                  {showbtn ? (
                    <button
                      onClick={Showcontent}
                      className="text-custom underline"
                    >
                      ...read more
                    </button>
                  ) : null}
                </p>
              </div>
              {showtxt && (
              <div className="w-full mt-4">
                <div className="text-justify">
                  <p>
                    We believe in people efficiency. Our mission is not just to
                    satisfy our clients by sourcing manpower but to ensure that
                    they are able to achieve the organizational goals and prove
                    to be strategically fit for the position. This purpose
                    highlights our existence with an aim to provide our clients
                    with full-fledged HR services and constantly deal with
                    innovative techniques to maintain/retain the effectiveness
                    of the firm and assist the organization to attain greater
                    return on asset. We consider our candidates as supreme and
                    on a constant basis our expert’s team provides extensive
                    training, career counseling and continuous motivation. To
                    carry out as educators, trainers, consultants and to provide
                    human resource in one or more of the subjects mentioned
                    whether independently or in collaboration/association with
                    any university, degree awarding institutions, college,
                    school, company, firm, association of persons, body, whether
                    incorporated or not, government, semi-government or any
                    local, national or international authority, as permissible
                    under law but not to act as a university & or degree
                    awarding institute and to obtain prior approval from
                    overseas employment corporation and other relevant
                    authorities. It’s our explicit policy to provide services to
                    customers demanding expectations in conformity with the
                    highest standards of quality and lasting satisfaction. Our
                    aim is to serve the customers better and for this, we are
                    continuously improving our business processes by working in
                    teams and providing the appropriate work environment
                    management and quality tools skills and in this way we have
                    assisted over thousands of workers to different countries
                    project of all skills/professionals.
                    <button
                      onClick={Hidecontent}
                      className="text-custom underline"
                    >
                      ...read less
                    </button>
                  </p>
                </div>
              </div>
            )}
            </div>

           
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHero;
