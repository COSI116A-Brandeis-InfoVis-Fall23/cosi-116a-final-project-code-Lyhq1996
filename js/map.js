// Use the function to filter records for different years
// function filterByYear(data, year) {
//   return data.filter(item => item.year === year);
// }

const sampleData = [
  {
    year: 2021,
    state: "CT",
    homeless: 2,
    medianRent: 1491,
  },
  {
    year: 2021,
    state: "MA",
    homeless: 15,
    medianRent: 1374,
  },
  {
    year: 2021,
    state: "ME",
    homeless: 2,
    medianRent: 995,
  },
  {
    year: 2021,
    state: "NH",
    homeless: 1,
    medianRent: 1226,
  },
  {
    year: 2021,
    state: "RI",
    homeless: 1,
    medianRent: 1437,
  },
  {
    year: 2021,
    state: "VT",
    homeless: 2,
    medianRent: 1046,
  },
];

function tooltipHtml(n, d) {
  /* function to create html content string in tooltip div. */
  return (
    "<h4>" +
    n +
    "</h4><table>" +
    "<tr><td>Year</td><td>" +
    d.year +
    "</td></tr>" +
    "<tr><td>Median Rent</td><td>" +
    d.medianRent +
    "</td></tr>" +
    "<tr><td>Homeless</td><td>" +
    d.homeless +
    "</td></tr>" +
    "</table>"
  );
}

// Create an object to store the data for each state
const dataByState = {};

[
  "HI",
  "AK",
  "FL",
  "SC",
  "GA",
  "AL",
  "NC",
  "TN",
  "RI",
  "CT",
  "MA",
  "ME",
  "NH",
  "VT",
  "NY",
  "NJ",
  "PA",
  "DE",
  "MD",
  "WV",
  "KY",
  "OH",
  "MI",
  "WY",
  "MT",
  "ID",
  "WA",
  "DC",
  "TX",
  "CA",
  "AZ",
  "NV",
  "UT",
  "CO",
  "NM",
  "OR",
  "ND",
  "SD",
  "NE",
  "IA",
  "MS",
  "IN",
  "IL",
  "MN",
  "WI",
  "MO",
  "AR",
  "OK",
  "KS",
  "LS",
  "VA",
].forEach(function (d) {
  // Check if the state is one of CT, MA, ME, NH, RI, VT
  if (["CT", "MA", "ME", "NH", "RI", "VT"].includes(d)) {
    const stateData = sampleData.find((entry) => entry.state === d);
    dataByState[d] = {
      year: stateData.year,
      medianRent: stateData.medianRent,
      homeless: stateData.homeless,
      // Adjust the color scale based on data range
      color: d3.interpolate("#ffffcc", "#800026")(stateData.medianRent / 2000),
    };
  } else {
    // For other states, assign the same color, a lighter shade, and no data
    dataByState[d] = {
      year: 2021,
      medianRent: 0,
      homeless: 0,
      color: "#f0f0f0", // Lighter shade
    };
  }
});

/* draw states on id #stateMap */
uStates.draw("#stateMap", dataByState, tooltipHtml);
d3.select(self.frameElement).style("height", "600px");

