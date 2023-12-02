import React from 'react';
import ContactUs from "../assets/svgs/contact-us.svg";
import { HiOutlineChevronRight } from "react-icons/hi";
import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"

export const SubscribeCard = () => {
  return (
    <section className="mx-auto max-w-none bg-secondary/50 py-14 mb-0">
      <div className="bg-white rounded-xl flex py-4 px-14 max-w-[720px] mx-auto justify-center items-center flex-col md:justify-between  md:flex-row gap-6">
        <div className="md:w-1/2 max-w-lg">
          <h1 className="font-serif font-semibold text-4xl mb-6 tracking-wider">
            Subscribe to our Newsletter to stay connected.
          </h1>
          {/* <p className="mb-6">
            Send us a message at{" "}
            <a
              href="mailto:contact@buildng.org"
              className="text-alt font-semibold"
            >
              contact@buildng.org
            </a>{" "}
            to get assistance with all your enquiries. Our support team is
            always available to answer your questions.
          </p> */}
          <Link to="http://eepurl.com/htYvoX" target='_blank' >
            <button aria-label="Subscribe" className="btn bg-primary btn-lg text-white">
              <span>Subscribe</span> <HiOutlineChevronRight size="20" />
            </button>
          </Link>
        </div>
        <div className="md:w-1/2 max-w-lg">
          <StaticImage src="../assets/svgs/subscribe.svg" alt="Subscribe Illustration" />
        </div>
      </div>
    </section>
  );
};

export default SubscribeCard