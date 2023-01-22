import {useState} from "react";
import ProcedureInformationCreate from "./ProcedureInformationCreate";
import MilestonesDependencyCreate from "./MilestonesDependencyCreate";
import ProcedureTasksCreate from "./ProcedureTasksCreate";

export default function ProcedureCreate() {
  const [progressStep, setProgressStep] = useState(
    "ProcedureInformationCreate"
  );

  switch (progressStep) {
    case "ProcedureInformationCreate": {
      return <ProcedureInformationCreate setProgressStep={setProgressStep} />;
    }
    case "MilestonesDependencyCreate": {
      return <MilestonesDependencyCreate setProgressStep={setProgressStep} />;
    }
    default: {
      return <ProcedureTasksCreate setProgressStep={setProgressStep} />;
    }
  }
}
