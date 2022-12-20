import {Fragment, useState} from "react";
import {Dialog, Menu, Transition} from "@headlessui/react";
import {
  ArchiveBoxIcon,
  Bars3BottomLeftIcon,
  Bars4Icon,
  ClockIcon,
  HomeIcon,
  UserCircleIcon as UserCircleIconOutline,
  XMarkIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import {
  BellIcon,
  CalendarIcon,
  ChatBubbleLeftEllipsisIcon,
  CheckCircleIcon,
  LockOpenIcon,
  MagnifyingGlassIcon,
  PencilIcon,
  TagIcon,
  FolderIcon,
  BookOpenIcon,
  UserCircleIcon as UserCircleIconMini,
} from "@heroicons/react/20/solid";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "reactflow";

import Breadcrumbs from "./Breadcrumbs";
// import ProcedureFlow from "./ProcedureFlow";
import StepDropdown from "./StepDropdown";
// import StepSlideOver from "./StepSlideOver";
import TransitionBar from "./TransitionBar";
import Tabs from "./Tabs";

import dynamic from "next/dynamic";
const ProcedureFlow = dynamic(() => import("./ProcedureFlow"), {ssr: false}); //<- set SSr to false
const MilestoneSlideOver = dynamic(() => import("./MilestoneSlideOver"), {
  ssr: false,
}); //<- set SSr to false

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
    lastUpdated: "Nov 17, 2022",
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
    lastUpdated: "Nov 17, 2022",
  },
];

const breadTags = [
  {name: "Procedures", href: "/Procedures", current: false},
  {
    name: "Upload and digitize SO",
    href: "/components/ProcedureDetails",
    current: false,
  },
  {name: "Upload and digitize SO - 31540", current: true},
];

const initialNodes = [
  {id: "1", position: {x: 0, y: 0}, data: {label: "Input Node"}},
  {id: "2", position: {x: 0, y: 100}, data: {label: "output Node"}},
];

const initialEdges = [{id: "e1-2", source: "1", target: "2"}];

export default function ProcedureInstanceDetails() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedStep, setSelectedStep] = useState(null);

  return (
    <>
      {selectedStep && (
        <MilestoneSlideOver
          selectedStep={selectedStep}
          setSelectedStep={setSelectedStep}
          hideTaskStatus={false}
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
                <div className="xl:col-span-2 xl:border-r xl:border-gray-200 xl:pr-8">
                  <div>
                    <div>
                      <div className="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6">
                        <div>
                          <h1 className="text-2xl font-bold text-gray-900">
                            Upload and digitize SO - 31540
                          </h1>
                          <p className="mt-2 text-sm text-gray-500">
                            #400 Created by{" "}
                            <a href="#" className="font-medium text-gray-900">
                              Hilary Mahy
                            </a>
                          </p>
                        </div>
                        <div className="mt-4 flex space-x-3 md:mt-0">
                          <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                          >
                            <PencilIcon
                              className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                            <span>Edit</span>
                          </button>
                          <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                          >
                            <BellIcon
                              className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                            <span>Subscribe</span>
                          </button>
                        </div>
                      </div>
                      <div className="py-3 xl:pt-6 xl:pb-0">
                        <h2 className="sr-only">Description</h2>
                        <div className="prose max-w-none">
                          <p>
                            An instance Upload and digitize SO whose ID is
                            31540.
                          </p>
                          <p>SO document upload.</p>
                          <ul role="list">
                            <li>Upload SO document and digitize it.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <section
                    aria-labelledby="activity-title"
                    className="mt-8 xl:mt-10"
                  >
                    <div>
                      <div className="divide-y divide-gray-200">
                        <div className="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b">
                          <div className="pb-4">
                            <h2
                              id="activity-title"
                              className="text-lg font-medium text-gray-900"
                            >
                              Milestones
                            </h2>
                          </div>
                          {/*<Tabs></Tabs>*/}
                          <StepDropdown />
                        </div>
                        <div className="pt-6">
                          {/* Activity feed*/}
                          <ProcedureFlow
                            steps={tasks}
                            setSelectedStep={setSelectedStep}
                          />
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
