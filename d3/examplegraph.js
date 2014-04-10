'use strict';

//data for d3
//
var graphdata = {
  nodes: [
  { name: 'ANK3' },
  { name: 'SCN2A' },
  { name: 'FADD' },
  { name: 'FAS'  },
  { name: 'SCNN1B' },
  { name: 'CNTN1' },
  { name: 'SCN1B' },
  { name: 'KCNC1' },
  { name: 'KCNC2' },
  { name: 'CRKL' },
  { name: 'PIK3R1' },
  { name: 'HOOK1' },
  { name: 'SMAD2' },
  { name: 'SMAD3' },
  { name: 'SPTBN4' },
  { name: 'RYR2' },
  { name: 'SRI' },
  { name: 'PPM1A' },
  { name: 'PCBD1' },
  { name: 'CABP1' },
  { name: 'RIMS1' },
  { name: 'CACNB3' },
  { name: 'CACNA2D4' },
  { name: 'GNB1' },
  { name: 'PRKACA' },
  { name: 'CACNA1C' }
  ],
  edges: [
  { id: 'e1', source: 0, target: 1 },
  { id: 'e2', source: 0, target: 2 },
  { id: 'e3', source: 0, target: 3 },
  { id: 'e4', source: 0, target: 4 },
  { id: 'e5', source: 0, target: 5 },
  { id: 'e6', source: 0, target: 6 },
  { id: 'e7', source: 0, target: 7 },
  { id: 'e8', source: 0, target: 8 },
  { id: 'e9', source: 0, target: 9 },
  { id: 'e10', source: 0, target: 10 },
  { id: 'e11', source: 0, target: 11 },
  { id: 'e12', source: 0, target: 12 },
  { id: 'e13', source: 0, target: 13 },
  { id: 'e14', source: 0, target: 14 },
  { id: 'e15', source: 2, target: 3 },
  { id: 'e16', source: 4, target: 5 },
  { id: 'e17', source: 5, target: 6 },
  { id: 'e18', source: 9, target: 10 },
  { id: 'e19', source: 12, target: 13 },
  { id: 'e20', source: 12, target: 15 },
  { id: 'e21', source: 10, target: 17 },
  { id: 'e22', source: 15, target: 24 },
  { id: 'e23', source: 15, target: 16 },
  { id: 'e24', source: 21, target: 22 },
  { id: 'e25', source: 25, target: 15 },
  { id: 'e26', source: 25, target: 16 },
  { id: 'e27', source: 25, target: 17 },
  { id: 'e28', source: 25, target: 18 },
  { id: 'e29', source: 25, target: 19 },
  { id: 'e30', source: 25, target: 20 },
  { id: 'e31', source: 25, target: 21 },
  { id: 'e32', source: 25, target: 22 },
  { id: 'e33', source: 25, target: 23 },
  { id: 'e34', source: 25, target: 24 }
  ]
};

var w = 960;
var h = 500;

var colors = d3.scale.category20();

var svg = d3.select("body").append("svg")
    .attr("width", w)
    .attr("height", h);

var force = d3.layout.force()
              .charge(-300)
              .linkDistance(80)
              .chargeDistance(300)
              .gravity(0.05)
              .size([w,h]);

var n = graphdata.nodes.length;

force.nodes(graphdata.nodes).links(graphdata.edges);

graphdata.nodes.forEach(function(d, i) { d.x = d.y = w / n * i; });

force.start();
for (var i = 6*n; i > 0; --i) force.tick();
force.stop();

// Center the nodes in the middle.
var ox = 0, oy = 0;
graphdata.nodes.forEach(function(d) { ox += d.x; oy += d.y; });
ox = ox / n - w / 2; oy = oy / n - h / 2;
graphdata.nodes.forEach(function(d) { d.x -= ox; d.y -= oy; });


var edges = svg.selectAll('line')
              .data(graphdata.edges)
              .enter()
              .append('line')
              .attr("x1", function(d) { return d.source.x; })
              .attr("y1", function(d) { return d.source.y; })
              .attr("x2", function(d) { return d.target.x; })
              .attr("y2", function(d) { return d.target.y; })
              .style("stroke",'#ccc')
              .style('stroke-width',1);

var nodes = svg.selectAll('circle')
              .data(graphdata.nodes)
              .enter()
              .append('circle')
              .attr("cx", function(d) { return d.x; })
              .attr("cy", function(d) { return d.y; })
              .attr("r",5)
              .style("fill",function(d,i){
                  return 'grey'; //colors(i);
                })
                .call(force.drag);

var labels = svg.selectAll('text')
              .data(graphdata.nodes)
              .enter().append('text')
              .attr('fill','black')
              .attr('transform', function(d) { return 'translate('+(d.x+5)+','+(d.y+5)+')'; })
              .text(function(d) { return d.name; });
