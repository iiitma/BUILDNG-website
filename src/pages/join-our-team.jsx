import React, { Fragment } from "react";
import Layout from "../components/Layout";
import ContactCard from "../components/ContactCard";
import Cohort from "../components/Cohort";
import CohortImage from "../assets/webp/cohort.webp"
import { HiArrowDownTray, HiOutlinePlusCircle } from "react-icons/hi"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { StaticImage } from "gatsby-plugin-image";
import { Menu, Popover, Transition } from "@headlessui/react";
import { Link } from "gatsby";

const Requirements = () => {
  return (
    <section id="requirements" className="mx-auto py-8">
      <div className="flex justify-center items-center flex-col lg:justify-between  lg:flex-row  gap-6">
        <div className="">
          <h1 className="font-serif text-2xl sm:text-5xl mb-4 font-semibold">
            Requirements
          </h1>
          <ul className="prose max-w-5xl ">
            Students who meet our target must:
            <ol className="list-decimal">
              <li>
                Be from low-income households OR are first generation (first in their family to attend college/university). The term low-income here is used to reflect the Nigerian standard, i.e students who otherwise may not be able to afford attending university in Nigeria
              </li>
              <li>
                Be in SS2 or in SS3 and willing to take a gap
              </li>
              <li>
                Be high-achieving, and can show that they have a remarkable academic performance since they began secondary school
              </li>
              <li>
                Demonstrate a commitment to the demands of the cohort programming, both virtual and in-person, which may include up to 3 hours of video chat per week and other virtual commitments such as essay writing workshops
              </li>
              <li>
                Be target-oriented with the potential to be able to express their ideas, opinions and beliefs effectively and convincingly, as well as possess the potential for great interpersonal skills
              </li>
              <li>
                Demonstrate a desire and commitment to making a positive difference in Nigeria. We are seeking students who are passionate about and dedicated to transforming Nigeria
              </li>
              <li>
                Have a basic understanding and compelling reason for wanting to attend a top US college
              </li>
              <li>
                Fill out all required sections of the application below  to the very best of their ability, and provide any supporting documents that the BUILD team may ask of them for verification purposes
              </li>
            </ol>


          </ul>
          <p className="font-bold mt-3 text-md">Not currently receiving applications.</p>
          <a href="https://drive.google.com/uc?export=view&id=1ZhtJTc1AQ8xgHSpt0RMv0b1-j8jiz38D" target="_blank" download="BUILD NG Cohort Prospectus_2023.pdf" className="btn btn-lg bg-primary text-white w-fit gap-2 mt-8">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default function JoinOurTeam({ location }) {
  return (
    <Layout
      location={location}
      title="BUILD Cohort Program"
      description={
        " The BUILD Nigeria Cohort Program is a free, hands-on, 1 year program that works with 5-7 Nigerian students to provide them with personalized guidance through the process of applying and securing admission and full financial aid to top colleges, and connecting them with resources to succeed at these colleges."
      }
      image={CohortImage}
    >
      <section id="hero" className="mx-auto max-w-none bg-secondary/50 md:py-20 mb-0 px-0 md:px-8 bg-education">
        <div className="bg-transparent rounded-xl flex p-10 max-w-[1280px] mx-auto justify-center items-center flex-col md:justify-between  md:flex-row gap-6">
          <div className="md:w-1/2 max-w-xl">
            <h1 className="font-serif font-bold text-6xl mb-3">
              Associate Director
            </h1>
            <p className="mb-6 font-medium text-lg">
              The BUILD Nigeria Associate Director role is a full time paid role reporting directly to the Executive Director and engaged in responsibilities ranging from the management and supervision of our global team to the maintenance of our network and partnerships. This primarily virtual role is perfect for those who enjoy administrative, strategic and people-facing tasks, and are continuous learners who will be able to successfully adapt to the evolving needs of BUILD Nigeria. Most of all, the Associate Director must demonstrate a passion for BUILD Nigeria’s mission.
            </p>
            <div className="flex gap-4">
              <Popover className="relative">
                <Popover.Button aria-label="Apply Now" className="btn bg-black btn-lg text-white ring-0 focus:outline-none focus-visible:ring-0">
                  <span>Apply Now</span>
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-10 mt-3 w-screen max-w-sm transform px-4 sm:px-0 lg:max-w-3xl">
                    <div className="bg-white p-4 rounded-2xl">
                      <p className="leading-2">
                        Interested candidates should email a CV and cover letter to <a className="text-primary" href="mailto:info@buildng.org">info@buildng.org</a> by November 30th 2023 at 11:59PM WAT with the subject line “Associate Director Application: [LastName, FirstName]”. You can click this <Link className="text-primary" to="">link</Link> to see the expanded role description.
                      </p>
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>
              <Link to="/job-description/associate-director">
                <button aria-label="View Job Description" className="btn btn-lg text-primary px-0">
                  <HiOutlinePlusCircle size={20} />
                  <span>View Job Description</span>
                </button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 max-w-xl">
            <StaticImage src="../assets/webp/cohort.webp" alt="" />
          </div>
        </div>
      </section>
      <ContactCard />
    </Layout>
  );
}
