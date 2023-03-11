import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";
import { HiX } from 'react-icons/hi';

import Chinenye from "../assets/advisors/Chinenye.jpg"
import Ifeoma_Anyigbo from "../assets/advisors/Ifeoma_Anyigbo.jpg"
import Patrick_Utomi from "../assets/advisors/Patrick_Utomi.jpg"
import Opetunde from "../assets/advisors/Opetunde.jpg"

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
      <div className="group cursor-pointer text-center mb-12" role={"dialog"} onClick={openModal}>
        <div className="items-center flex justify-center relative">
          <div className="h-40 w-44 group-hover:border border-transparent group-hover:border-t-alt group-hover:bg-alt aspcet-1 rounded-full animate-spin absolute"></div>
          <img
            height={140}
            width={140}
          alt={details.name}
            className="rounded-full object-cover aspect-1 h-40 z-10"
            src={details.img}
          />
        </div>
        <h2 className="mt-2 text-xl font-serif">{details.name}</h2>
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
                      className="inline-flex justify-center border border-transparent bg-secondary p-2 rounded-full text-sm font-medium text-primary hover:bg-primary/50 "
                      onClick={closeModal}
                    >
                      <HiX/>
                    </button>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-3xl font-medium font-serif leading-6 text-gray-900"
                  >
                   {details.name}
                  </Dialog.Title>
                  <Dialog.Description className="text-sm text-primary">
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

export default function Advisors() {

  const members = [
    {
      name: "Patrick Okedinachi Utomi",
      img: Patrick_Utomi,
      profile: "Patrick Okedinachi Utomi is a Nigerian professor of political economy and management expert. As an entrepreneur he has founded companies that are active in fields including financial services, ICT, Media and Agriculture. Patrick Utomi became one of Nigeria’s top managers in Manufacturing, reaching a Presidential Advisory position at 27; earning two Master Degrees and a PhD at 26, a Professorship and global acknowledgement as a leading scholar in Business, Political Economy and Media Studies in his forties. He is an accomplished columnist, and chairman, BusinessDay Media Limited and creator of Patito’s Gang, a television talk show. He also belongs to many professional bodies. He is a member, Nigerian Institute of Public Relations, NIPR, Institute of Directors, IOD, Nigeria Economic Summit Group and Nigeria Economic Society. He coordinated the establishment of several civil society groups on good governance and accountability such as Transparency in Nigeria,The Centre for Values in Leadership, The Concerned Professionals, and the Restoration Group. He has served on the key apex private sector associations including the Lagos Chamber of Commerce and Industry (LCCI); The National Council of the Manufacturers Association of Nigeria; and the Nigeria Employers Consultative Association (NECA). He is active on the International speaking circuit, especially on the subjects of Growth economics, comparative development, Leadership, the Curse of Oil and China’s Economic surge and growing influence in Africa. He has collaborated fairly frequently with the centre for strategic and international studies (CSIS) in Washington, and Chatham House, in the UK. He has also written commissioned papers for the UKs DFID."
    },
    {
      name: "Chinenye Uwadileke",
      img: Chinenye,
      profile: "Chinenye Uwadileke has a Bachelor of Arts in Foreign Languages & Literatures from the University of Nigeria, Nsukka. During her studies, she spent one year studying abroad at L’Université de Pau et les Pays de L’Adour, Pau-France. Upon graduation, she did a certificate program at the GOETHE Institut in German Language. Chinenye then went on to earn a Masters in Public Administration in International Management from the Middlebury Institute of International Studies in Monterey, California and a certificate in College Advising from Teachers College, Columbia University. She is an International Fellow of the American Association of University Women. Chinenye has worked with the United States Consulate General, Lagos since 2005. Prior to becoming an EducationUSA Adviser in 2014, she managed various flagship U.S. Government exchange programs for nine years including the Fulbright & Hubert Humphrey Fellowship Program. She also maintained relationships with all the U.S. Mission’s higher education institutions in Southern Nigeria. Chinenye is a recipient of several State Department awards, has attended various training programs in her field and has visited over 30 U.S. higher education institutions. Having studied in the U.S. fully funded, she is passionate about working with students at all levels to achieve their academic and career goals. She is married to her college sweetheart and they are blessed with four children.",
    },
    {
      name: "Margaret Ifeoma Anyigbo",
      img: Ifeoma_Anyigbo,
      profile: "Mrs. Margaret Anyigbo completed her undergraduate and graduate degree program within the U.S educational system. She worked as an Education Adviser with the U.S. Consulate General, Lagos for over 15 years - an amazing opportunity to counsel students who got admitted to various universities in the United States and Canada. She has excellent knowledge of the U.S. educational system and has travelled widely within the U.S. visiting several schools. After her retirement from the U.S. Consulate in 2015, she set up Quelu Educational Advising Centre, Lagos. At Quelu, Margaret counsels parents and students interested in studying outside Nigeria. She is also part of the AIG Scholarship team working with applicants to navigate the application process for admission to Oxford University,  Blavatnik MPP program. "
    },
    {
      name: "Opetunde Adepoju",
      img: Opetunde,
      profile: "Opetunde's career spans across various sectors, including private and non-profit sectors. She currently works as a data scientist for a multinational organization. Prior to that, Ms. Opetunde worked as an education advocate for the marginalized with TheirWorld, where she served as a Global Youth Ambassador. Her work was recognized by the President Obama’s YALI initiative and was selected to become a YALI fellow in 2016. She volunteers to organize free coding workshops for girls and women to promote gender equality in tech. She was awarded a prestigious grant from Google for this. In 2018, she was recognized by Forbes as one of their 30 under 30 fellows in AI. She has been privileged to deliver talks at global and local conferences such as PyCon US, Global Google Community Developers Summit and PyCon Nigeria on subjects ranging from data science to non-technical talks on teamwork. Opetunde is passionate about Africa and its development especially in relation to education and economic empowerment."
    },
  ]

  return (
    <section className="mx-auto" id="advisory-board" >
     {members.length > 0 && <div className="flex justify-center items-center md:px-10 gap-6 mb-12">
        <h1 className="font-serif text-2xl sm:text-5xl mb-4 font-semibold">
         Advisory Board
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
