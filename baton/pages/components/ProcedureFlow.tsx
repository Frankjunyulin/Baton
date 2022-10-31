import {useCallback} from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  MarkerType,
} from "reactflow";
import "reactflow/dist/style.css";

const initialNodes = [
  {id: "1", position: {x: 200, y: 0}, data: {label: "Step 1"}},
  {id: "2", position: {x: 200, y: 100}, data: {label: "Step 2"}},
];

const initialEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    markerEnd: {
      type: MarkerType.Arrow,
    },
  },
];

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

  /*
  const reactFlowInstance = useReactFlow();
  const onClick = useCallback(() => {
    const id = `${++nodeId}`;
    const newNode = {
      id,
      position: {
        x: Math.random() * 500,
        y: Math.random() * 500,
      },
      data: {
        label: `Node ${id}`,
      },
    };
    reactFlowInstance.addNodes(newNode);
  }, []);
  */

  return (
    <div style={{height: 400}}>
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
