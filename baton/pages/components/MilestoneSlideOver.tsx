/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import {Fragment, useState} from "react";
// import Link from "next/link";
import {Link} from "@mui/material";
import {Dialog, Transition} from "@headlessui/react";
import {XMarkIcon} from "@heroicons/react/24/outline";

import {
  LinkIcon,
  PlusIcon,
  QuestionMarkCircleIcon,
  LockOpenIcon,
} from "@heroicons/react/20/solid";

const team = [
  {
    name: "Floyd Miles",
    email: "floy.dmiles@example.com",
    href: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Emily Selman",
    email: "emily.selman@example.com",
    href: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

type Props = {
  selectedStep: any;
  setSelectedStep: (val: any) => void;
  hideTaskStatus: boolean;
};

export default function MilestoneSlideOver({
  selectedStep,
  setSelectedStep,
  hideTaskStatus,
}: Props) {
  // console.log(selectedStep);

  return (
    <div>
      <Transition.Root show={selectedStep != null} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => {
            setSelectedStep(null);
            // console.log(selectedStep);
          }}
        >
          <div className="fixed inset-0" />

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <form className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
                      <div className="h-0 flex-1 overflow-y-auto">
                        <div className="flex flex-1 flex-col justify-between">
                          <div className="divide-y divide-gray-200 px-4 sm:px-6">
                            <div className="space-y-6 pt-6 pb-5">
                              <div>
                                <h1
                                  id="slide-over-heading"
                                  className="text-lg font-medium text-gray-900"
                                >
                                  Extract SO number
                                </h1>
                              </div>
                              <div>
                                <label
                                  htmlFor="description"
                                  className="block text-sm font-medium text-gray-900"
                                >
                                  Description
                                </label>
                                <div className="mt-1">
                                  <textarea
                                    id="description"
                                    name="description"
                                    rows={4}
                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    defaultValue={
                                      "Download SO document and extract SO number from it."
                                    }
                                  />
                                </div>
                              </div>
                              <div>
                                <h3 className="text-sm font-medium text-gray-900">
                                  Assignees
                                </h3>
                                <div className="mt-2">
                                  <div className="flex space-x-2">
                                    {team.map((person) => (
                                      <a
                                        key={person.email}
                                        href={person.href}
                                        className="rounded-full hover:opacity-75"
                                      >
                                        <img
                                          className="inline-block h-8 w-8 rounded-full"
                                          src={person.imageUrl}
                                          alt={person.name}
                                        />
                                      </a>
                                    ))}
                                    <button
                                      type="button"
                                      className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2 border-dashed border-gray-200 bg-white text-gray-400 hover:border-gray-300 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                      <span className="sr-only">
                                        Add team member
                                      </span>
                                      <PlusIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <fieldset>
                                <legend className="text-sm font-medium text-gray-900">
                                  Tasks
                                </legend>
                                <div className="mt-2 space-y-5">
                                  <div className="relative flex items-start">
                                    {!hideTaskStatus && (
                                      <div className="flex h-5 items-center pr-2">
                                        <LockOpenIcon
                                          className="h-5 w-5 text-green-500"
                                          aria-hidden="true"
                                        />
                                      </div>
                                    )}

                                    <div className="text-sm">
                                      <Link
                                        href="/TaskDetails"
                                        underline="none"
                                        className="font-medium text-gray-900 hover:text-gray-600"
                                      >
                                        Download attachment
                                      </Link>
                                      <p
                                        id="privacy-public-description"
                                        className="text-gray-500"
                                      >
                                        Download SO document from email
                                        attachment
                                      </p>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="relative flex items-start">
                                      {!hideTaskStatus && (
                                        <div className="flex h-5 items-center pr-2">
                                          <LockOpenIcon
                                            className="h-5 w-5 text-green-500"
                                            aria-hidden="true"
                                          />
                                        </div>
                                      )}
                                      <div className="text-sm">
                                        <Link
                                          href="/TaskDetails"
                                          underline="none"
                                          className="font-medium text-gray-900 hover:text-gray-600"
                                        >
                                          Extract SO number from SO document
                                        </Link>
                                        <p
                                          id="privacy-public-description"
                                          className="text-gray-500"
                                        >
                                          SO number is in the SO document.
                                          Extract it from the document.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </fieldset>
                            </div>
                            <div className="pt-4 pb-6">
                              <div className="flex text-sm">
                                <a
                                  href="#"
                                  className="group inline-flex items-center font-medium text-indigo-600 hover:text-indigo-900"
                                >
                                  <LinkIcon
                                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-900"
                                    aria-hidden="true"
                                  />
                                  <span className="ml-2">Copy link</span>
                                </a>
                              </div>
                              <div className="mt-4 flex text-sm">
                                <a
                                  href="#"
                                  className="group inline-flex items-center text-gray-500 hover:text-gray-900"
                                >
                                  <QuestionMarkCircleIcon
                                    className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                    aria-hidden="true"
                                  />
                                  <span className="ml-2">
                                    Learn more about sharing
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-shrink-0 justify-end px-4 py-4">
                        <button
                          type="button"
                          className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          onClick={() => {
                            setSelectedStep(null);
                            // console.log(selectedStep);
                          }}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="ml-4 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          Save
                        </button>
                      </div>
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
