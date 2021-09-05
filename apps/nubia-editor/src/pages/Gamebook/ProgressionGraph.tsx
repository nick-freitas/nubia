import './ProgressionGraph.css';
import { ReactDiagram } from 'gojs-react';
import { useEffect, useState } from 'react';
import ProgressionModel from '../../models/Progression.model';
import DebugPrintObject from '../../core-components/DebugPrintObject';
import ChapterModel from '../../models/Chapter.model';
import useDiagram from './ProgressionGraphLogic';

interface ProgressionGraphProps {
  progressions: ProgressionModel[];
  chapters: ChapterModel[];
}

const handleModelChange = (changes: any) => {
  // eslint-disable-next-line no-console
  console.log(changes);
};

const ProgressionGraph = (props: ProgressionGraphProps) => {
  type IState = {
    graph: {
      nodes: any[];
      edges: any[];
    };
    selected: any;
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, setState] = useState<IState>({
    graph: {
      nodes: [],
      edges: [],
    },
    selected: {},
  });

  useEffect(() => {
    const nodes =
      props.chapters?.map((chapter: ChapterModel) => ({
        key: chapter.id,
        text: chapter.title,
        color: 'lightblue',
        loc: `${chapter.id * 150} ${chapter.id * 150}`,
      })) || [];

    const edges =
      props.progressions.map((progression: ProgressionModel) => ({
        key: progression.id,
        from: progression.sourceChapterId,
        to: progression.destinationChapterId,
        text: progression.descriptor,
      })) || [];

    return setState((currentState: IState) => ({
      ...currentState,
      graph: { nodes, edges },
    }));
  }, [props.progressions, props.chapters]);

  const { initDiagram } = useDiagram();

  return (
    <div className="flex flex-col" style={{ height: '40rem' }}>
      <ReactDiagram
        initDiagram={initDiagram}
        divClassName="diagram-component"
        nodeDataArray={state?.graph?.nodes}
        linkDataArray={state?.graph?.edges}
        onModelChange={handleModelChange}
        skipsDiagramUpdate={false}
      />
      <DebugPrintObject>{props.progressions}</DebugPrintObject>
    </div>
  );
};

export default ProgressionGraph;
