import React from "react";
import Layout from "../components/Layout";
import ContactCard from "../components/ContactCard";

const Hero = () => {
  return (
    <section id="hero" className="mx-auto py-10 bg-cover bg-no-repeat bg-center mb-0">
      <div className="flex justify-center items-center flex-col lg:justify-between lg:flex-row gap-6">
        <div className=" text-center lg:text-left mx-auto">
          <h1 className="font-serif font-bold text-5xl sm:text-7xl mb-4 max-w-4xl text-center">
            A Letter from the Founders
          </h1>
        </div>
      </div>
    </section>
  );
};

const Chat = () => {
  return (
    <section className="mx-auto">
      <div className="flex justify-center items-center flex-col lg:justify-between  lg:flex-row sm:px-10 gap-6">
        <div className="max-w-3xl prose tracking-wide leading-6 mx-auto text-justify">
          <p className="">Dear Firends,</p>
          <p className="">
            Thank you so much for your interest in BUILD Nigeria! We are so
            happy to get to introduce BUILD Nigeria to you and tell you more
            about how it came to be. There were two things that led to the
            formation of BUILD Nigeria. Firstly, seeing that our mission was
            possible, and secondly, knowing that Nigeria is filled with many
            intelligent and passionate students who deserve access to
            opportunities that can enable them achieve the extent of their
            aspirations.
          </p>
          <p className="">
            <b className="text-alt text-lg">Ife:</b> On arrival at Yale at the
            beginning of my freshman year, I searched for Nigerians in the
            African Student Association. However, for the first time in my life,
            Nigerians did not dominate the room - it was instead filled with
            Kenyans, Zimbabweans and other East Africans. Intrigued by this, and
            a little disappointed by the underrepresentation of Nigerians, I
            began asking everyone I met about their journey to Yale and
            repeatedly heard the names ‘KENSAP,’ ‘TANSAO,’ USAP,’ and
            ‘BRIDGE2RWANDA’ as the routes of origin for majority of the African
            students, especially those at the top colleges. These were each
            college access programs, similar to BUILD Nigeria, which served
            mainly high-achieving students from underserved or low-income
            communities by providing them with support to be able to gain
            admissions and full financial aid to world-class universities!
          </p>
          <p className="">
            I quickly researched whether Nigeria had something similar,
            wondering why I could count only five Nigerian undergraduate
            students who lived in Nigeria at Yale. I did not believe that
            Nigerians were not good enough to attend these top colleges, but I
            did realise that amongst the Nigerians at Yale - few were supported
            with financial aid and most came from well-to-do backgrounds. Was
            gaining full financial aid a myth for Nigerian students? Again, I
            could not believe this without searching for answers, and this
            search for answers led me to Tolu! I remembered hearing about a head
            girl of an all-girls secondary school in Lagos gaining admission and
            full financial aid to Harvard, and so I decided to reach out to her.
          </p>
          <p className="">
            <b className="text-alt text-lg">Tolu:</b> When I got to Harvard, I was
            the only Nigerian international student in the Class of 2022, and
            one of two in the entire undergraduate class at the time. After
            spending only a few weeks on campus, and seeing so many of my other
            African classmates have a number of people from their countries to
            interact with and rely upon, I became very curious and saddened by
            the underrepresentation of Nigerian international students. When Ife
            reached out to me, we talked about our shared experiences and she
            was amazed by how many obstacles I had to overcome to even get to a
            point where I believed that applying to Harvard was within my reach.
            We both spent the next few weeks doing research about college access
            programs that exist in other African countries, and re-confirmed
            what we already knew; that this is a real gap that exists in
            Nigeria. So, with that we created our vision for BUILD Nigeria,
            developed a project proposal, and began recruiting the members of
            our founding team.
          </p>
          <p className="">
            <b className="text-alt text-lg">Ife:</b> Surrounded by skeptics, and a
            constant stream of misinformation, Tolu’s admission to Harvard felt
            like an anomaly. However, we wanted this success to be normalised.
            Why should it be shocking that a student born and raised in Nigeria
            should get into a world-class institution with full financial
            support? How could we recreate this? How could we help students who
            also had this dream but no support? This was it, BUILD Nigeria was
            born.
          </p>
          <p className="">
          The BUILD Nigeria team believes in each and every one of our students. We believe that they deserve access to world-class educational institutions that have the ability to radically transform the set of opportunities that are available to them. Nigerian students deserve to study in schools that serve them, that give them the tools they need to take their place in this competitive, dynamic world we live in, and not only survive but also do spectacular things for their community, their country, and the world at large. So, we are doing what our country has repeatedly failed to do; we are investing directly in the lives and futures of Nigerian students, and we have no doubts that they will in turn be advocates for Nigeria in spaces where other Nigerians are not present.
          </p>
          <p className="">
          BUILD Nigeria was born so that one day it no longer needs to exist; so that one day Nigeria itself can have world-class educational institutions. We invite you all to be a part of our journey to creating the new Nigeria that we know we deserve, one student at a time.
          </p>
          <p className="text-right">
          Thank You, <br/> <span className="text-alt">Ife & Tolu</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default function OurStory({ location }) {
  return (
    <Layout location={location} title="Our Story - BUILD Nigeria" description="A Letter from our Founders">
      <Hero />
      <Chat />
      <ContactCard />
    </Layout>
  );
}
