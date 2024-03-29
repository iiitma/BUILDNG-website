import React from "react";
import Layout from "../components/Layout";
import ContactCard from "../components/ContactCard";
import { HiOutlineChevronRight } from "react-icons/hi";
import { RiUserStarFill } from "react-icons/ri";
import { BiUnite } from "react-icons/bi";
import { GiImpactPoint } from "react-icons/gi";
import { FaUsers, FaConnectdevelop } from "react-icons/fa";
import { Navigation, Pagination, Scrollbar, Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Connector from "../assets/svgs/connector.webp";
import HeroImage from "../assets/webp/hero-image.webp";
import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"

import Rise from "../assets/png/Rise-Logo.png"
import HAN from "../assets/png/HAN.png"

const Hero = () => {
  return (
    <section id="hero" className="mx-auto  bg-world-svg bg-cover bg-no-repeat bg-center max-w-none flex items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center lg:justify-between gap-6 max-w-[1280px] py-12">
        <div className="text-center lg:text-left">
          <h1 className="font-serif text-6xl sm:text-7xl mb-4 max-w-2xl">
            Creating social change through education for Nigerians
          </h1>
          <p className=" mb-8 tracking-wide max-w-2xl lg:text-justify">
            BUILD Nigeria is a non-profit and NGO that serves potential Nigerian
            pre-college students by aiming to democratize access to
            comprehensive and credible information for applying to world-class
            colleges and universities, including but not exclusive to US
            colleges.
          </p>
          <div className="flex justify-center lg:justify-start">
          <Link to="/about-us" aria-label="Learn More about BUILD Nigeria" >
          <button aria-label="Learn More about BUILD Nigeria" className="btn bg-primary btn-lg text-white mx-auto lg:mx-0">
            <span>Learn More about BUILD Nigeria</span> <HiOutlineChevronRight size="20" />
          </button>
          </Link>
          </div>
        </div>
        <div className="w-full max-w-2xl">
          <StaticImage src="../assets/webp/hero-image.webp" className="object-fit w-100" width={720} alt="Creating social change through education for Nigerians." />
        </div>
      </div>
    </section>
  );
};

const Infograph1 = () => {
  const build = [
    { label: "Become", icon: RiUserStarFill, color: "primary" },
    { label: "Unite", icon: BiUnite, color: "alt" },
    { label: "Impact", icon: GiImpactPoint, color: "deep" },
    { label: "Lead", icon: FaUsers, color: "secondary" },
    { label: "Develop", icon: FaConnectdevelop, color: "dark" },
  ];
  return (
    <section className="mx-auto">
      <div className="flex justify-between md:space-x-8">
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
            What does <b className="text-primary">BUILD</b> stand for?
          </p>
        </div>
      </div>

      <div className="grid grid-flow-row-dense grid-cols-3 md:grid-cols-5 grid-rows-2 justify-around my-8 space-4">
        {build.map((item, i) => {
          return (
            <div key={i} className=" rounded-lg aspect-square text-center ">
              <div className="h-20 w-20 rounded-full flex justify-center items-center bg-white  text-primary border border-secondary mx-auto mb-4">
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

const PartnersSection = () => {
  const partners = [
    {
      name: "Junior Achievement Nigeria",
      link: "https://ja-nigeria.org/",
      url: "https://res.cloudinary.com/iiitma/image/upload/f_auto/v1630275800/JAN_2e9e4f394d.webp",
    },
    {
      name: "Stem in Africa",
      link: 'https://www.steminafrica.com/',
      url: "https://res.cloudinary.com/iiitma/image/upload/f_auto/v1630275800/SIA_6917b65ed0.jpg",
    },
    {
      name: "United For Kids Foundation",
      link: "http://unitedforkidsfoundation.org/",
      url: "https://res.cloudinary.com/iiitma/image/upload/f_auto/v1630275800/UKF_fee0e8dc21.webp",
    },
    {
      name: "KENSAP",
      link: "https://www.kensap.org/",
      url: "https://res.cloudinary.com/iiitma/image/upload/f_auto/v1630282247/KENSAP_27fb4b465c.webp",
    },
    {
      name: "Junior Achievement Africa",
      link: "https://ja-africa.org/",
      url: "https://res.cloudinary.com/iiitma/image/upload/f_auto/v1630275800/JAA_21924124e4.webp",
    },
    {
      name: "Rise",
      link: "https://www.risefortheworld.org/",
      url: Rise,
    },
    {
      name: "Hali Access Network",
      link: "https://www.haliaccess.org/",
      url: HAN,
    },
  ];
  return (
    <section className="mx-auto">
      <div>
        <p className="text-lg font-bold font-serif mb-4">Our Partners</p>
      </div>
      <div className="flex flex-wrap justify-start md:space-x-12 items-center">
        {partners.map((p, i) => {
          return (
            <a key={i} href={p.link} className="grayscale m-2">
              <img  src={p.url} alt={p.name} className="h-10" />
            </a>
          );
        })}
      </div>
    </section>
  );
};

const Infograph2 = () => {
  return (
    <section className="mx-auto">
      <div className="flex justify-center items-center flex-col lg:justify-between  lg:flex-row sm:px-10 gap-6">
        <div className="lg:w-1/2 text-center lg:text-left ">
          <h1 className="font-serif text-2xl sm:text-5xl mb-4 font-semibold">
            We are <b className="text-primary">A NON PROFIT</b>
          </h1>
          <p className=" mb-8 tracking-wide max-w-xl text-justify">
            BUILD Nigeria is a youth-led non-profit that aims to democratize access to world-class colleges for high achieving, low income and first generation Nigerian youth. 
          </p>
          <div className="flex">
          <Link to="/about-us" aria-label="Learn More about BUILD Nigeria"  className="btn bg-primary btn-lg text-white mx-auto lg:mx-0">
            <span>Learn More about BUILD Nigeria</span> <HiOutlineChevronRight size="20" />
          </Link>
          </div>
        </div>
        <div className="lg:w-1/2 w-full max-w-md order-first lg:order-last">
          <img
            src="https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
            alt="BUILD Nigeria - Who we are"
            className="object-center object-cover w-100 rounded-xl aspect-1"
            width="640" height="360"
          />
        </div>
      </div>
    </section>
  );
};

const Infograph3 = () => {
  return (
    <section className="mx-auto">
      <div className="flex justify-center items-center flex-col lg:justify-between  lg:flex-row sm:px-10 gap-6">
        <div className="lg:w-1/2 w-full max-w-md">
          <img 
            src="https://images.unsplash.com/photo-1473649085228-583485e6e4d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
            width="640" height="360"
            alt="BUILD Nigeria - Who we are"
            className="object-center object-cover w-100 rounded-xl aspect-1"
          />
        </div>
        <div className="lg:w-1/2 text-center lg:text-left max-w-lg">
          <p className=" mb-8 tracking-wide text-justify">
            For high achieving, first generation and low income Nigerian youth, we provide a year of free college counseling, college application support and college preparedness programming with the aim of enabling them to receive college acceptances and full financial aid to world-class colleges. BUILD Nigeria aims to become the leading community of globally educated, highly skilled and well-connected young Nigerians who are passionate about making change in their community, country and the world at large. 
          </p>
          {/* <div className="flex">
          <Link to="/about-us" aria-label="Learn More about BUILD Nigeria"  className="btn bg-primary btn-lg text-white mx-auto lg:mx-0">
            <span>Learn More about BUILD Nigeria</span> <HiOutlineChevronRight size="20" />
          </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
};

const Infograph4 = () => {
  const programs = [
    {
      name: "BUILD Cohort Program",
      description:
        "The BUILD Nigeria Cohort Program is a free, hands-on program that works with Nigerian students to provide them with personalized guidance through the process of applying  and securing admission and full financial aid to top colleges, and connecting them with resources to succeed at these colleges.",
      link: "/programs/cohort-program",
    },
    {
      name: "Resource Bank ",
      description:
        "BUILD Nigeria plans to maintain an accessible, comprehensive and reliable online resource bank that will be available to members of the general public",
      link: "/programs/resource-bank",
    },
    {
      name: "Mentorship & Junior Prep Program ",
      description:
        "BUILD Nigeria plans to develop an extensive mentor-mentee network that connects Nigerian students with other Nigerian studying the colleges they hope to attend, succeeding in the field they have interest in, and so on",
      link: "/programs/mentorship-prep-program",
    },
  ];
  return (
    <section className="bg-secondary/50 max-w-none mb-0 lg:pt-20 pb-20 px-0 lg:-mt-44">
      <section className="mx-auto lg:w-[80%] w-full max-w-none p-0 z-5">
        <div className="w-100 bg-primary text-white lg:rounded-xl sm:p-20   px-5 pt-20 pb-10 max-w-[1440px] mx-auto">
          <h1 className="font-serif font-bold text-3xl">
            Here's a list of our programs
          </h1>

          <div className=" mt-10 overflow-hidden">
            <Swiper
              style={{ "--swiper-pagination-color": "#ffffff" }}
              className="mySwiper"
              modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
              slidesPerView={"auto"}
              loopedSlides={10}
              spaceBetween={50}
              pagination={{ clickable: true, dynamicBullets: true }}
              scrollbar={{ draggable: true }}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                480: {
                  width: 380,
                },
              }}
            >
              {programs.map((p, i) => {
                return (
                  <SwiperSlide
                    className="bg-white rounded-md max-w-[380px] w-full text-black flex flex-col"
                    style={{ height: "auto" }}
                    key={i}
                  >
                    <div className="p-4">
                      <h2 className="text-3xl font-serif leading-none mb-4">
                        {p.name}
                      </h2>
                      <p className="text-slate-700 text-lg">{p.description}</p>
                    </div>
                  </SwiperSlide>
                );
              })}
              ...
            </Swiper>
          </div>

          <div className="flex justify-center mt-8">
            <Link to="/programs"  aria-label="Learn More about our programs">
            <button aria-label="Learn More about our programs"  className="btn bg-white btn-lg text-deep mx-auto lg:mx-0">
            <span>Learn More about our programs</span> <HiOutlineChevronRight size="20" />
          </button>
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
};



export default function Home({ location }) {
  return (
    <Layout location={location} title={'Creating social change through education for Nigerians'}>
      <Hero />
      <PartnersSection />
      <Infograph1 />
      <Infograph2 />
      <Infograph3 />
      <section className="mx-auto -mt-16 hidden lg:block">
        <StaticImage width={640} height={360} src="../assets/svgs/connector.webp" className="w-100" alt="Connecting Line" />
      </section>
      <Infograph4 />
      <ContactCard />
    </Layout>
  );
}
