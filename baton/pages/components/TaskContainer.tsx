import {Fragment, useState} from "react";
import TransitionBar from "./TransitionBar";
import TaskList from "./TaskList";

export default function ProcedureContainer() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-full">
      <TransitionBar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <TaskList />
    </div>
  );
}
