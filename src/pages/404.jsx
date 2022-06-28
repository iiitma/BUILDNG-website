import React from 'react'
import Layout from '../components/Layout'
import { TiArrowBack } from 'react-icons/ti';
import { Link } from 'gatsby';

const Hero = () => {
    return (
        <section id="hero" className="mx-auto min-h-[70vh] bg-geo bg-cover bg-no-repeat bg-center flex items-center">
        <div className="md:flex justify-center align-center items-center w-full">
          <div className="text-center">
            <h1 className="text-8xl font-bold font-serif mb-8">Not Found</h1>
            <p className="text-lg mb-8">The page you're looking for does not exist.</p>
            <div className="flex justify-center">
          <Link to="/" >
          <button aria-label="Return to Home" className="btn bg-primary text-white mx-auto lg:mx-0">
          <TiArrowBack size="20" /> <span>Return to Home</span> 
          </button>
          </Link>
          </div>
          </div>

        </div>
      </section>
    )
}

export default function NotFoundPage({location}) {
  return (
   <Layout location={location} title="Page Not Found - BUILD Nigeria">
    <Hero/>
   </Layout>
  )
}
