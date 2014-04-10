'use strict';
var cy = cytoscape({
  container: document.getElementById('cy'),
  style: cytoscape.stylesheet()
      .selector('node')
        .css({
          'content': 'data(name)',
          'font-family': 'helvetica',
          'font-size': 11,
          'text-valign': 'center',
          'color': '#000',
          'width': 60,
          'height': 60,
          'background-opacity': 0.5
        }),
  ready: function(){}
});

var graphelements = {
    nodes: [
      { data: { id: 'n1', name: 'ANK3' } },
      { data: { id: 'n2', name: 'SCN2A' } },
      { data: { id: 'n3', name: 'FADD' } },
      { data: { id: 'n4', name: 'FAS' }  },
      { data: { id: 'n5', name: 'SCNN1B' } },
      { data: { id: 'n6', name: 'CNTN1' } },
      { data: { id: 'n7', name: 'SCN1B' } },
      { data: { id: 'n8', name: 'KCNC1' } },
      { data: { id: 'n9', name: 'KCNC2' } },
      { data: { id: 'n10', name: 'CRKL' } },
      { data: { id: 'n11', name: 'PIK3R1' }},
      { data: { id: 'n12', name: 'HOOK1' } },
      { data: { id: 'n13', name: 'SMAD2' } },
      { data: { id: 'n14', name: 'SMAD3' } },
      { data: { id: 'n15', name: 'SPTBN4' } },
      { data: { id: 'n16', name: 'RYR2' } },
      { data: { id: 'n17', name: 'SRI' }},
      { data: { id: 'n18', name: 'PPM1A' }},
      { data: { id: 'n19', name: 'PCBD1' }},
      { data: { id: 'n20', name: 'CABP1' }},
      { data: { id: 'n21', name: 'RIMS1' }},
      { data: { id: 'n22', name: 'CACNB3' }},
      { data: { id: 'n23', name: 'CACNA2D4' }},
      { data: { id: 'n24', name: 'GNB1' }},
      { data: { id: 'n25', name: 'PRKACA' }},
      { data: { id: 'n26', name: 'CACNA1C' }}
    ],
    edges: [
      { data: { id: 'e1', source: 'n1', target: 'n2' } },
      { data: { id: 'e2', source: 'n1', target: 'n3' } },
      { data: { id: 'e3', source: 'n1', target: 'n4' } },
      { data: { id: 'e4', source: 'n1', target: 'n5' } },
      { data: { id: 'e5', source: 'n1', target: 'n6' } },
      { data: { id: 'e6', source: 'n1', target: 'n7' } },
      { data: { id: 'e7', source: 'n1', target: 'n8' } },
      { data: { id: 'e8', source: 'n1', target: 'n9' } },
      { data: { id: 'e9', source: 'n1', target: 'n10' } },
      { data: { id: 'e10', source: 'n1', target: 'n11' } },
      { data: { id: 'e11', source: 'n1', target: 'n12' } },
      { data: { id: 'e12', source: 'n1', target: 'n13' } },
      { data: { id: 'e13', source: 'n1', target: 'n14' } },
      { data: { id: 'e14', source: 'n1', target: 'n15' } },
      { data: { id: 'e15', source: 'n3', target: 'n4' } },
      { data: { id: 'e16', source: 'n5', target: 'n6' } },
      { data: { id: 'e17', source: 'n6', target: 'n7' } },
      { data: { id: 'e18', source: 'n10', target: 'n11' } },
      { data: { id: 'e19', source: 'n13', target: 'n14' } },
      { data: { id: 'e20', source: 'n13', target: 'n16' }},
      { data: { id: 'e21', source: 'n11', target: 'n18' }},
      { data: { id: 'e22', source: 'n16', target: 'n25' }},
      { data: { id: 'e23', source: 'n16', target: 'n17' }},
      { data: { id: 'e24', source: 'n22', target: 'n23' }},
      { data: { id: 'e25', source: 'n26', target: 'n16' }},
      { data: { id: 'e26', source: 'n26', target: 'n17' }},
      { data: { id: 'e27', source: 'n26', target: 'n18' }},
      { data: { id: 'e28', source: 'n26', target: 'n19' }},
      { data: { id: 'e29', source: 'n26', target: 'n20' }},
      { data: { id: 'e30', source: 'n26', target: 'n21' }},
      { data: { id: 'e31', source: 'n26', target: 'n22' }},
      { data: { id: 'e32', source: 'n26', target: 'n23' }},
      { data: { id: 'e33', source: 'n26', target: 'n24' }},
      { data: { id: 'e34', source: 'n26', target: 'n25' }}
    ]
 };

cy.load(graphelements);

/* using breadth first search layout
var opt = {
  name: 'breadthfirst',
  circle: true,
  roots: ['n1','n26'] //cy.getElementById('n1')
};
NOTE: BFS is currently broken in distributed cytoscape.js */

/**/
var opt = {
  name: 'cose'
};
/**/

/*
var opt = {
  name: 'arbor',
  liveUpdate: false
};
*/

cy.layout(opt);
