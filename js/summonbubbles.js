var bb = function() {
var margin = 15,
    diameter = 500;

var color = d3.scale.linear()
    .domain([1, 2])
    .range(["hsl(200,65%,75%)", "hsl(200,75%,75%)"])
    .interpolate(d3.interpolateHcl);

var pack = d3.layout.pack()
    .padding(8)
    .size([diameter - margin, diameter - margin])
    .value(function(d) { return 450; })

var svg = d3.select("#bubbles").append("svg")
    .attr("width", diameter)
    .attr("height", diameter)
  .append("g")
    .attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");

d3.json("js/summonflare.json", function(error, root) {
  if (error) throw error;

  var focus = root,
      nodes = pack.nodes(root),
      view,
      alt="+";
 
  var circle = svg.selectAll("circle")
      .data(nodes)
    .enter().append("circle")
      .attr("class", function(d) { return d.parent ? d.children ? "node node--middle" : "node node--leaf" : "node node--root"; })
      .style("fill", function(d) { return d.parent ? d.children ? "#72d2f2" : "#ffffb9" : "transparent"; })
      //.style("fill", function(d) { return d.children ? color(d.depth) : null; })
      .style("display", function(d) { return d.children ? "#72d2f2" : null; })
      .on("click", function(d) { 
        if (d.depth===1 || d.depth===2) {
          $("#bubbles").css("border", "1px solid #333");
        } else {
          $("#bubbles").css("border", "none");
        }
        if (typeof d.children === 'undefined' && d.parent===focus) {
          let option = summonoptions[d.name].value;
          if (!summonobj.params.fvf.includes(option)) {
            let xbutton = $("<i class='glyphicon glyphicon-remove'></i>");
            let htmlsrc= summonoptions[d.parent.name].label + ": " + summonoptions[d.name].label;
            let li = $("<li></li>").addClass("bubblefilter");
            li.text(htmlsrc).on("click", function() {
              summonobj.params.fvf.pop(option);
              $(this).remove();
            });
          
            li.append(xbutton).appendTo("ul#bubblepanel");
            summonobj.params.fvf.push(option); 
          }
        } 
        if (d===root || d.parent === root) {
          zoom(d), d3.event.stopPropagation();
          return;
        }
        
      });

  var text = svg.selectAll("text")
      .data(nodes)
    .enter().append("text")
      .attr("class", "label")
      .style("fill-opacity", function(d) { return d.parent === root ? 1 : 0; })
      .style("display", function(d) { 
        return d.parent === root ? "inline" : "none"; 
      })
      .attr("dy", function(d) {
       
        alt = alt === "+" ? "-" : "+";
        return summonoptions[d.name].label.length > 12 ? alt + ".75em" : "+.25em";
      })
      .text(function(d) { return summonoptions[d.name].label; });

   var node = svg.selectAll("circle,text");

   // d3.select("#bubbles")
   //        .on("click", function() { console.log(this); zoom(root); });

  zoomTo([root.x, root.y, root.r * 2 + margin]);

  function zoom(d) {
    var focus0 = focus; focus = d;

    var transition = d3.transition()
        .duration(d3.event.altKey ? 7500 : 750)
        .tween("zoom", function(d) {
          var i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2 + margin]);
          return function(t) { zoomTo(i(t)); };
        });

    transition.selectAll("text")
      .filter(function(d) { return d.parent === focus || this.style.display === "inline"; })
        .style("fill-opacity", function(d) {return d.parent === focus ? 1 : 0; })
        .each("start", function(d) { if (d.parent === focus) {this.style.display = "inline"; }})
        .each("end", function(d) { if (d.parent !== focus) this.style.display = "none"; });
  }

  function zoomTo(v) {
    var k = diameter / v[2]; view = v;
    node.attr("transform", function(d) { return "translate(" + (d.x - v[0]) * k + "," + (d.y - v[1]) * k + ")"; });
    circle.attr("r", function(d) { return d.r * k; });
  }
 });

 d3.select(self.frameElement).style("height", diameter + "px");
};
