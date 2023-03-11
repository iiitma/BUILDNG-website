import React from 'react';
import ContactUs from "../assets/svgs/contact-us.svg";
import { HiOutlineChevronRight } from "react-icons/hi";
import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"

export const ContactCard = () => {
    return (
      <section className="mx-auto max-w-none bg-secondary/50 py-20 mb-0">
        <div className="bg-white rounded-xl flex p-10 max-w-[1280px] mx-auto justify-center items-center flex-col md:justify-between  md:flex-row gap-6">
          <div className="md:w-1/2 max-w-lg">
            <h1 className="font-serif font-bold text-4xl mb-3">
              Do you have a question?
            </h1>
            <p className="mb-6">
              Send us a message at{" "}
              <a
                href="mailto:info@buildng.org"
                className="text-alt font-semibold"
              >
                info@buildng.org
              </a>{" "}
              to get assistance with all your enquiries. Our support team is
              always available to answer your questions.
            </p>
            <Link to="/contact-us" >
              <button aria-label="Contact Us" className="btn bg-primary btn-lg text-white">
              <span>Contact Us</span> <HiOutlineChevronRight size="20" />
              </button>
            </Link>
          </div>
          <div className="md:w-1/2 max-w-lg">
            <StaticImage src="../assets/svgs/contact-us.svg" alt="Contact Us Illustration" />
          </div>
        </div>
      </section>
    );
  };

export default ContactCard