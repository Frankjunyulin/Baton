import {useState} from "react";
import {Bars3BottomLeftIcon} from "@heroicons/react/24/outline";
import {useRouter} from "next/router";
import Breadcrumbs from "./components/Breadcrumbs";
import TransitionBar from "./components/TransitionBar";

import dynamic from "next/dynamic";
const MilestoneSlideOver = dynamic(
  () => import("./components/MilestoneSlideOver"),
  {
    ssr: false,
  }
); //<- set SSr to false

const tasks = [
  {
    id: "1",
    title: "SO Document Upload",
    initials: "GA",
    team: "Operation",
    assignees: [
      {
        name: "Dries Vincent",
        handle: "driesvincent",
        imageUrl:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ],
    totalAssignees: 12,
    lastUpdated: "March 17, 2020",
  },
  {
    id: "2",
    title: "Create Microsoft",
    initials: "GA",
    team: "Engineering",
    assignees: [
      {
        name: "Bill Gates",
        handle: "driesvincent",
        imageUrl:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ],
    totalAssignees: 12,
    lastUpdated: "March 17, 2020",
  },
];

const breadTags = [
  {name: "Procedures", href: "/Procedures", current: false},
  {name: "Create a procedure", current: true},
];

type Props = {
  setProgressStep: (val: string) => void;
};

export default function ProcedureInformationCreate({setProgressStep}: Props) {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedStep, setSelectedStep] = useState(null);

  return (
    <>
      {selectedStep && (
        <MilestoneSlideOver
          selectedStep={selectedStep}
          setSelectedStep={setSelectedStep}
          hideTaskStatus={true}
        />
      )}
      <div className="flex min-h-full">
        <TransitionBar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <div className="flex w-0 flex-1 flex-col lg:pl-64">
          <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white">
            <button
              type="button"
              className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="flex flex-1 justify-between px-4">
              <div className="flex flex-1">
                <Breadcrumbs breadTags={breadTags} />
              </div>
            </div>
          </div>
          <main className="flex-1">
            <div className="py-8 xl:py-10">
              <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <form className="space-y-8 divide-y divide-gray-200">
                  <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                    <div className="space-y-6 sm:space-y-5">
                      <div>
                        <h3 className="text-3xl font-medium leading-6 text-gray-900">
                          Procedure
                        </h3>
                        <p className="mt-4 max-w-2xl text-sm text-gray-500">
                          This information will be displayed publicly so be
                          careful what you share.
                        </p>
                      </div>

                      <div className="space-y-6 sm:space-y-5">
                        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                          <label
                            htmlFor="p-name"
                            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                          >
                            Name
                          </label>
                          <div className="mt-1 sm:col-span-2 sm:mt-0">
                            <div className="flex max-w-lg rounded-md shadow-sm">
                              <input
                                type="text"
                                name="p-name"
                                id="p-name"
                                className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                          <label
                            htmlFor="p-description"
                            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                          >
                            Description
                          </label>
                          <div className="mt-1 sm:col-span-2 sm:mt-0">
                            <textarea
                              id="about"
                              name="about"
                              rows={3}
                              className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              defaultValue={""}
                            />
                            <p className="mt-2 text-sm text-gray-500">
                              Write description about your procedure.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6 pt-8 sm:space-y-5 sm:pt-10">
                      <div>
                        <h3 className="text-3xl font-medium leading-6 text-gray-900">
                          Milestones
                        </h3>
                        <p className="mt-4 max-w-2xl text-sm text-gray-500">
                          Define milestones of your procedure.
                        </p>
                      </div>
                      <div className="space-y-6 sm:space-y-5">
                        <div className="sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                          <h3 className="text-xl font-medium leading-6 text-gray-900">
                            Milestone 1
                          </h3>
                          <p className="mt-1 max-w-2xl text-sm text-gray-500">
                            Use a permanent address where you can receive mail.
                          </p>
                        </div>
                        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                          <label
                            htmlFor="m1-name"
                            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                          >
                            Name
                          </label>
                          <div className="mt-1 sm:col-span-2 sm:mt-0">
                            <input
                              type="text"
                              name="m1-name"
                              id="m1-name"
                              autoComplete="given-name"
                              className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                            />
                          </div>
                        </div>
                        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                          <label
                            htmlFor="m1-description"
                            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                          >
                            Description
                          </label>
                          <div className="mt-1 sm:col-span-2 sm:mt-0">
                            <textarea
                              id="m1-description"
                              name="m1-description"
                              rows={3}
                              className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              defaultValue={""}
                            />
                            <p className="mt-2 text-sm text-gray-500">
                              Write description about the milestone.
                            </p>
                          </div>
                        </div>
                        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                          <label
                            htmlFor="m1-t1-name"
                            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                          >
                            #Task 1 name
                          </label>
                          <div className="mt-1 sm:col-span-2 sm:mt-0">
                            <input
                              type="text"
                              name="m1-t1-name"
                              id="m1-t1-name"
                              autoComplete="given-name"
                              className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                            />
                          </div>
                        </div>
                        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-tsm:pt-5">
                          <label
                            htmlFor="m1-description"
                            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                          >
                            #Task 1 description
                          </label>
                          <div className="mt-1 sm:col-span-2 sm:mt-0">
                            <textarea
                              id="m1-description"
                              name="m1-description"
                              rows={3}
                              className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              defaultValue={""}
                            />
                            <p className="mt-2 text-sm text-gray-500">
                              Write description about the task.
                            </p>
                          </div>
                        </div>
                        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-tsm:pt-5">
                          <label
                            htmlFor="m1-description"
                            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                          >
                            #Task 1 assignee
                          </label>
                          <div className="mt-1 sm:col-span-2 sm:mt-0">
                            <input
                              type="text"
                              name="m1-t1-name"
                              id="m1-t1-name"
                              autoComplete="given-name"
                              className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6 divide-y divide-gray-200 pt-8 sm:space-y-5 sm:pt-10">
                      <div>
                        <h3 className="text-xl font-medium leading-6 text-gray-900">
                          Milestone 2
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                          We'll always let you know about important changes, but
                          you pick what else you want to hear about.
                        </p>
                      </div>
                      <div className="space-y-6 sm:space-y-5">
                        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                          <label
                            htmlFor="m2-name"
                            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                          >
                            Name
                          </label>
                          <div className="mt-1 sm:col-span-2 sm:mt-0">
                            <input
                              type="text"
                              name="m2-name"
                              id="m2-name"
                              className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                            />
                          </div>
                        </div>

                        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                          <label
                            htmlFor="m2-description"
                            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                          >
                            Description
                          </label>
                          <div className="mt-1 sm:col-span-2 sm:mt-0">
                            <textarea
                              id="m2-description"
                              name="m2-description"
                              rows={3}
                              className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              defaultValue={""}
                            />
                            <p className="mt-2 text-sm text-gray-500">
                              Write description about the milestone.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-5">
                    <div className="flex justify-end">
                      <button
                        type="button"
                        className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        onClick={() => {
                          router.push("/Procedures");
                        }}
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        onClick={() => {
                          setProgressStep("MilestonesDependencyCreate");
                        }}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
