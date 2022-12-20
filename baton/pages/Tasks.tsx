import {Fragment, useState} from "react";
import TransitionBar from "./components/TransitionBar";
import TaskList from "./components/TaskList";

export default function Tasks() {
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
