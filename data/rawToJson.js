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
      console.log("Data converted and saved to data.json");
    });
  });
