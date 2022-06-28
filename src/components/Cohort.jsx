import { AnchorLink } from 'gatsby-plugin-anchor-links';
import React from 'react'
import { HiOutlinePlusCircle } from 'react-icons/hi';
import { StaticImage } from "gatsby-plugin-image"
export default function Cohort() {
    return (
        <section id="hero" className="mx-auto max-w-none bg-secondary/50 md:py-20 mb-0 px-0 md:px-8 bg-education">
          <div className="bg-transparent rounded-xl flex p-10 max-w-[1280px] mx-auto justify-center items-center flex-col md:justify-between  md:flex-row gap-6">
            <div className="md:w-1/2 max-w-xl">
              <h1 className="font-serif font-bold text-6xl mb-3">
                BUILD Cohort Program
              </h1>
              <p className="mb-6 font-medium text-lg">
                The BUILD Nigeria Cohort Program is a free, hands-on, 1 year program
                that works with 5-7 Nigerian students to provide them with
                personalized guidance through the process of applying and securing
                admission and full financial aid to top colleges, and connecting
                them with resources to succeed at these colleges.
              </p>
              <div className="flex gap-4">
              {/* <Link to="/contact-us">
                <button aria-label="Apply Now" className="btn bg-primary btn-lg text-white">
                  <span>Apply Now</span>
                </button>
              </Link> */}
              <AnchorLink to="/programs/cohort#requirements" stripHash>
                <button aria-label="See Requirements" className="btn btn-lg text-primary px-0">
                  <HiOutlinePlusCircle size={20}/>
                <span>See Requirements</span>
                </button>
              </AnchorLink>
              </div>
            </div>
            <div className="md:w-1/2 max-w-xl">
              <StaticImage src="../assets/webp/cohort.webp" width="720" alt="" />
            </div>
          </div>
        </section>
      );
}

