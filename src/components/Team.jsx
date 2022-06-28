import React from "react";
import { HiX } from "react-icons/hi";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";

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
          width="140" height="140"
            className="rounded-full object-cover aspect-1 h-40 z-10"
            src={details.image.url.replace('/image/upload', '/image/upload/w_300,f_auto').replace('.jpg', '.webp')}
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
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch(`https://buildng-admin.herokuapp.com/team-members?_sort=id`)
      .then((response) => response.json())
      .then((resultData) => {
        setMembers(resultData);
      });
  }, []);

  return (
    <section className="mx-auto" id="founding-team" >
     {members.length > 0 && <div className="flex justify-center items-center md:px-10 gap-6 mb-12">
        <h1 className="font-serif text-2xl sm:text-5xl mb-4 font-semibold">
          The Founding Team
        </h1>
      </div>}
      <div className="sm:px-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
       {members.map((member) => {
        return (
          <Person details={member} />
        )
       })}
      </div>
    </section>
  );
}
