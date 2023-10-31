import React from "react";
import Layout from "../../components/Layout";
import ContactCard from "../../components/ContactCard";
import Cohort from "../../components/Cohort";
import CohortImage from "../../assets/webp/cohort.webp"
import { HiArrowDownTray } from "react-icons/hi"

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

export default function CohortPage({ location }) {
  return (
    <Layout
      location={location}
      title="BUILD Cohort Program"
      description={
        " The BUILD Nigeria Cohort Program is a free, hands-on, 1 year program that works with 5-7 Nigerian students to provide them with personalized guidance through the process of applying and securing admission and full financial aid to top colleges, and connecting them with resources to succeed at these colleges."
      }
      image={CohortImage}
    >
      <Cohort />
      <Requirements />
      <ContactCard />
    </Layout>
  );
}
