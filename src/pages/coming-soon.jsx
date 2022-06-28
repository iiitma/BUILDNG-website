import React from 'react'
import Layout from '../components/Layout'
import { TiArrowBack } from 'react-icons/ti';
import { Link } from 'gatsby';

const Hero = () => {
    return (
        <section id="hero" className="mx-auto min-h-[70vh] bg-geo bg-cover bg-no-repeat bg-center flex items-center">
        <div className="md:flex justify-center align-center items-center w-full">
          <div className="text-center">
            <h1 className="text-7xl font-bold font-serif mb-8">Coming Soon</h1>
            <p className="text-lg mb-8">Something really cool is coming...</p>
            <div className="flex justify-center">
          <Link to="/" >
          <button className="btn bg-primary text-white mx-auto lg:mx-0">
          <TiArrowBack size="20" /> <span>Return to Home</span> 
          </button>
          </Link>
          </div>
          </div>

        </div>
      </section>
    )
}

export default function ComingSoon({location}) {
  return (
   <Layout location={location} title="Coming Soon - BUILD Nigeria" description="Something really cool is coming!">
    <Hero/>
   </Layout>
  )
}
