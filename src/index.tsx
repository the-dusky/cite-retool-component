import React from 'react'
import { type FC } from 'react'

import { Retool } from '@tryretool/custom-component-support'

import VisGraph, {
  GraphData,
  GraphEvents,
  Options,
} from 'react-vis-graph-wrapper';



export const CiteGraph: FC = () => {
  const [name, _setName] = Retool.useStateString({
    name: 'name'
  })

  const [datas, setdatas] = Retool.useStateObject({
    name: 'datas',
    initialValue: {
      nodes: [
        { id: 1, label: 'Node 1', title: 'node 1 tootip text' },
        { id: 2, label: 'Node 2', title: 'node 2 tootip text' },
        { id: 3, label: 'Node 3', title: 'node 3 tootip text' },
        { id: 4, label: 'Node 4', title: 'node 4 tootip text' },
        { id: 5, label: 'Node 5', title: 'node 5 tootip text' },
      ],
      edges: [
        { from: 1, to: 2 },
        { from: 1, to: 3 },
        { from: 2, to: 4 },
        { from: 2, to: 5 },
      ],
    }
  })
   

  const graph = datas;

  const options: Options = {
    layout: {
      hierarchical: true,
    },
    edges: {
      color: '#000000',
    },
    height: '500px',
  };
  
  const events: GraphEvents = {
    select: (event: any) => {
      const { nodes, edges } = event;
      console.log(nodes, edges);
    },
  };

  return (
      <VisGraph
        graph={graph as any}
        options={options}
        events={events}
      />
  );
}
