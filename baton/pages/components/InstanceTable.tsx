import {Fragment} from "react";
import {Menu, Transition} from "@headlessui/react";
import {
  ArchiveBoxIcon,
  ArrowRightCircleIcon,
  ChevronDownIcon,
  DocumentDuplicateIcon,
  HeartIcon,
  PencilSquareIcon,
  TrashIcon,
  UserPlusIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";

const instances = [
  {
    id: 1,
    title: "Upload and digitize SO - 31540",
    initials: "GA",
    team: "Operation",
    link: "/components/ProcedureInstanceDetails",
    assignees: [
      {
        name: "Dries Vincent",
        handle: "driesvincent",
        imageUrl:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        name: "Lindsay Walton",
        handle: "lindsaywalton",
        imageUrl:
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        name: "Courtney Henry",
        handle: "courtneyhenry",
        imageUrl:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        name: "Tom Cook",
        handle: "tomcook",
        imageUrl:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ],
    totalAssignees: 12,
    lastUpdated: "March 17, 2020",
    pinned: true,
    bgColorClass: "bg-pink-600",
  },
  // More instances...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function InstanceTable() {
  return (
    <div className="mt-8 hidden sm:block">
      <div className="inline-block min-w-full border-b border-gray-200 align-middle">
        <table className="min-w-full">
          <thead>
            <tr className="border-t border-gray-200">
              <th
                className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
                scope="col"
              >
                <span className="lg:pl-2">Instance</span>
              </th>
              <th
                className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
                scope="col"
              >
                Assignees
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
            {instances.map((instance) => (
              <tr key={instance.id}>
                <td className="w-full max-w-0 whitespace-nowrap px-6 py-3 text-sm font-medium text-gray-900">
                  <div className="flex items-center space-x-3 lg:pl-2">
                    <div
                      className={classNames(
                        instance.bgColorClass,
                        "flex-shrink-0 w-2.5 h-2.5 rounded-full"
                      )}
                      aria-hidden="true"
                    />
                    <Link
                      href={{
                        pathname: "/components/ProcedureInstanceDetails",
                        query: {id: instance.id},
                      }}
                      className="font-medium text-gray-900 hover:text-gray-600"
                    >
                      <span>
                        {instance.title}{" "}
                        <span className="font-normal text-gray-500">
                          in {instance.team}
                        </span>
                      </span>
                    </Link>
                  </div>
                </td>
                <td className="px-6 py-3 text-sm font-medium text-gray-500">
                  <div className="flex items-center space-x-2">
                    <div className="flex flex-shrink-0 -space-x-1">
                      {instance.assignees.map((assignee) => (
                        <img
                          key={assignee.handle}
                          className="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                          src={assignee.imageUrl}
                          alt={assignee.name}
                        />
                      ))}
                    </div>
                    {instance.totalAssignees > instance.assignees.length ? (
                      <span className="flex-shrink-0 text-xs font-medium leading-5">
                        +{instance.totalAssignees - instance.assignees.length}
                      </span>
                    ) : null}
                  </div>
                </td>
                <td className="hidden whitespace-nowrap px-6 py-3 text-right text-sm text-gray-500 md:table-cell">
                  {instance.lastUpdated}
                </td>
                <td className="whitespace-nowrap px-6 py-3 text-right text-sm font-medium">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">
                    Edit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}