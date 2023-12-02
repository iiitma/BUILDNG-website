import React from "react";
import Layout from "../components/Layout";
import { MdMail, MdLocationPin } from "react-icons/md";
import { HiOutlineChevronRight } from "react-icons/hi";
import { Link } from "gatsby";
import { socials } from "../helpers/socials";

const Hero = () => {
  return (
    <section id="hero" className="mx-auto min-h-[70vh] bg-world-svg bg-cover bg-no-repeat bg-center flex items-center">
      <div className="md:flex justify-between align-center items-center w-full">
        <div>
          <h1 className="text-7xl font-bold font-serif mb-8">Contact Us</h1>
        </div>

        <div className="rounded-xl bg-alt shadow-sm shadow-primary p-4 md:px-8 md:py-16 max-w-[400px] text-secondary gap-8 flex flex-col">
          <div className="flex gap-4">
            <div>
              <div className="aspect-1 w-12 rounded-full bg-secondary bg-opacity-10 flex justify-center items-center">
                <MdMail className="text-secondary" size={24} />
              </div>
            </div>

            <div>
              <h1 className="font-serif text-white text-2xl">
                Reach out to directly
              </h1>
              <p className="text-sm">
                Send us an email via contact@buildng.org and ring our phone on{" "}
                <a href="tel:+1(857) 472-8349" className="text-white font-bold">
                  +1(857) 472-8349
                </a>{" "}
                and a representative will attend to you as soon as possible
              </p>

              <Link
                target="_blank"
                to="mailto:contact@buildng.org"
                className="text-white flex gap-2 leading-none font-semibold items-center mt-4 font-serif tracking-wide text-sm"
              >
                <span>Send us an email</span>
                <HiOutlineChevronRight size={16} />
              </Link>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="hidden-sm">
              <div className="aspect-1 w-12 rounded-full bg-secondary bg-opacity-10 flex justify-center items-center">
                <MdLocationPin className="text-secondary" size={24} />
              </div>
            </div>

            <div>
              <h1 className="font-serif text-white text-2xl">Locate Us</h1>
              <p className="text-sm">
                28 DeWolfe Street, Cambridge MA 02138 USA
              </p>

              <Link
                target="_blank"
                to="https://goo.gl/maps/tUFww6mGSzdP3T7S8"
                className="text-white flex gap-2 leading-none font-semibold items-center mt-4 font-serif tracking-wide text-sm"
              >
                <span>Get Directions</span>
                <HiOutlineChevronRight size={16} />
              </Link>
            </div>
          </div>

          <div className="text-center flex flex-col">
            <h1 className="font-serif text-white text-lg max-w-sm">
              Reach us through Social Media
            </h1>
            <div className="flex gap-4 mt-2 mx-auto">
              {socials.map((social, i) => {
                return (
                  <a
                    href={social.iconUrl}
                    alt={social.name}
                    key={i}
                    className="aspect-1 w-10 rounded-full bg-secondary bg-opacity-10 flex justify-center items-center"
                  >
                    <social.icon className="text-secondary" size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function ContactUs({ location }) {
  return (
    <Layout location={location} title="Contact Us">
      <Hero />
    </Layout>
  );
}
