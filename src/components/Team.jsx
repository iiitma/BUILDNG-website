import React from "react";
import { HiX } from "react-icons/hi";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";

import Ife from '../assets/team/Ife.jpeg'
import Tolu from '../assets/team/Tolu.jpg'
import Fatima from '../assets/team/Fatima.jpg'
import Vanessa from '../assets/team/Vanessa.jpg'
import Claire from '../assets/team/Claire.jpg'
import Chris from '../assets/team/Chris.jpg'
import Tobi from '../assets/team/Tobi.jpeg'
import Mary from '../assets/team/Mary.jpg'
import Ada from '../assets/team/Ada.jpg'
import Odera from '../assets/team/Odera.jpg'
import Love from '../assets/team/Love.jpg'

export const Person = ({details}) => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="group cursor-pointer text-center mb-12" role="dialog" onClick={openModal}>
        <div className="items-center flex justify-center relative">
          <div className="h-40 w-44 group-hover:border border-transparent group-hover:border-t-alt group-hover:bg-alt aspcet-1 rounded-full animate-spin absolute"></div>
          <img
          alt={details.name}
            width={140} height={140}
            className="rounded-full object-cover aspect-1 h-40 z-10"
            src={details.img}
          />
        </div>
        <h2 className="mt-2 text-2xl font-serif">{details.name}</h2>
        <p className="text-primary text-sm max-w-[150px] text-center mx-auto">
       {details.role}
        </p>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="absolute right-4">
                    <button
                    aria-label="Close Modal"
                      type="button"
                      className="inline-flex justify-center rounded-full border border-transparent bg-secondary p-2 text-sm font-medium text-primary hover:bg-primary/50 "
                      onClick={closeModal}
                    >
                      <HiX/>
                    </button>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-3xl font-serif font-medium leading-6 text-gray-900"
                  >
                   {details.name}
                  </Dialog.Title>
                  <Dialog.Description className="text-md text-primary mt-2">
                  {details.role}
                  </Dialog.Description>


                  <div className="mt-4">
                    <p className="text-md text-gray-500 text-justify">
                    {details.profile}
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default function Team() {
  const members = [
    {
      name: "Ifeoluwa Adeogun",
      img: Ife,
      role: "Co-Founder",
      profile: "Ife Adeogun is a Sophomore at Yale University, majoring in Economics and taking additional courses primarily in African Studies. She was born and raised in Lagos, Nigeria and completed her secondary education in Kent, England. Outside of classes, Ife is found in the role of Vice President of Yale African Student Association (YASA), leading projects in Yale’s Global Research & Consulting group, and participating in numerous ideathons. All of these interests led her to co-founding BUILD Nigeria with Tolu. During her YASA gatherings she noticed a strong east African majority and wondered why this was the case, which led her to discover the amazing work of KENSAP, USAP, Bridge2Rwanda and many more college access programs. Her experience participating in the African Development Bank COVID-19 Ideathon compared with her experience participating in the Prospect 100 (US-based) COVID-19 hackathon drew her attention to the dire gaps in the nigerian education systems ability to promote critical thinking and creative approaches to solving problems. She realised that Nigerians were incredibly hard working but did not have the tools to efficiently approach the various problems they faced in the way her American peers did. Moreso, this ‘lack of tools’ meant that Nigerians need to develop an unorthodox way of thinking, and a fiery drive to change the system (much like she observed with her college classmates). No longer could ‘it is what it is’ be a Nigerian’s solace, suffering is not inevitable. As a member of YASA, Ife was also exposed to the lives and histories of many other african countries, she realised Nigeria is truly not the ‘biggest’. Rwanda is one of the fastest growing African countries 25 years post-genocide, Kenya is known as the “Silicon Savannah”. What are these countries doing? Creating a pipeline for world class educated citizens who were passionate about their country and wanted to give back, and use their newfound ways of thinking to approach problems with grit and innovation. This is what BUILD Nigeria was created upon, this is what she hopes BUILD Nigeria will be. ",
    },
    {
      name: "Tolulope Olasewere",
      img: Tolu,
      role: "Co-Founder",
      profile: "Tolulope is a Junior at Harvard University studying a double major in Government and Philosophy . She was born in Lagos, Nigeria and is the Co-Founder of BUILD Nigeria. As evidenced by the mission of BUILD Nigeria, She is passionate about systemic change in Nigeria, especially surrounding education policy and reform, as well as educational justice. She chose to study the intersection of Government and Philosophy because she strongly believes that it can really lead us to create for ourselves a society where we do the hard work of asking the difficult questions about what our society should look like, work to develop frameworks that attempt to answer these questions, and allow this thinking to guide what we do practically and how we decide to govern ourselves. When she is  not applying a Nigerian lens to her studies, you can find her exploring her passion for education by leading a passionate team at BUILD Nigeria, and teaching in different classrooms. She teaches civic education to Boston elementary school students through CIVICS, she taught poetry to teenagers in Hong Kong through Summerbridge Hong Kong, and worked as a counsellor to 10-12 year-old-students at the Mission Hill Afterschool Program in Boston. In addition, she also serves as the Director of Internal Affairs for the Harvard Global Education Movement which is an organization that organizes conferences for high school students globally to challenge them to innovate solutions to issues in their region.",
    },
    {
      name: "Fatima Lawan",
      img: Fatima,
      role: "Chief Research and Content Officer",
      profile: "Fatima is a Sophomore at Tufts University majoring in Biology and Environmental Studies. She is particularly passionate about examining the effects of environmental racism and systemic oppression on various systems of healthcare, and in many ways, that exact study of equity is what makes Fatima so passionate about BUILD! She believes that most problems go beyond the surface and begin with inequalities that upon closer examination, have created disadvantages for people by no control of theirs. These inequities trickle into all aspects of life, education included. Fatima hopes that by working with BUILD as part of the Research & Content team, she can further the BUILD mission of democratizing access to educational resources in Nigeria.",
    },
    {
      name: "Vanessa Ariyibi",
      img: Vanessa,
      role: "Chief Financial Officer",
      profile: "Vanessa is the Chief Financial Officer of BUILD Nigeria. Her interest in this project stems from her enduring passion for social change. Vanessa is a Law undergraduate at the University of Warwick, and she aspires to become a Commercial lawyer.",
    },
    {
      name: "Claire Utomi",
      img: Claire,
      role: "Think Tank Project  Manager",
      profile: "Claire Utomi is a student of the Wharton School studying business and minoring in Energy and Sustainability, as she believes in the intersection of disciplines in order to innovate and solve problems. To Claire there are many issues yet to be solved in Nigeria but Education is one of the most fundamental, providing individuals with the tools to build the future is vital. As such, whilst BUILD and other incredible organizations strive to build a better infrastructure for education she is passionate about providing a place for Nigeria’s talent to thrive and train in the interim, ahead of the return of the generation that left town. \n In line with this passion for helping others realise their potential Claire also works with Vintro, enabling entrepreneurs from any and all backgrounds to build relationships with the industry leaders that can provide necessary resources.",
    },
    { name: "Chris", img: Chris, role: "Co-Chief Marketing and Communications Officer", profile: "Chris is a Junior at Inholland University of Applied Sciences in The Hague, Netherlands, studying International Creative Business. She believes that every person is entitled to high-quality education no matter of their background, and that is the reason she joined BUILD. She is part of BUILD’s marketing team. " },
    {
      name: "Tobi Makinde",
      img: Tobi,
      role: "Co-Chief Marketing and Communications Officer",
      profile: "Tobi Makinde is part of the marketing team at BUILD Nigeria. She is a Sophomore at Yale University studying sociology. Although she has schooled in the United States, she currently splits her time between the United States and Nigeria. She joined BUILD because of her drive for increasing educational equity and supporting people with their dreams. ",
    },
    {
      name: "Mary Odusami",
      img: Mary,
      role: "Student Experience Director",
      profile: "Mary Odusami is the officer of wellness programming for BUILD. She is from Lagos, Nigeria and is currently a Sophomore at USC that studies biology with a minor in sociology. Mary joined BUILD Nigeria because of her steadfast belief that an access to a quality education and support system can be the first step in someone approaching their full potential. She serves as a resource for the cohort through wellness programming as well as general build work.",
    },
    {
      name: "Ada Ezekobe",
      img: Ada,
      role: "Local Operations Director",
      profile: "Adaolisa Ezekobe is a third year student of the Pan-Atlantic University. She is a concerned Nigerian, an aspiring economist and a natural born leader who aims to be a change in any space she finds herself. She is currently a part of the Build Local team.",
    },
    {
      name: 'Odera Nweke',
      img: Odera,
      role: "Chief Outreach Officer",
      profile: "Odera Nweke is a second-year student at Yale university majoring in ecology and evolutionary biology on the pre-med track. He is also a long jumper on the Yale track and field team. When he is not in the classroom or on the track, he teaches Sunday school at St. Thomas Moore- the Yale Catholic Church. During this pandemic, he started volunteering as a crisis counselor for youth and young adults that struggle with mental health issues. Odera is am also passionate about equality and inclusion for all people, which is why he decided to get involved in BUILD Nigeria. He joined to help change the educational dynamic in Nigeria and give many students opportunities to be successful."
    },
    {
      name: "Love Akinlesi",
      img: Love,
      role: "Chief Tech. Officer",
      profile: "Love Akinlesi is the Chief Tech Officer at BUILD Nigeria. He is from Ogun State, Nigeria and he currently works as a Software Developer. He graduated with B.Eng. In Mechanical Engineering from Covenant University. Love is passionate about solving problems and causing social change by harnessing the power of technology. This fueled his drive to work with BUILD Nigeria to help support the young talents in Nigeria grow to their full potential and attain their dreams. ",
    },

  ];

  return (
    <section className="mx-auto" id="founding-team" >
     {members.length > 0 && <div className="flex justify-center items-center md:px-10 gap-6 mb-12">
        <h1 className="font-serif text-2xl sm:text-5xl mb-4 font-semibold">
          The Founding Team
        </h1>
      </div>}
      <div className="sm:px-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {members.map((member, i) => {
        return (
          <Person key={i} details={member} />
        )
       })}
      </div>
    </section>
  );
}
