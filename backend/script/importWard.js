const XLSX = require("xlsx");
const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = require("../config/db.js");
const Ward = require("../models/Ward.js");

const importWards = async () => {
  try {
    await connectDB();

    const workbook = XLSX.readFile("./wardlist.xlsx");
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = XLSX.utils.sheet_to_json(sheet);

    const wards = data.map((row) => ({
      oldWardNumber: row["Ward"],
      oldWardName: row["Ward Name (225 structure)"],
    }));

    if (!wards.length) {
      console.log("No ward data found in Excel file.");
      return;
    }

    await Ward.deleteMany({});

    await Ward.insertMany(wards);
    console.log(" Wards imported successfully!");
  } catch (err) {
    console.error("Import failed:", err.message);
  } finally {
    mongoose.connection.close();
  }
};

importWards();
