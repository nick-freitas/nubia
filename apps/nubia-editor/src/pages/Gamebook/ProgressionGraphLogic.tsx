import * as go from 'gojs';

const initDiagram = () => {
  const $ = go.GraphObject.make;
  // set your license key here before creating the diagram: go.Diagram.licenseKey = "...";
  const diagram = $(go.Diagram, {
    'undoManager.isEnabled': true, // must be set to allow for model change listening
    // 'undoManager.maxHistoryLength': 0,  // uncomment disable undo/redo functionality
    'clickCreatingTool.archetypeNodeData': {
      text: 'new node',
      color: 'lightblue',
    },
    model: $(go.GraphLinksModel, {
      linkKeyProperty: 'key', // IMPORTANT! must be defined for merges and data sync when using GraphLinksModel
    }),
  });

  // define a simple Node template
  diagram.nodeTemplate = $(
    go.Node,
    'Auto', // the Shape will go around the TextBlock
    new go.Binding('location', 'loc', go.Point.parse).makeTwoWay(
      go.Point.stringify
    ),
    $(
      go.Shape,
      'RoundedRectangle',
      { name: 'SHAPE', fill: 'white', strokeWidth: 0 },
      // Shape.fill is bound to Node.data.color
      new go.Binding('fill', 'color')
    ),
    $(
      go.TextBlock,
      { margin: 8, editable: true }, // some room around the text
      new go.Binding('text').makeTwoWay()
    )
  );

  // define a simple Node template
  diagram.linkTemplate = $(
    go.Link,
    $(go.Shape),
    $(go.Shape, { toArrow: 'Standard' }),
    $(
      go.Panel,
      'Auto', // this whole Panel is a link label
      $(go.Shape, 'RoundedRectangle', { fill: 'yellow', stroke: 'gray' }),
      $(go.TextBlock, { margin: 3 }, new go.Binding('text', 'text'))
    )
  );

  return diagram;
};

const useDiagram = () => ({ initDiagram });

export default useDiagram;
