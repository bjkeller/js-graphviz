'use strict';

var s = new sigma({
  container: 'graph-container'
});

s.graph.read({
    nodes: [
      { id: 'n1', label: 'ANK3', size:1, x:Math.random(), y:Math.random() },
      { id: 'n2', label: 'SCN2A', size:1, x:Math.random(), y:Math.random() },
      { id: 'n3', label: 'FADD', size:1, x:Math.random(), y:Math.random() },
      { id: 'n4', label: 'FAS', size:1, x:Math.random(), y:Math.random() },
      { id: 'n5', label: 'SCNN1B', size:1, x:Math.random(), y:Math.random() },
      { id: 'n6', label: 'CNTN1', size:1, x:Math.random(), y:Math.random() },
      { id: 'n7', label: 'SCN1B', size:1, x:Math.random(), y:Math.random() },
      { id: 'n8', label: 'KCNC1', size:1, x:Math.random(), y:Math.random() },
      { id: 'n9', label: 'KCNC2', size:1, x:Math.random(), y:Math.random() },
      { id: 'n10', label: 'CRKL', size:1, x:Math.random(), y:Math.random() },
      { id: 'n11', label: 'PIK3R1', size:1, x:Math.random(), y:Math.random() },
      { id: 'n12', label: 'HOOK1', size:1, x:Math.random(), y:Math.random() },
      { id: 'n13', label: 'SMAD2', size:1, x:Math.random(), y:Math.random() },
      { id: 'n14', label: 'SMAD3', size:1, x:Math.random(), y:Math.random() },
      { id: 'n15', label: 'SPTBN4', size:1, x:Math.random(), y:Math.random() },
      { id: 'n16', label: 'RYR2', size:1, x:Math.random(), y:Math.random() },
      { id: 'n17', label: 'SRI', size:1, x:Math.random(), y:Math.random() },
      { id: 'n18', label: 'PPM1A', size:1, x:Math.random(), y:Math.random() },
      { id: 'n19', label: 'PCBD1', size:1, x:Math.random(), y:Math.random() },
      { id: 'n20', label: 'CABP1', size:1, x:Math.random(), y:Math.random() },
      { id: 'n21', label: 'RIMS1', size:1, x:Math.random(), y:Math.random() },
      { id: 'n22', label: 'CACNB3', size:1, x:Math.random(), y:Math.random() },
      { id: 'n23', label: 'CACNA2D4', size:1, x:Math.random(), y:Math.random() },
      { id: 'n24', label: 'GNB1', size:1, x:Math.random(), y:Math.random() },
      { id: 'n25', label: 'PRKACA', size:1, x:Math.random(), y:Math.random() },
      { id: 'n26', label: 'CACNA1C', size:1, x:Math.random(), y:Math.random() }
    ],
    edges: [
      { id: 'e1', source: 'n1', target: 'n2' },
      { id: 'e2', source: 'n1', target: 'n3' },
      { id: 'e3', source: 'n1', target: 'n4' },
      { id: 'e4', source: 'n1', target: 'n5' },
      { id: 'e5', source: 'n1', target: 'n6' },
      { id: 'e6', source: 'n1', target: 'n7' },
      { id: 'e7', source: 'n1', target: 'n8' },
      { id: 'e8', source: 'n1', target: 'n9' },
      { id: 'e9', source: 'n1', target: 'n10' },
      { id: 'e10', source: 'n1', target: 'n11' },
      { id: 'e11', source: 'n1', target: 'n12' },
      { id: 'e12', source: 'n1', target: 'n13' },
      { id: 'e13', source: 'n1', target: 'n14' },
      { id: 'e14', source: 'n1', target: 'n15' },
      { id: 'e15', source: 'n3', target: 'n4' },
      { id: 'e16', source: 'n5', target: 'n6' },
      { id: 'e17', source: 'n6', target: 'n7' },
      { id: 'e18', source: 'n10', target: 'n11' },
      { id: 'e19', source: 'n13', target: 'n14' },
      { id: 'e20', source: 'n13', target: 'n16' },
      { id: 'e21', source: 'n11', target: 'n18' },
      { id: 'e22', source: 'n16', target: 'n25' },
      { id: 'e23', source: 'n16', target: 'n17' },
      { id: 'e24', source: 'n22', target: 'n23' },
      { id: 'e25', source: 'n26', target: 'n16' },
      { id: 'e26', source: 'n26', target: 'n17' },
      { id: 'e27', source: 'n26', target: 'n18' },
      { id: 'e28', source: 'n26', target: 'n19' },
      { id: 'e29', source: 'n26', target: 'n20' },
      { id: 'e30', source: 'n26', target: 'n21' },
      { id: 'e31', source: 'n26', target: 'n22' },
      { id: 'e32', source: 'n26', target: 'n23' },
      { id: 'e33', source: 'n26', target: 'n24' },
      { id: 'e34', source: 'n26', target: 'n25' }
    ]
 });


s.settings({
  nodeColor: 'default',
  defaultNodeColor: 'grey'
});

s.startForceAtlas2();

//needed if not calling the layout
//s.refresh();
