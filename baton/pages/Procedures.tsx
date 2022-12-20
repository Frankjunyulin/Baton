import {Fragment, useState} from "react";
import TransitionBar from "./components/TransitionBar";
import ProcedureList from "./components/ProcedureList";

export default function Procedures() {
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
