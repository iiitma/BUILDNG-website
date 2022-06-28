import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";
import { HiX } from 'react-icons/hi';

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
          alt={details.name}
            className="rounded-full object-cover aspect-1 h-40 z-10"
            src={details.image.url}
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
                    alt="closeModal"
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
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch(`https://buildng-admin.herokuapp.com/board-members?_sort=id`)
      .then((response) => response.json())
      .then((resultData) => {
        setMembers(resultData);
      });
  }, []);

  return (
    <section className="mx-auto" id="advisory-board" >
     {members.length > 0 && <div className="flex justify-center items-center md:px-10 gap-6 mb-12">
        <h1 className="font-serif text-2xl sm:text-5xl mb-4 font-semibold">
         Advisory Board
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
