import React from "react";
import Layout from "../../components/Layout";
import ContactCard from "../../components/ContactCard";
import { Link } from "gatsby";
import SRPMImage from "../../assets/png/srpm.png";
import { HiOutlineChevronRight, HiOutlineClock, HiPlus } from "react-icons/hi";
import { SiLinkedin } from 'react-icons/si';
import Cohort from "../../components/Cohort";

const Others = () => {
  return (
    <section className="mx-auto max-w-none bg-secondary/50 py-20 mb-0">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
      <div className="bg-white rounded-xl flex p-10 justify-center items-center flex-col md:justify-between  md:flex-row gap-6 md:col-span-2">
      <div className="md:w-1/2 max-w-lg">
        <h1 className="font-serif font-bold text-4xl mb-3">
        Summer Research Peer Mentorship (SRPM) program 
        </h1>
        <p className="mb-6">
        Our Summer Research Peer Mentorship (SRPM) program is a six-week program intended to enable our cohort build soft and hard skills that will prepare them for the college environment.
        </p>
        <div className="flex">
        <Link to="/programs/srpm" >
          <button alt="Learn More" className="btn bg-primary text-white">
          <span>Learn More</span> <HiOutlineChevronRight size="20" />
          </button>
        </Link>
        </div>
      </div>
      <div className="md:w-1/2 max-w-lg">
        <img src={SRPMImage} alt="" />
      </div>
    </div>


    <div className="bg-white rounded-xl flex p-10 justify-center items-center flex-col md:justify-between  md:flex-row gap-6 col-span-1">
      <div className="max-w-lg">
        <h1 className="font-serif font-bold text-4xl mb-3">
        Think Tank
        </h1>
        <p className="mb-6">
        BUILD Nigeria plans to develop and maintain a think tank that seeks to create and encourage conversations surrounding the radical rethinking and reimagining of the Nigerian education landscape.
        </p>
          <button alt="Coming Soon" className="btn bg-secondary text-primary rounded-full">
          <HiOutlineClock size="20" /> <span>Coming Soon</span>
          </button>
      </div>
    </div>

    <div className="bg-alt text-white rounded-xl flex p-10 justify-center items-center flex-col md:justify-between  md:flex-row gap-6 col-span-1">
       <div className="max-w-lg">
        <h1 className="font-serif font-bold text-4xl mb-3">
        Resource Bank
        </h1>
        <p className="mb-6">
        BUILD Nigeria plans to maintain an accessible, comprehensive and reliable online resource bank that will be available to members of the general public.
        </p>
          <button alt="Coming Soon" className="btn bg-secondary text-primary rounded-full">
          <HiOutlineClock size="20" /> <span>Coming Soon</span>
          </button>
      </div>
    </div>

    <div className="bg-sky-600 text-white rounded-xl flex p-10 justify-center items-center flex-col md:justify-between  md:flex-row gap-6 md:col-span-2">
      <div className="md:w-2/3 max-w-lg md:order-last">
        <h1 className="font-serif font-bold text-4xl mb-3 tracking-wider">
       Stay connected on LinkedIn
        </h1>
        <p className="mb-6">
       Don't miss any update on our programs. Follow us on LinkedIn and be the first to get information about our programs.
        </p>
        <div className="flex">
        <Link alt="Follow Us on LinkedIn" to="https://www.linkedin.com/company/build-nigeria/" target="_blank" >
          <button alt="Follow Us on LinkedIn" className="btn bg-white text-sky-600">
          <span>Follow Us</span> <HiPlus size="20" />
          </button>
        </Link>
        </div>
      </div>
      <div className="md:w-1/3 max-w-sm p-10">
        <SiLinkedin size={'auto'}/>
      </div>
    </div>

      </div>
  </section>
  )
}

export default function Programs({ location }) {
  return (
    <Layout location={location} title="Our Programs - BUILD Nigeria">
      <Cohort />
      <Others/>
      <ContactCard />
    </Layout>
  );
}
