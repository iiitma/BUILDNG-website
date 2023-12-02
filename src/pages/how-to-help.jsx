import React from "react";
import Layout from "../components/Layout";
import { SiCashapp, SiPaypal, SiZelle } from "react-icons/si";
import { Link } from "gatsby";
import SubscribeCard from "../components/SubscribeCard";

const Hero = () => {
  return (
    <section
      id="hero"
      className="mx-auto min-h-[70vh] bg-world-svg bg-cover bg-no-repeat bg-center flex items-center"
    >
      <div className="md:flex justify-between align-center items-center w-full gap-8">
        <div className="mb-6">
          <h1 className="text-5xl tracking-wider font-bold font-serif mb-6 uppercase max-w-[80%]">More Ways To Support BUILD Nigeria</h1>
          <p className="prose mb-8">
            To achieve our vision we require more than financial support. Join us in the construction: you can offer your time, skills and network to create a Nigeria with an empowered youth capable of achieving their aspirations.
          </p>
          <a href="https://pj9wf9ig1bf.typeform.com/to/WO8TwrqE" target="_blank"
            className="bg-primary nav-btn text-white w-fit"
          >
            <span>See ways to engage</span>
          </a>
        </div>

        <div className="flex flex-col gap-4">
          <div className="mb-6">
            <h1 className="text-3xl font-bold font-serif mb-3">Donate</h1>
            <p className="prose">
              Funds raised will be used to cover the SAT registration costs, TOEFL
              registration costs, college application fees, transportation costs,
              tablet/laptop purchasing costs, student visa costs, and so on, for
              members of our cohort who would otherwise be unable to cover these
              costs.
            </p>
          </div>
          <Link alt="Donate through Paypal" to="https://www.paypal.com/donate?hosted_button_id=CZBT3RRN3MCU2" target="_blank" className="btn md:btn-lg text-white gap-2 md:gap-8 bg-[#00457c] rounded-lg md:rounded-xl">
            <div className="aspect-1 w-12 rounded-full bg-white bg-opacity-10 flex justify-center items-center">
              <SiPaypal className="text-white" size={24} />
            </div>

            <span>Donate through Paypal</span>
          </Link>

          <Link alt="Donate through Cash App" to="https://cash.app/$BUILDNigeria" target="_blank" className="btn md:btn-lg text-white gap-2 md:gap-8 bg-[#00d64f] rounded-lg md:rounded-xl">
            <div className="aspect-1 w-12 rounded-full bg-white bg-opacity-10 flex justify-center items-center">
              <SiCashapp className="text-white" size={24} />
            </div>

            <span>Donate through Cash App</span>
          </Link>

          <Link alt="Donate through Zelle: contact@buildng.org" to="https://www.zellepay.com/" target="_blank" className="btn md:btn-lg text-white gap-2 md:gap-8 bg-[#6d1fd4] rounded-lg md:rounded-xl">
            <div className="aspect-1 w-12 rounded-full bg-white bg-opacity-10 flex justify-center items-center">
              <SiZelle className="text-white" size={24} />
            </div>

            <span>Donate through Zelle: contact@buildng.org</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default function Donate({ location }) {
  return (
    <Layout location={location} title="How to help" description="Funds raised will be used to cover the SAT registration costs, TOEFL
    registration costs, college application fees, transportation costs,
    tablet/laptop purchasing costs, student visa costs, and so on, for
    members of our cohort who would otherwise be unable to cover these
    costs.">
      <Hero />
      <SubscribeCard />
    </Layout>
  );
}
