import { Dialog, Transition } from '@headlessui/react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { Fragment } from 'react'
import { HiX } from 'react-icons/hi';

const JoinOurTeamPopUp = () => {

    const [isOpen, setIsOpen] = React.useState(true);

    const closeModal = () => {
        setIsOpen(false);
        sessionStorage.setItem('hideJoinTeamPopup', 'true');
    }

    React.useEffect(() => {
        const hideJoinTeamPopup = sessionStorage.getItem('hideJoinTeamPopup');
        console.log("🚀 ~ file: JoinOurTeamPopUp.jsx:18 ~ React.useEffect ~ hideJoinTeamPopup:", !!hideJoinTeamPopup)
        setIsOpen(hideJoinTeamPopup !== 'true')
    }, [])

    return (
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
                    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-[2px]" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center px-4 py-8 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl p-0 bg-white text-left align-middle shadow-xl transition-all">
                                <div className="absolute right-4 top-6 z-10">
                                    <button
                                        aria-label="Close Modal"
                                        type="button"
                                        className="inline-flex justify-center rounded-full border border-transparent bg-secondary p-2 text-sm font-medium text-primary hover:bg-primary/50 "
                                        onClick={closeModal}
                                    >
                                        <HiX />
                                    </button>
                                </div>

                                <div className="flex flex-col sm:flex-row">
                                    <StaticImage src="../assets/webp/indaba.webp" className='w-full' alt="" />
                                    <div className="px-8 pb-12 pt-12 sm:pt-32 text-center mx-auto w-full">
                                        <Dialog.Title
                                            as="h3"
                                            className="text-3xl sm:text-5xl font-serif leading-6 text-gray-900 font-bold"
                                        >
                                            Join Our Team
                                        </Dialog.Title>
                                        <Dialog.Description className="text-base sm:text-xl text-center mt-8 max-w-md mx-auto w-full">
                                            We are hiring a full time paid Associate Director. Click below to learn more.
                                        </Dialog.Description>

                                        <Link to="/join-our-team" onClick={() => sessionStorage.setItem('hideJoinTeamPopup', 'true')} className="btn btn-lg bg-black text-center w-full text-white gap-2 mt-16 mx-auto ">
                                            <span className='text-center mx-auto'>Join Our Team</span>
                                        </Link>
                                    </div>

                                </div>

                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default JoinOurTeamPopUp