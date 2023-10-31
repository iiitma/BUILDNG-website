import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Seo from './SEO';
import JoinOurTeamPopUp from "./JoinOurTeamPopUp";

export default function Layout({title, description, image, location, children }) {
  return (
    <>
    <Seo title={title} description={description} image={image}/>
    <Navbar location={location}/>
    <main className="bg-white text-black font-body">
      {children}
    </main>
      <JoinOurTeamPopUp />
    <Footer />
  </>

  )
}