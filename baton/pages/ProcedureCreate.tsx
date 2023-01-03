import {useState} from "react";
import ProcedureInformationCreate from "./ProcedureInformationCreate";
import MilestonesDependencyCreate from "./MilestonesDependencyCreate";

export default function ProcedureCreate() {
  const [progressStep, setProgressStep] = useState(
    "ProcedureInformationCreate"
  );

  return progressStep === "ProcedureInformationCreate" ? (
    <ProcedureInformationCreate setProgressStep={setProgressStep} />
  ) : (
    <MilestonesDependencyCreate setProgressStep={setProgressStep} />
  );
}
