import React from "react";
import Layout from "../components/Layout";
import Team from "../components/Team";
import { HiOutlineChevronRight, HiLightBulb } from "react-icons/hi";
import { BsShieldFillExclamation, BsStars } from "react-icons/bs";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { IoRibbonSharp } from "react-icons/io5";
import { SiHandshake } from "react-icons/si";
import { GoLightBulb } from "react-icons/go";
import ContactCard from "../components/ContactCard";
import Advisors from "../components/Advisor";
import { Link } from 'gatsby';

const Hero = () => {
  return (
    <section id="hero" className="mx-auto py-10 bg-world-svg bg-cover bg-no-repeat bg-center">
      <div className="flex justify-center items-center flex-col lg:justify-between lg:flex-row gap-6">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="font-serif text-5xl sm:text-7xl mb-4 max-w-2xl">
            Our Mission
          </h1>
          <p className="sm:text-lg mb-8 tracking-wide max-w-2xl text-justify">
            BUILD Nigeria is a non-profit NGO that is dedicated to bridging the
            college access gap in Nigeria by operating a cohort program which
            provides low-income students with access to credible and
            comprehensive resources and personalized guidance through the
            process of applying and securing admission and financial aid to
            world-class colleges and universities, including but not exclusive
            to US colleges.
          </p>
          <Link to="/donate">
          <button aria-label="Donate Now" className="btn bg-primary btn-lg text-white mx-auto lg:mx-0">
            <span>Donate Now</span> <HiOutlineChevronRight size="20" />
          </button>
          </Link>
        </div>
        <div className="lg:w-1/2 w-full max-w-md">
          <img  width="720"
            src="https://images.unsplash.com/photo-1577036421869-7c8d388d2123?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
            alt="BUILD Nigeria - Who we are"
            className="object-center object-cover w-100 rounded-xl aspect-1"
          />
        </div>
      </div>
    </section>
  );
};

const OurVision = () => {
  return (
    <section className="mx-auto">
      <div className="justify-center items-center sm:px-10 mb-8">
        <h1 className="font-serif text-2xl sm:text-4xl mb-4 font-semibold tracking-wide">
          With over 46 million pre-college aged students nationwide and an increasingly youthful population, 
        </h1>
        <p className="prose max-w-full">
          Nigeria's current education system does not provide its students with adequate opportunities to study at world-class colleges and universities that can enable them acquire necessary skills and achieve the full extent of their aspirations. Through our flagship cohort program, BUILD Nigeria aims to directly invest in Nigerian youth and their aspirations with the ultimate goal of creating broader social change. 
        </p>
      </div>
    </section>
  );
};

const OurPurpose = () => {
  return (
    <section className="mx-auto">
      <div className="justify-center items-center sm:px-10 flex  flex-col">
        <h1 className="font-serif text-2xl sm:text-4xl mb-4 font-semibold tracking-wide max-w-3xl text-center">
          We utilizes a problem-solution-outcome framework to define our purpose
          statement.
        </h1>

        <div className="flex overflow-x-scroll my-8 w-full gap-4 snap-x">
          <div className="rounded-md bg-secondary/20 border border-slate-300 p-4 md:p-8 min-w-[320px] snap-center">
            <div className="aspect-1 w-12 rounded-full bg-orange-400 bg-opacity-10 flex justify-center items-center">
              <BsShieldFillExclamation className="text-orange-400" size={24} />
            </div>
            <h2 className="text-2xl font-bold font-serif mt-4 mb-2">
              The Problem
            </h2>
            <p className="prose text-sm leading-7">
              There is currently no organization in Nigeria that serves primarily students who are low income and first generation (first in their family to attend university) throughout their journey to apply to university. Our research shows that there are so many brilliant students who lack the resources and support they need to successfully apply to and receive admissions and financial aid to world-class colleges. 
            </p>
          </div>
          <div className="rounded-md bg-secondary/20 border border-slate-300 p-4 md:p-8 min-w-[320px] snap-center">
            <div className="aspect-1 w-12 rounded-full bg-blue-400 bg-opacity-10 flex justify-center items-center">
              <GoLightBulb className="text-blue-400" size={24} />
            </div>
            <h2 className="text-2xl font-bold font-serif mt-4 mb-2">
              Our Solution
            </h2>
            <p className="prose text-sm leading-7">
              The BUILD Nigeria Cohort Program is designed specifically for high achieving, low income and first generation Nigerian students. We provide our students with a year of free college counseling, college application support, and college preparedness programming. We also completely fund our students’ journey to college, from application fees to student visa costs, we are there every step of the way.  
            </p>
          </div>
          <div className="rounded-md bg-secondary/20 border border-slate-300 p-4 md:p-8 min-w-[320px] snap-center">
            <div className="aspect-1 w-12 rounded-full bg-teal-400 bg-opacity-10 flex justify-center items-center">
              <BsStars className="text-teal-400" size={24} />
            </div>
            <h2 className="text-2xl font-bold font-serif mt-4 mb-2">
              The Outcome
            </h2>
            <p className="prose text-sm leading-7">
              Our vision is to become the leading community of globally educated, highly skilled and well-connected young Nigerians. By providing opportunities for our alumni to make positive change in Nigeria, we aim to leverage the BUILD Nigeria community to create social change in Nigeria. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
const OurValues = () => {
  const build = [
    { label: "Innovation", icon: HiLightBulb, color: "primary" },
    { label: "Excellence", icon: IoRibbonSharp, color: "alt" },
    { label: "Commitment to service", icon: AiFillSafetyCertificate, color: "primary" },
    { label: "Collaboration and Partnership", icon: SiHandshake, color: "alt" },
  ];
  return (
    <section className="mx-auto">
      <div className="flex justify-between md:space-x-8 sm:px-10">
        <svg
          className="hidden md:block"
          width="682"
          height="16"
          viewBox="0 0 682 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5">
            <path d="M0 8L672 7.99994" stroke="black"></path>
            <path
              d="M680.5 8.86602C681.167 8.48112 681.167 7.51888 680.5 7.13397L671.5 1.93782C670.833 1.55292 670 2.03405 670 2.80385V13.1962C670 13.966 670.833 14.4471 671.5 14.0622L680.5 8.86602Z"
              fill="black"
            ></path>
          </g>
        </svg>
        <div>
          <p className="text-3xl font-bold font-serif">
           Our Values
          </p>
        </div>
      </div>

      <div className="grid grid-flow-row-dense grid-cols-2 md:grid-cols-4 justify-around my-8 space-4">
        {build.map((item, i) => {
          return (
            <div key={i} className=" rounded-lg aspect-square text-center mb-2">
              <div className={`h-20 w-20 rounded-2xl flex justify-center items-center text-white  bg-${item.color} border border-secondary mx-auto mb-4`}>
                <item.icon size="32" />
              </div>
              <div className="font-bold text-xl">{item.label}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default function AboutUs({ location }) {
  return (
    <Layout location={location} title="About Us" description="BUILD Nigeria is a non-profit NGO that is dedicated to bridging the
    college access gap in Nigeria by operating a cohort program which
    provides low-income students with access to credible and
    comprehensive resources and personalized guidance through the
    process of applying and securing admission and financial aid to
    world-class colleges and universities, including but not exclusive
    to US colleges.">
      <Hero />
      <OurVision />
      <OurPurpose />
      <OurValues />
      <Team/>
      <Advisors/>
      <ContactCard />
    </Layout>
  );
}
