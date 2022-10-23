import {useCallback} from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "reactflow";
import "reactflow/dist/style.css";

const initialNodes = [
  {id: "1", position: {x: 0, y: 0}, data: {label: "Input Node"}},
  {id: "2", position: {x: 0, y: 100}, data: {label: "output Node"}},
];

const initialEdges = [{id: "e1-2", source: "1", target: "2"}];

type Props = {
  steps: any;
  setSelectedStep: (val: any) => void;
};

export default function ProcedureFlow({steps, setSelectedStep}: Props) {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // console.log(nodes);
  // console.log(onNodesChange);

  // console.log(nodes);

  /*
  const selectedNodes = nodes.filter((node) => node.selected === true);
  if (selectedNodes.length > 0) {
    const selectedsteps = steps.filter(
      (step) => step.id === selectedNodes[0].id
    );
    if (selectedsteps.length > 0) {
      setSelectedStep(selectedsteps[0]);
    }
  }
  */

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div style={{height: 800}}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={(val) => {
          onNodesChange(val);
          const selectedNodes = nodes.filter((node) => node.selected === true);
          if (selectedNodes.length > 0) {
            const selectedsteps = steps.filter(
              (step) => step.id === selectedNodes[0].id
            );
            if (selectedsteps.length > 0) {
              setSelectedStep(selectedsteps[0]);
            }
          }
        }}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}
