import React from "react";
import Layout from "../../components/Layout";
import { ContactCard } from "../../components/ContactCard";
import SRPMImage from "../../assets/webp/srpm.webp";
import SRPMPoster from "../../assets/webp/srpm-poster.webp";
import { StaticImage } from "gatsby-plugin-image"

const SrpmHero = () => {
  return (
    <section
      id="hero"
      className="mx-auto max-w-none bg-secondary/50 md:py-20 mb-0 px-0 md:px-8 bg-education"
    >
      <div className="bg-transparent rounded-xl flex p-10 max-w-[1280px] mx-auto justify-center items-center flex-col md:justify-between  md:flex-row gap-6">
        <div className="md:w-1/2 max-w-xl">
          <h1 className="font-serif font-bold text-6xl mb-3">
            BUILD Summer Research Peer Mentorship (SRPM) program
          </h1>
          <p className="mb-6 font-medium text-lg">
            Our Summer Research Peer Mentorship (SRPM) program is a six-week
            program intended to enable our cohort build soft and hard skills
            that will prepare them for the college environment.
          </p>
          <div className="flex gap-4">
            {/* <Link to="/contact-us">
              <button aria-label="Apply Now" className="btn bg-primary btn-lg text-white">
                <span>Apply Now</span>
              </button>
            </Link> */}
            {/* <AnchorLink to="/programs/cohort#requirements" stripHash>
              <button className="btn btn-lg text-primary px-0">
                <HiOutlinePlusCircle size={20} />
                <span>See Requirements</span>
              </button>
            </AnchorLink> */}
          </div>
        </div>
        <div className="md:w-1/2 max-w-lg">
          <StaticImage src="../../assets/webp/srpm.webp" width={448} height={448} alt="" />
        </div>
      </div>
    </section>
  );
};

const Details = () => {
  return (
    <section className="mx-auto bg-deep max-w-none py-8 mb-0">
      <div className=" flex max-w-7xl mx-auto justify-center items-center flex-col md:justify-between  md:flex-row gap-6 py-10">
        <div>
          <p className="prose text-white text-md">
            Students embarked on substantial research projects on topics that
            were of interest to them and affected their immediate community or
            Nigeria as a whole. Students had summer mentors from target
            universities such as Harvard College and the University of
            Rochester, who provided guidance on the appropriate approaches and
            skills for conducting independent research and creating a piece of
            academic writing.
          </p>
        </div>
        <div>
          <video
            controls
            controlsList="nodownload"
            className="rounded-xl max-w-3xl w-full"
            poster={SRPMPoster}
          >
            <source
              src={
                "https://res.cloudinary.com/iiitma2/video/upload/v1656363660/BUILDNG/1637337453169_mbqtak.mp4"
              }
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </section>
  );
};

export default function SPRM({ location }) {
  return (
    <Layout
      location={location}
      title="BUILD Summer Research Peer Mentorship (SRPM) program"
      description="Students embarked on substantial research projects on topics that
    were of interest to them and affected their immediate community or
    Nigeria as a whole. Students had summer mentors from target
    universities such as Harvard College and the University of
    Rochester, who provided guidance on the appropriate approaches and
    skills for conducting independent research and creating a piece of
    academic writing."
    image={SRPMImage}
    >
      <SrpmHero />
      <Details />
      <ContactCard />
    </Layout>
  );
}
