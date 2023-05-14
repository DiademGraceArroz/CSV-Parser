import { readFileSync, writeFileSync } from "fs";

function csvToJson(csvFilePath) {
  const fileData = readFileSync(csvFilePath, "utf-8");
  const rows = fileData.split("\n");
  const headerRow = rows[0].split(",");
  const jsonData = [];

  for (let i = 1; i < rows.length; i++) {
    const fields = rows[i].split(",");
    const rowObj = {};

    rowObj.title = fields[0];
    rowObj.artist = fields[1];
    rowObj.genre = fields[2];
    rowObj.features = [Number(fields[3]), Number(fields[4]), Number(fields[5])];

    jsonData.push(rowObj);
  }

  return jsonData;
}

// Example usage
const json = csvToJson("musicData.csv");
console.log(json);
writeFileSync("convertedData.json", JSON.stringify(json));
