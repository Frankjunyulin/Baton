import {Fragment, useState} from "react";
import {Dialog, Menu, Transition} from "@headlessui/react";
// import Link from "next/link";
import {Link} from "@mui/material";
import {
  Bars3CenterLeftIcon,
  Bars4Icon,
  ClockIcon,
  HomeIcon,
  XMarkIcon,
  FolderIcon,
  BookOpenIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronRightIcon,
  ChevronUpDownIcon,
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import TransitionBar from "./TransitionBar";

const tasks = [
  {
    id: 1,
    title: "Download attachment document",
    initials: "GA",
    team: "Operation",
    milestone: "Extract SO",
    link: "/TaskDetails",
    assignees: [
      {
        name: "Dries Vincent",
        handle: "driesvincent",
        imageUrl:
          "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
      },
    ],
    totalAssignees: 1,
    lastUpdated: "August 10, 2022",
    pinned: true,
    bgColorClass: "bg-pink-600",
  },
  {
    id: 6,
    title: "Extract SO number from document",
    initials: "GA",
    team: "Operation",
    milestone: "Extract SO",
    link: "/TaskDetails",
    assignees: [
      {
        name: "Dries Vincent",
        handle: "driesvincent",
        imageUrl:
          "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
      },
    ],
    totalAssignees: 1,
    lastUpdated: "August 10, 2022",
    pinned: true,
    bgColorClass: "bg-pink-600",
  },
  {
    id: 2,
    title: "Find shipment by SO number",
    initials: "GA",
    team: "Operation",
    milestone: "Find shipment",
    link: "/TaskDetails",
    assignees: [
      {
        name: "Lindsay Walton",
        handle: "lindsaywalton",
        imageUrl:
          "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
      },
    ],
    totalAssignees: 1,
    lastUpdated: "August 17, 2022",
    pinned: true,
    bgColorClass: "bg-pink-600",
  },
  {
    id: 3,
    title: "Digitize SO",
    initials: "GA",
    team: "Operation",
    milestone: "Digitize SO",
    link: "/TaskDetails",
    assignees: [
      {
        name: "Courtney Henry",
        handle: "courtneyhenry",
        imageUrl:
          "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
      },
    ],
    totalAssignees: 1,
    lastUpdated: "August 17, 2022",
    pinned: true,
    bgColorClass: "bg-pink-600",
  },
  {
    id: 4,
    title: "Notify to shipment OSO",
    initials: "GA",
    team: "Operation",
    milestone: "Release SO",
    link: "/TaskDetails",
    assignees: [
      {
        name: "Tom Cook",
        handle: "tomcook",
        imageUrl:
          "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
      },
    ],
    totalAssignees: 1,
    lastUpdated: "November 17, 2022",
    pinned: true,
    bgColorClass: "bg-pink-600",
  },
  {
    id: 5,
    title: "OSO release SO to shipper",
    initials: "GA",
    team: "Operation",
    milestone: "Release SO",
    link: "/TaskDetails",
    assignees: [
      {
        name: "Dries Vincent",
        handle: "driesvincent",
        imageUrl:
          "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
      },
    ],
    totalAssignees: 1,
    lastUpdated: "July 17, 2022",
    pinned: true,
    bgColorClass: "bg-pink-600",
  },
  // More tasks...
];
const pinnedTasks = tasks.filter((task) => task.pinned);

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function TaskList() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [taskList, setTaskList] = useState(tasks);

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      {/*<div className="min-h-full">
        <TransitionBar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
    /> */}
      {/* Main column */}
      <div className="flex flex-col lg:pl-64">
        {/* Search header */}
        <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white lg:hidden">
          <button
            type="button"
            className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3CenterLeftIcon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex flex-1 justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex flex-1">
              <form className="flex w-full md:ml-0" action="#" method="GET">
                <label htmlFor="search-field" className="sr-only">
                  Search
                </label>
                <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                    <MagnifyingGlassIcon
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    id="search-field"
                    name="search-field"
                    className="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
                    placeholder="Search"
                    type="search"
                  />
                </div>
              </form>
            </div>
            <div className="flex items-center">
              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-3">
                <div>
                  <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({active}) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            View profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({active}) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({active}) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Notifications
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                    <div className="py-1">
                      <Menu.Item>
                        {({active}) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Get desktop app
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({active}) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Support
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                    <div className="py-1">
                      <Menu.Item>
                        {({active}) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Logout
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
        <main className="flex-1">
          {/* Page title & actions */}
          <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <div className="flex flex-1">
              <form className="flex w-full lg:ml-0" action="#" method="GET">
                <label htmlFor="search-field" className="sr-only">
                  Search
                </label>
                <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                    <MagnifyingGlassIcon
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    id="search-field"
                    className="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
                    placeholder="Search"
                    type="search"
                    name="search"
                  />
                </div>
              </form>
            </div>
            <div className="mt-4 flex sm:mt-0 sm:ml-4">
              <button
                type="button"
                className="order-0 inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:order-1 sm:ml-3"
                onClick={() => {
                  setCreateModalOpen(true);
                }}
              >
                Create
              </button>
            </div>
          </div>
          {/* Tasks list (only on smallest breakpoint) */}
          <div className="mt-10 sm:hidden">
            <div className="px-4 sm:px-6">
              <h2 className="text-sm font-medium text-gray-900">Tasks</h2>
            </div>
            <ul
              role="list"
              className="mt-3 divide-y divide-gray-100 border-t border-gray-200"
            >
              {taskList.map((task) => (
                <li key={task.id}>
                  <a
                    href="#"
                    className="group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6"
                  >
                    <span className="flex items-center space-x-3 truncate">
                      <span
                        className={classNames(
                          task.bgColorClass,
                          "w-2.5 h-2.5 flex-shrink-0 rounded-full"
                        )}
                        aria-hidden="true"
                      />
                      <span className="truncate text-sm font-medium leading-6">
                        {task.title}{" "}
                        <span className="truncate font-normal text-gray-500">
                          in {task.team}
                        </span>
                      </span>
                    </span>
                    <ChevronRightIcon
                      className="ml-4 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tasks table (small breakpoint and up) */}
          <div className="mt-8 hidden sm:block">
            <div className="inline-block min-w-full border-b border-gray-200 align-middle">
              <table className="min-w-full">
                <thead>
                  <tr className="border-t border-gray-200">
                    <th
                      className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
                      scope="col"
                    >
                      <span className="lg:pl-2">Task</span>
                    </th>
                    <th
                      className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
                      scope="col"
                    >
                      Procedure
                    </th>
                    <th
                      className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
                      scope="col"
                    >
                      Milestone
                    </th>
                    <th
                      className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
                      scope="col"
                    >
                      Assignee
                    </th>
                    <th
                      className="hidden border-b border-gray-200 bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900 md:table-cell"
                      scope="col"
                    >
                      Last updated
                    </th>
                    <th
                      className="border-b border-gray-200 bg-gray-50 py-3 pr-6 text-right text-sm font-semibold text-gray-900"
                      scope="col"
                    />
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  {taskList.map((task) => (
                    <tr key={task.id}>
                      <td className="w-full max-w-0 whitespace-nowrap px-6 py-3 text-sm font-medium text-gray-900">
                        <div className="flex items-center space-x-3 lg:pl-2">
                          <div
                            className={classNames(
                              task.bgColorClass,
                              "flex-shrink-0 w-2.5 h-2.5 rounded-full"
                            )}
                            aria-hidden="true"
                          />
                          <Link
                            href="/TaskDetails"
                            underline="none"
                            className="font-medium text-gray-900 hover:text-gray-600"
                          >
                            <span>
                              {task.title}{" "}
                              <span className="font-normal text-gray-500">
                                in {task.team}
                              </span>
                            </span>
                          </Link>
                        </div>
                      </td>
                      <td className="hidden whitespace-nowrap px-6 py-3 text-right text-sm text-gray-500 md:table-cell">
                        <Link
                          href="/components/ProcedureDetails"
                          underline="none"
                          className="font-medium text-gray-900 hover:text-gray-600"
                        >
                          Upload and digitize SO
                        </Link>
                      </td>
                      <td className="hidden whitespace-nowrap px-6 py-3 text-right text-sm text-gray-500 md:table-cell">
                        {task.milestone}
                      </td>
                      <td className="px-6 py-3 text-sm font-medium text-gray-500">
                        <div className="flex items-center space-x-2">
                          <div className="flex flex-shrink-0 -space-x-1">
                            {task.assignees.map((assignee) => (
                              <img
                                key={assignee.handle}
                                className="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                                src={assignee.imageUrl}
                                alt={assignee.name}
                              />
                            ))}
                          </div>
                          {task.totalAssignees > task.assignees.length ? (
                            <span className="flex-shrink-0 text-xs font-medium leading-5">
                              +{task.totalAssignees - task.assignees.length}
                            </span>
                          ) : null}
                        </div>
                      </td>
                      <td className="hidden whitespace-nowrap px-6 py-3 text-right text-sm text-gray-500 md:table-cell">
                        {task.lastUpdated}
                      </td>
                      <td className="whitespace-nowrap px-6 py-3 text-right text-sm font-medium">
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
      {/*</div>*/}
    </>
  );
}
