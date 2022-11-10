import {Fragment, useState} from "react";
import {Dialog, Transition} from "@headlessui/react";
import {CheckIcon} from "@heroicons/react/24/outline";

type Props = {
  isCreateModalOpen: boolean;
  setCreateModalOpen: (val: boolean) => void;
  // @ts-ignore: Unreachable code error
  procedureList: Any;
  // @ts-ignore: Unreachable code error
  setProcedureList: (val: list<Any>) => void;
};

export default function ProcedureCreate({
  isCreateModalOpen,
  setCreateModalOpen,
  procedureList,
  setProcedureList,
}: Props) {
  const [taskName, setTaskName] = useState("");

  return (
    <Transition.Root show={true} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => {
          setCreateModalOpen(false);
        }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity">
            {" "}
          </div>
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div>
                  {/*form----------- */}
                  <form className="space-y-6" action="#" method="POST">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <div className="mt-1">
                        <input
                          id="name"
                          type="text"
                          name="name"
                          onChange={(event) => setTaskName(event.target.value)}
                          required
                          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
                        onClick={() => {
                          setCreateModalOpen(false);
                          setProcedureList([
                            ...procedureList,
                            {
                              id:
                                procedureList[procedureList.length - 1].id + 1,
                              title: taskName,
                              initials: "GA",
                              team: "Engineering",
                              assignees: [],
                              totalAssignees: 12,
                              lastUpdated: "March 17, 2020",
                              pinned: true,
                              bgColorClass: "bg-pink-600",
                            },
                          ]);
                        }}
                      >
                        Create
                      </button>
                    </div>
                  </form>
                  {/*form----------- */}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
