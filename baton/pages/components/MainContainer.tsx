import {Fragment, useState} from "react";
import TransitionBar from "./TransitionBar";
import ProcedureList from "./ProcedureList";

export default function MainContainer() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-full">
      <TransitionBar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <ProcedureList />
    </div>
  );
}
