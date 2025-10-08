const mongoose = require("mongoose");
const connectDB = require("../config/db.js");

const Role = require("../models/Role.js");
const BlockType = require("../models/BlockType.js");
const SurveyTopic = require("../models/SurveyTopic.js");
const QuestionType = require("../models/QuestionType.js");
const QBCategory = require("../models/QBCategory.js");
const SurveyType = require("../models/SurveyType.js");
const Corporation = require("../models/Corporation.js");
const Designation = require("../models/Designation.js");
const Assembly = require("../models/Assembly.js");
const Ward = require("../models/Ward.js");

const masterDataSeeds = async () => {
  try {
    await connectDB();
    console.log("Connected to MongoDB");

    const roleData = [
      "SuperAdmin",
      "Admin",
      "Volunteer",
      "BackendTeam",
      "ASMs",
    ];
    const blockTypeData = [
      "Lake",
      "MLl",
      "Aoad/Avenue/Street",
      "Bus Stand/Station",
      "Layout",
      "Railway Station",
      "Airport",
      "Park",
      "Restaurant/Tapri",
      "Apartment/Villa/Society",
      "Community (slum, etc)",
    ];
    const surveyTopicData = [
      "General Campaign",
      "Voter id",
      "Waste Collection Fee",
      "Health related",
      "Vaccination Drive",
      "E-Khata",
    ];
    const questionTypeData = [
      "multiple choice",
      "radio button",
      "number value",
      "text value",
    ];
    const qbCategoryData = ["initial", "follow-up", "prep", "closing"];
    const surveyTypeData = ["D2D", "Voxpop"];
    const corporationData = [
      "Bengaluru South",
      "Bengaluru Central",
      "Bengaluru West",
      "Bengaluru East",
      "Bengaluru North",
    ];
    const designationData = [
      "President",
      "Chief of Staff",
      "Volunteer",
      "ASM",
      "Zonal Leader",
      "Treasurer",
      "Secretary",
      "Ward Leader",
      "Area Leader",
    ];
    const assemblyData = [
      "Anekal (SC)",
      "Bangalore South",
      "Basavanagudi",
      "Bommanahalli",
      "BTM Layout",
      "Byatarayanapura",
      "Chamarajpet",
      "Chickpet",
      "CV Raman Nagar",
      "Dasarahalli",
      "Gandhi Nagar",
      "Govindaraj Nagar",
      "Hebbal",
      "Jayanagar",
      "K.R. Puram",
      "Mahadevapura (SC)",
      "Mahalakshmi Layout",
      "Malleshwaram",
      "Padmanabha Nagar",
      "Pulakeshi Nagar (SC)",
      "Rajaji Nagar",
      "Rajarajeshwari Nagar",
      "Sarvagna Nagar",
      "Shanthi Nagar",
      "Shivaji Nagar",
      "Vijaya Nagar",
      "Yelahanka",
      "Yeshwantpur",
    ];

    await Promise.all([
      Role.insertMany(
        roleData.map((name) => ({ name })),
        { ordered: false }
      ),
      BlockType.insertMany(
        blockTypeData.map((name) => ({ name })),
        { ordered: false }
      ),
      SurveyTopic.insertMany(
        surveyTopicData.map((name) => ({ name })),
        { ordered: false }
      ),
      QuestionType.insertMany(
        questionTypeData.map((name) => ({ name })),
        { ordered: false }
      ),
      QBCategory.insertMany(
        qbCategoryData.map((name) => ({ name })),
        { ordered: false }
      ),
      SurveyType.insertMany(
        surveyTypeData.map((name) => ({ name })),
        { ordered: false }
      ),
      Corporation.insertMany(
        corporationData.map((name) => ({ name })),
        { ordered: false }
      ),
      Designation.insertMany(
        designationData.map((name) => ({ name })),
        { ordered: false }
      ),
      //   Assembly.insertMany(
      //     assemblyData.map((name) => ({ name })),
      //     { ordered: false }
      //   ),
    ]);

    console.log(" Master data seeded successfully!");
    process.exit(0);
  } catch (err) {
    console.error(" MongoDB seeding failed:", err.message);
    process.exit(1);
  }
};

masterDataSeeds();
