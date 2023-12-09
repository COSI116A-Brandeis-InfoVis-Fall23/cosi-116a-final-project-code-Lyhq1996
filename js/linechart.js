d3.select("#linechart")
  .append("h3")
  .text("Median Monthly Rent in New England Area");

// set the dimensions and margins of the graph
var margin = { top: 10, right: 30, bottom: 30, left: 60 },
  width = 460 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom,
  ourBrush = null,
  selectableElements = d3.select(null),
  dispatcher;


// append the svg object to the body of the page
var svg = d3
  .select("#linechart")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// X-axis Label
svg
  .append("text")
  .attr("class", "x-axis-label")
  .attr("text-anchor", "end")
  .attr("x", width)
  .attr("y", height + margin.top + 20)

  .text("Year");

// Y-axis Label
svg
  .append("text")
  .attr("class", "y-axis-label")
  .attr("text-anchor", "end")
  .attr("transform", "rotate(-90)")
  .attr("y", -margin.left + 20) // Adjust the position as needed
  .attr("x", -margin.top)
  .text("Median Monthly Rent");

//Read the data
d3.csv("data/raw-merged-data.csv", function (data) {
  // group the data: I want to draw one line per group
  var sumstat = d3
    .nest() // nest function allows to group the calculation per level of a factor
    .key(function (d) {
      return d.state;
    })
    .entries(data);

  // Add X axis --> it is a date format
  var x = d3
    .scaleLinear()
    .domain(
      d3.extent(data, function (d) {
        return d.year;
      })
    )
    .range([0, width]);
  svg
    .append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x).ticks(5));

  // Add Y axis
  var y = d3
    .scaleLinear()
    .domain([
      0,
      d3.max(data, function (d) {
        return +d.medianRent;
      }),
    ])
    .range([height, 0]);
  svg.append("g").call(d3.axisLeft(y));

  // color palette
  var res = sumstat.map(function (d) {
    return d.key;
  }); // list of group names
  var color = d3
    .scaleOrdinal()
    .domain(res)
    .range([
      "#e41a1c",
      "#377eb8",
      "#4daf4a",
      "#984ea3",
      "#ff7f00",
      "#ffff33",
      "#a65628",
      "#f781bf",
      "#999999",
    ]);

  // Draw the line
  svg
    .selectAll(".line")
    .data(sumstat)
    .enter()
    .append("path")
    .attr("fill", "none")
    .attr("stroke", function (d) {
      return color(d.key);
    })
    .attr("stroke-width", 1.5)
    .attr("d", function (d) {
      return d3
        .line()
        .x(function (d) {
          return x(d.year);
        })
        .y(function (d) {
          return y(+d.medianRent);
        })(d.values);
    });


// Add the points
let points = svg
  .selectAll(".dot") // Select existing elements with class "dot" (if any)
  .data(sumstat) // Bind data to these elements
  .enter()
  .append("g")
  .attr("class", "dot") // Append a new group for each data point
  .selectAll("circle")
  .data(function (d) {
    return d.values; // Access the nested data array for each line
  })
  .enter()
  .append("circle")
  .attr("r", 5)
  .attr("cx", function (d) {
    return x(d.year); // Use the x scale to position the circles on the x-axis
  })
  .attr("cy", function (d) {
    return y(+d.medianRent); // Use the y scale to position the circles on the y-axis
  });


});
