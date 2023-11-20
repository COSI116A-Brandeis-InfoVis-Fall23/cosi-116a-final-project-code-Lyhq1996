const fs = require("fs");
const csv = require("csv-parser");

const data = [];

fs.createReadStream("data/raw-merged-data.csv")
  .pipe(csv())
  .on("data", (row) => {
    data.push({
      year: parseInt(row.year),
      state: row.state,
      homeless: parseInt(row.homeless),
      medianRent: parseInt(row.medianRent),
    });
  })
  .on("end", () => {
    const jsonData = JSON.stringify(data, null, 4);

    fs.writeFile("data/data.json", jsonData, (err) => {
      if (err) throw err;
      console.log("Data converted and saved to output.json");
    });
  });

// check if csv file correctly parsed
fs.readFile("data.json", "utf8", (err, data) => {
  const jsonData = JSON.parse(data);
  const numberOfObjects = jsonData.length;
  console.log(`Number of objects in the JSON file: ${numberOfObjects}`);
});
